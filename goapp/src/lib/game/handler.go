package game

import (
  "fmt"
  "net/http"
  "lib/tool"
  "appengine"
  "encoding/json"
)

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

var gameCtx = Context{Users: []User{{"test","han",""}}, Rooms: []Room{{"test", "hanroom"}}}

func CreateUser(w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  if r.Method == "GET" {
    Output( w, gameCtx.Users, nil )
    return
  }
  
  ctx := appengine.NewContext( r )
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "AccessToken" ) )
  
  fbid := form["FBID"][0]
  accessToken := form["AccessToken"][0]
  
  tool.Assert( tool.AssertFBIDIsInvalid( ctx, fbid, accessToken ))
  tool.Assert( tool.ParameterIsNotExist( form, "Name" ) )
  
  name := form["Name"][0]
  user := gameCtx.User(fbid)
  user.Name = name
  gameCtx.EditUser( user )
  
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
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "AccessToken" ) )
  
  fbid := form["FBID"][0]
  accessToken := form["AccessToken"][0]
  
  tool.Assert( tool.AssertFBIDIsInvalid( ctx, fbid, accessToken ))
  tool.Assert( tool.ParameterIsNotExist( form, "Name" ) )
  
  name := form["Name"][0]
  room := gameCtx.Room(fbid)
  room.Name = name
  gameCtx.EditRoom( room )
  
  Output( w, room, nil )
}

func EnterRoom (w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json; charset=utf8")
  
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) )
  
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "AccessToken" ) )
  
  fbid := form["FBID"][0]
  accessToken := form["AccessToken"][0]
  
  tool.Assert( tool.AssertFBIDIsInvalid( ctx, fbid, accessToken ))
  tool.Assert( tool.ParameterIsNotExist( form, "Room" ) )
  
  roomKey := form["Room"][0]
  user := gameCtx.User(fbid)
  room := gameCtx.Room(roomKey)
  user.Room = room.Key
  gameCtx.EditUser( user )
  
  Output( w, user, nil )
}

func LeaveMessage (w http.ResponseWriter, r *http.Request){
  
}