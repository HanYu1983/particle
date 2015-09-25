package hello

import (
  "net/http"
  "lib/tool"
  "appengine"
  "lib/db/file"
  "encoding/json"
  "strconv"
  "appengine/datastore"
  "fmt"
  "crypto/rand"
  "io"
  "errors"
)

var _ = dbfile.GetFile

type WeaponInfo struct {
  Name string   `json:"name"`
  Level int     `json:"level"`
  Weight int    `json:"weight"`
  Power int     `json:"power"`
  Type string   `json:"type"`
}

type SkillInfo struct{
  Name string   `json:"name"`
  Type string   `json:"type"`
  Cost string   `json:"cost"`
  Text string   `json:"text"`
}

type CardInfo struct {
  Id string           `json:"id"`
  Type string         `json:"type"`
  Weapon WeaponInfo   `json:"weapon"`
  Skill SkillInfo     `json:"skill"`
}

type CardInfos struct {
  Info []CardInfo `json:"info"`
}

// newUUID generates a random UUID according to RFC 4122
func newUUID() (string, error) {
	uuid := make([]byte, 16)
	n, err := io.ReadFull(rand.Reader, uuid)
	if n != len(uuid) || err != nil {
		return "", err
	}
	// variant bits; see section 4.1.1
	uuid[8] = uuid[8]&^0xc0 | 0x80
	// version 4 (pseudo-random); see section 4.1.3
	uuid[6] = uuid[6]&^0xf0 | 0x40
	return fmt.Sprintf("%x-%x-%x-%x-%x", uuid[0:4], uuid[4:6], uuid[6:8], uuid[8:10], uuid[10:]), nil
}

func CardList(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  ctx := appengine.NewContext( r )
  
  file, err := dbfile.GetFile( ctx, CardInfoPosition )
  tool.Assert( tool.IfError( err ) ) 
  
  fmt.Fprintf(w, "%v", string( file.Content ))
}

func DeleteCard(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  ctx := appengine.NewContext( r )
  var _ = ctx
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) ) 
  
  tool.Assert( tool.ParameterIsNotExist( form, "Id" ) )
  
  id := form["Id"][0]
  
  err = datastore.RunInTransaction(ctx, func( c appengine.Context ) error {
    file, err := dbfile.GetFile( ctx, CardInfoPosition )
    if err != nil {
      return err
    }
    
    var infos CardInfos
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
    
    _, err = dbfile.MakeFile( ctx, file.Position, file.Name, data, true )
    if err != nil {
      return err
    }
    
    return err
  }, nil)
  
  tool.Assert( tool.IfError( err ) )
  Output( w, nil, nil )
}

func AddCard(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  ctx := appengine.NewContext( r )
  var _ = ctx
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) ) 
  
  tool.Assert( tool.ParameterIsNotExist( form, "WName" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "WLevel" ) )
  tool.Assert( tool.ParameterIsNotExist( form, "WWeight" ) )
  tool.Assert( tool.ParameterIsNotExist( form, "WPower" ) )
  tool.Assert( tool.ParameterIsNotExist( form, "WType" ) )
  tool.Assert( tool.ParameterIsNotExist( form, "SName" ) )
  tool.Assert( tool.ParameterIsNotExist( form, "SType" ) )
  tool.Assert( tool.ParameterIsNotExist( form, "SCost" ) )
  tool.Assert( tool.ParameterIsNotExist( form, "SText" ) )
  tool.Assert( tool.ParameterIsNotExist( form, "Type" ) )
  
  WName := form["WName"][0]
  WType := form["WType"][0]
  SName := form["SName"][0]
  SType := form["SType"][0]
  SText := form["SText"][0]
  SCost := form["SCost"][0]
  Type := form["Type"][0]
  WLevel, err := strconv.Atoi( form["WLevel"][0] )
  WWeight, err := strconv.Atoi( form["WWeight"][0] )
  tool.Assert( tool.IfError( err ) )
  WPower, err := strconv.Atoi( form["WPower"][0] )
  tool.Assert( tool.IfError( err ) )
  
  card := CardInfo {
    Type: Type,
    Weapon: WeaponInfo{
      Name: WName,
      Type: WType,
      Level: WLevel,
      Weight: WWeight,
      Power: WPower,
    },
    Skill: SkillInfo{
      Name: SName,
      Type: SType,
      Text: SText,
      Cost: SCost,
    },
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
    
    var infos CardInfos
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
      uuid, err := newUUID()
      if err != nil {
        return err
      }
      card.Id = uuid
      infos.Info = append( infos.Info, card )
      
    }
    
    data, err := json.Marshal( &infos )
    if err != nil {
      return err
    }
    
    _, err = dbfile.MakeFile( ctx, file.Position, file.Name, data, true )
    if err != nil {
      return err
    }
    
    return err
  }, nil)
  
  tool.Assert( tool.IfError( err ) )
  Output( w, nil, nil )
}