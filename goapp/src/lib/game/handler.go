package game

import (
  "fmt"
  "net/http"
  "lib/tool"
  "appengine"
  "encoding/json"
  "time"
  "lib/db/file"
  "appengine/datastore"
  "errors"
)

var _ = time.Millisecond

func WithTransaction ( ctx appengine.Context, retry int, fn func(c appengine.Context)error ) error {
  var err error
  RunTransaction := func() error {
    err = datastore.RunInTransaction(ctx, fn, nil)
    return err
  }
  
  var times int
  for times < retry {
    err = RunTransaction()
    if err == nil {
      break
    }
  }
  return err
}

func LoadGameContext (ctx appengine.Context) (Context, error) {
  files, _, err := dbfile.QueryKeys( ctx, 0, "root" )
  if err != nil {
    return Context{}, err
  }
  if len( files ) == 0 {
    return Context{}, errors.New("root dir isn't exist")
  }
  
  rootDir := files[0].Key
  
  files, _, err = dbfile.QueryKeys( ctx, rootDir, "card" )
  if err != nil {
    return Context{}, err
  }
  
  if len( files ) == 0 {
    return Context{}, errors.New("card dir isn't exist")
  }
  
  cardDir := files[0].Key
  files, _, err = dbfile.QueryKeys( ctx, cardDir, "gameContext.json" )
  if err != nil {
    return Context{}, err
  }
  
  if len( files ) == 0 {
    return Context{}, errors.New("root/card/gameContext.json isn't exist")
  }
  
  var gameCtx Context
  err = json.Unmarshal( files[0].Content, &gameCtx )
  if err != nil {
    return Context{}, err
  }
  return gameCtx, nil
}

func SaveGameContext (ctx appengine.Context, gameCtx Context) error {
  files, _, err := dbfile.QueryKeys( ctx, 0, "root" )
  if err != nil {
    return err
  }
  if len( files ) == 0 {
    return errors.New("root dir isn't exist")
  }
  
  rootDir := files[0].Key
  
  files, _, err = dbfile.QueryKeys( ctx, rootDir, "card" )
  if err != nil {
    return err
  }
  if len( files ) == 0 {
    return errors.New("card dir isn't exist")
  }
  
  cardDir := files[0].Key
  
  data, err := json.Marshal( gameCtx )
  if err != nil {
    return err
  }
  
  _, err = dbfile.MakeFile( ctx, cardDir, "gameContext.json", []byte(data), true )
  if err != nil {
    return err
  }
  
  return nil
}

type Result struct {
  Info interface{}
  Error interface{}
}

func Output(w http.ResponseWriter, info, err interface{}){
  ret := Result{
    Info: info,
    Error: err,
  }
  jsonstr, _ := json.Marshal( ret )
  fmt.Fprintf(w, "%s", string( jsonstr ))
}

func CreateUser(w http.ResponseWriter, r *http.Request){
  
  ctx := appengine.NewContext( r )
  
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  if r.Method == "GET" {
    gameCtx, err := LoadGameContext( ctx )
    tool.Assert( tool.IfError( err ) )
    Output( w, gameCtx.Users, nil )
    return
  }
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  
  fbid := form["FBID"][0]
  tool.Assert( tool.ParameterIsNotExist( form, "Name" ) )
  
  err = WithTransaction(ctx, 3, func(ctx appengine.Context) error {
    gameCtx, err := LoadGameContext( ctx )
    if err != nil {
      return err
    }
  
    name := form["Name"][0]
    user := gameCtx.User(fbid)
    user.Name = name
    gameCtx.EditUser( user )
  
    err = SaveGameContext( ctx, gameCtx )
    return err
  })
 
  tool.Assert( tool.IfError( err ) )
  
  Output( w, nil, nil )
}

func CreateRoom (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  
  if r.Method == "GET" {
    gameCtx, err := LoadGameContext( ctx )
    tool.Assert( tool.IfError( err ) )
    Output( w, gameCtx.Rooms, nil )
    return
  }
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "ID" ) ) 
  
  id := form["ID"][0]
  
  tool.Assert( tool.ParameterIsNotExist( form, "Name" ) )
  
  err = WithTransaction(ctx, 3, func(ctx appengine.Context) error {
    gameCtx, err := LoadGameContext( ctx )
    if err != nil {
      return err
    }
  
    name := form["Name"][0]
    room := gameCtx.Room(id)
    room.Name = name
    gameCtx.EditRoom( room )
  
    err = SaveGameContext( ctx, gameCtx )
    return err
  })
 
  tool.Assert( tool.IfError( err ) )
  
  Output( w, nil, nil )
}

