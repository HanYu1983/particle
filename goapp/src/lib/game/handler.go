package game

import (
  "fmt"
  "net/http"
  "lib/tool"
  "appengine"
  "encoding/json"
  "time"
  "sync"
)

var _ = time.Millisecond

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


var gameCtx Context
var mutex sync.Mutex
var _ = mutex

func CreateUser(w http.ResponseWriter, r *http.Request){
  mutex.Lock()
  defer mutex.Unlock()
  
  ctx := appengine.NewContext( r )
  var _ = ctx
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  if r.Method == "GET" {
    Output( w, gameCtx.Users, nil )
    return
  }
  
  ctx.Infof("before")
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  
  fbid := form["FBID"][0]
  tool.Assert( tool.ParameterIsNotExist( form, "Name" ) )
  
  name := form["Name"][0]
  user := gameCtx.User(fbid)
  user.Name = name
  gameCtx.EditUser( user )
  
  ctx.Infof("after")
  
  Output( w, user, nil )
}

func CreateRoom (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  if r.Method == "GET" {
    Output( w, gameCtx.Rooms, nil )
    return
  }
  
  ctx := appengine.NewContext( r )
  var _ = ctx
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "ID" ) ) 
  
  id := form["ID"][0]
  
  tool.Assert( tool.ParameterIsNotExist( form, "Name" ) )
  
  name := form["Name"][0]
  room := gameCtx.Room(id)
  room.Name = name
  gameCtx.EditRoom( room )
  
  Output( w, room, nil )
}

func EnterRoom (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  if r.Method == "GET" {
    Output( w, gameCtx.Rooms, nil )
    return
  }
  
  ctx := appengine.NewContext( r )
  var _ = ctx
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  
  fbid := form["FBID"][0]
  
  tool.Assert( tool.ParameterIsNotExist( form, "Room" ) )
  
  roomKey := form["Room"][0]
  user := gameCtx.User(fbid)
  room := gameCtx.Room(roomKey)
  user.Room = room.Key
  gameCtx.EditUser( user )
  
  Output( w, user, nil )
}

func LeaveMessage (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  if r.Method == "GET" {
    Output( w, gameCtx.Messages, nil )
    return
  }
  
  ctx := appengine.NewContext( r )
  var _ = ctx
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "TargetUser" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "Content" ) ) 
  
  fbid := form["FBID"][0]
  targetUser := form["TargetUser"][0]
  content := form["Content"][0]
  
  msg := Message{FromUser: fbid, ToUser: targetUser, Content: content }
  gameCtx.LeaveMessage( msg )
  
  Output( w, msg, nil )
}

func Clear (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  gameCtx = Context{}
  Output( w, nil, nil )
}

func State (w http.ResponseWriter, r *http.Request){
  ctx := appengine.NewContext( r )
  var _ = ctx
  w.Header().Set("Content-Type", "application/json; charset=utf8")
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
  user := gameCtx.User(fbid)
  
  msgChan := make(chan interface{}, 1)
  errChan := make(chan bool)
  
  go func ( ch chan interface{} ){
    maxtime := 1
    var times int
    for times < maxtime {
      msgs := gameCtx.MessagesToUser( user )
      if len( msgs ) > 0 {
        ch <- msgs
        gameCtx.DeleteMessage( msgs )
        break
      }
      //time.Sleep(500 * time.Millisecond)
      times += 1
    }
    if times == maxtime {
      errChan <- true
    }
  } ( msgChan )
  
  select {
  case <-errChan:
    Output( w, nil, "times out")
  case ret := <-msgChan:
    Output( w, ret, nil )
  }
}