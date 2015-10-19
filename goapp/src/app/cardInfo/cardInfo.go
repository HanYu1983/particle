package cardInfo

import (
  "fmt"
  "net/http"
  "appengine"
  "appengine/datastore"
  "lib/tool"
  "lib/db/file"
  "encoding/json"
  "errors"
)

var _ = fmt.Printf

type CardInfo struct {
  Id string
  Params [30]string
}

type CardInfoContext struct{
  CurrentId int64
  Info []CardInfo
}

var CardInfoPosition int64

func SetCardInfoPosition ( position int64 ) {
  CardInfoPosition = position
}


func CardList (w http.ResponseWriter, r *http.Request){
  defer tool.Recover( func(err error){
    tool.Output( w, nil, err.Error() )
  })
  
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  ctx := appengine.NewContext( r )
  
  file, err := dbfile.GetFile( ctx, CardInfoPosition )
  tool.Assert( tool.IfError( err ) )
  
  tool.Output( w, string(file.Content), nil )
}

func DeleteCard (w http.ResponseWriter, r *http.Request){
  defer tool.Recover( func(err error){
    tool.Output( w, nil, err.Error() )
  })
  
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  ctx := appengine.NewContext( r )
  var _ = ctx
  
  r.ParseForm()
  form := r.PostForm
  //form := r.Form
  
  tool.Assert( tool.ParameterIsNotExist( form, "Id" ) )
  
  id := form["Id"][0]
  
  err := datastore.RunInTransaction(ctx, func( c appengine.Context ) error {
    file, err := dbfile.GetFile( ctx, CardInfoPosition )
    if err != nil {
      return err
    }
    
    var infos CardInfoContext
    err = json.Unmarshal( file.Content, &infos )
    if err != nil {
      return err
    }
    
    var ok bool
    for idx, originCard := range infos.Info {
      if originCard.Id == id {
        infos.Info = append(infos.Info[:idx], infos.Info[idx+1:]...)
        ok = true
        break
      }
    }
    
    if ok == false {
      return errors.New( fmt.Sprintf("item not found %v", id) )
    }
    
    data, err := json.Marshal( &infos )
    if err != nil {
      return err
    }
    
    _, err = dbfile.MakeFile( ctx, file.Position, file.Name, data, true, "" )
    if err != nil {
      return err
    }
    
    return err
  }, nil)
  
  tool.Assert( tool.IfError( err ) )
  tool.Output( w, nil, nil )
}

func AddCard (w http.ResponseWriter, r *http.Request){
  defer tool.Recover( func(err error){
    tool.Output( w, nil, err.Error() )
  })
  
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  ctx := appengine.NewContext( r )
  
  r.ParseForm()
  form := r.PostForm
  //form := r.Form
  
  card := CardInfo {
    Params: [30]string{},
  }
  
  tool.Assert( tool.ParameterIsNotExist( form, "Params" ) )
  
  var ps []string
  err := json.Unmarshal( []byte(form["Params"][0]), &ps )
  tool.Assert( tool.IfError( err ) )
  
  for i, v := range ps {
    card.Params[i] = v
  }
  
  var id string
  if len( form["Id"] ) > 0 {
    id = form["Id"][0]
  }
  
  err = datastore.RunInTransaction(ctx, func( c appengine.Context ) error {
    file, err := dbfile.GetFile( ctx, CardInfoPosition )
    if err != nil {
      return err
    }
    
    var infos CardInfoContext
    err = json.Unmarshal( file.Content, &infos )
    if err != nil {
      return err
    }
    
    if id != "" {
      var ok bool
      for idx, originCard := range infos.Info {
        if originCard.Id == id {
          card.Id = id
          infos.Info[idx] = card
          ok = true
          break
        }
      }
      
      if ok == false {
        return errors.New( fmt.Sprintf("item not found %v", id) )
      }
      
    } else {
      card.Id = fmt.Sprintf("%v", infos.CurrentId)
      infos.Info = append( infos.Info, card )
      infos.CurrentId += 1
    }
    
    data, err := json.Marshal( &infos )
    if err != nil {
      return err
    }
    
    _, err = dbfile.MakeFile( ctx, file.Position, file.Name, data, true, "" )
    if err != nil {
      return err
    }
    
    return err
  }, nil)
  
  tool.Assert( tool.IfError( err ) )
  tool.Output( w, nil, nil )
}