func EnterRoom (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  
  if r.Method == "GET" {
    gameCtx, err := LoadGameContext( ctx )
    tool.Assert( tool.IfError( err ) )
    Output( w, gameCtx.Rooms, nil )
    return
  }
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  
  fbid := form["FBID"][0]
  
  tool.Assert( tool.ParameterIsNotExist( form, "Room" ) )
  
  err = WithTransaction(ctx, 3, func(ctx appengine.Context) error {
    gameCtx, err := LoadGameContext( ctx )
    if err != nil {
      return err
    }
  
    roomKey := form["Room"][0]
    user := gameCtx.User(fbid)
    room := gameCtx.Room(roomKey)
    user.Room = room.Key
    gameCtx.EditUser( user )
  
    err = SaveGameContext( ctx, gameCtx )
    return err
  })
  
  tool.Assert( tool.IfError( err ) )
  
  Output( w, nil, nil )
}

func LeaveMessage (w http.ResponseWriter, r *http.Request){
  
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  
  if r.Method == "GET" {
    gameCtx, err := LoadGameContext( ctx )
    tool.Assert( tool.IfError( err ) )
    Output( w, gameCtx.Messages, nil )
    return
  }
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "TargetUser" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "Content" ) ) 
  
  fbid := form["FBID"][0]
  targetUser := form["TargetUser"][0]
  content := form["Content"][0]
  
  err = WithTransaction(ctx, 3, func(ctx appengine.Context) error {
    gameCtx, err := LoadGameContext( ctx )
    if err != nil {
      return err
    }
    user := gameCtx.FindUser( targetUser )
    if user == EmptyUser {
      return errors.New( fmt.Sprintf("user not found:%v", targetUser) )
    }
    msg := Message{FromUser: fbid, ToUser: targetUser, Content: content }
    gameCtx.LeaveMessage( msg )
    err = SaveGameContext( ctx, gameCtx )
    return err
  })
  
  tool.Assert( tool.IfError( err ) )
  
  Output( w, nil, nil )
}

func Clear (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  err := datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
    gameCtx, err := LoadGameContext( ctx )
    if err != nil {
      return err
    }
    gameCtx = Context{}
    err = SaveGameContext( ctx, gameCtx )
    return err
  }, nil)
  
  tool.Assert( tool.IfError( err ) )
  
  Output( w, nil, nil )
}

func State (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  gameCtx, err := LoadGameContext( ctx )
  tool.Assert( tool.IfError( err ) )
  Output( w, gameCtx, nil )
}

func LongPollingTargetMessage (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  var _ = ctx
  
  r.ParseForm()
  tool.Assert( tool.ParameterIsNotExist( r.Form, "FBID" ) ) 
  
  fbid := r.Form["FBID"][0]
  
  retCh, errCh := make(chan []Message), make(chan error)
  
  go func (){
    defer close( retCh )
    defer close( errCh )
    maxtime := 1  // use long polling tech if maxtime > 1
    var times int
    var ok bool
    
    for times < maxtime {
      // 忽略回傳的任何錯誤，直到timeout或取得資料
      datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
        gameCtx, err := LoadGameContext( ctx )
        if err != nil {
          return err
        }
        user := gameCtx.FindUser(fbid)
        if user == EmptyUser {
          // user not found, ignore this case
          ok = true
          
        } else {
          msgs := gameCtx.MessagesToUser( user )
      
          if len( msgs ) > 0 {
            gameCtx.DeleteMessage( msgs )
            err = SaveGameContext( ctx, gameCtx )
            retCh <- msgs
            ok = true
          }
          
        }
        
        return err
      }, nil)
      
      if ok == true {
        break
        
      } else {
        if ( maxtime > 1 ) {
          time.Sleep( 2 * time.Second )
        }

        times += 1
      }
    }
    
    if times == maxtime {
      errCh <- errors.New("times out")
    }
    
  } ()
  
  select {
  case err := <- errCh:
    tool.Assert( tool.IfError( err ) )
  case ret := <- retCh:
    Output( w, ret, nil )
  }
}