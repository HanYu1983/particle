package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
  "lib/db/file"
  auth "lib/hack/go-http-auth"
  "lib/game"
  "appengine"
  "appengine/user"
  "appengine/channel"
)

func Secret(user, realm string) string {
  if user == "hanvicadmin" {
    // password is "91281121"
    return "afd9c0fa03da5ef7f24a4833e0fff439"
  }
  return ""
}

func init(){
  authenticator := auth.NewDigestAuthenticator("dbpublic", Secret)
  dbfileHandler := authenticator.JustCheck(dbfile.DBFileSystem)
  
  game.InitContext( GameContextPosition )
  http.HandleFunc("/welcome/", welcome)
  http.HandleFunc("/", handler)
  http.HandleFunc("/proxy", tool.Proxy)
  http.HandleFunc("/dbfile/", dbfileHandler)
  http.HandleFunc("/write", dbfile.WriteFile)
  http.HandleFunc("/simple/save", Save)
  http.HandleFunc("/simple/load", Load)
  http.HandleFunc("/fn/card/user/", game.CreateUser)
  http.HandleFunc("/fn/card/room/", game.CreateRoom)
  http.HandleFunc("/fn/card/enterRoom/", game.EnterRoom)
  http.HandleFunc("/fn/card/message/", game.LeaveMessage)
  http.HandleFunc("/fn/card/clear", game.Clear)
  http.HandleFunc("/fn/card/longPollingTargetMessage", game.LongPollingTargetMessage)
  http.HandleFunc("/fn/card/state", game.State)
  http.HandleFunc("/fn/cardInfo/addCard", AddCard)
  http.HandleFunc("/fn/cardInfo/deleteCard", DeleteCard)
  http.HandleFunc("/fn/cardInfo/cardList", CardList)
  http.HandleFunc("/fn/createChannel", CreateChannel)
  http.HandleFunc("/fn/sendChannelMessage", SendChannelMessage)
  http.HandleFunc("/_ah/channel/connected/", onChannelConnected)
  http.HandleFunc("/_ah/channel/disconnected/", onChannelDisconnected)
  
}

func handler(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello, world!")
}

func welcome(w http.ResponseWriter, r *http.Request) {
  c := appengine.NewContext(r)
      u, err := user.CurrentOAuth(c, "")
      if err != nil {
          http.Error(w, "OAuth Authorization header required", http.StatusUnauthorized)
          return
      }
      if !u.Admin {
          http.Error(w, "Admin login only", http.StatusUnauthorized)
          return
      }
      fmt.Fprintf(w, `Welcome, admin user %s!`, u)
}

func CreateChannel(w http.ResponseWriter, r *http.Request) {
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  ctx := appengine.NewContext( r )
  
  r.ParseForm()
  tool.Assert( tool.ParameterIsNotExist( r.Form, "Name" ) ) 
  
  name := r.Form["Name"][0]
  tok, err := channel.Create(ctx, name)
  tool.Assert( tool.IfError( err ) ) 
  
  Output( w, tok, nil )
}

func SendChannelMessage(w http.ResponseWriter, r *http.Request) {
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  ctx := appengine.NewContext( r )
  
  r.ParseForm()
  tool.Assert( tool.ParameterIsNotExist( r.Form, "Name" ) ) 
  tool.Assert( tool.ParameterIsNotExist( r.Form, "Message" ) ) 
  
  name := r.Form["Name"][0]
  msg := r.Form["Message"][0]
  
  err := channel.SendJSON(ctx, name, msg)
  tool.Assert( tool.IfError( err ) ) 
  
  Output( w, nil, nil )
}

func onChannelConnected(w http.ResponseWriter, r *http.Request) {
  /*
  r.ParseForm()
  from := r.FormValue("from")
  ctx := appengine.NewContext( r )
  
  err := channel.SendJSON(ctx, from, 0)
  if err != nil {
    ctx.Infof("sending error: %v", err)
  }
  */
}

func onChannelDisconnected(w http.ResponseWriter, r *http.Request) {
  /*
  r.ParseForm()
  from := r.FormValue("from")
  ctx := appengine.NewContext( r )
  ctx.Infof("onChannelDisconnected %v", from)
  */
}