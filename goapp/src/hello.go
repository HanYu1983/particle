package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
  "lib/db/file"
  "appengine"
  "appengine/user"
  auth "lib/hack/go-http-auth"
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
  
  http.HandleFunc("/welcome/", welcome)
  http.HandleFunc("/", handler)
  http.HandleFunc("/proxy", tool.Proxy)
  http.HandleFunc("/dbfile/", dbfileHandler)
  http.HandleFunc("/write", dbfile.WriteFile)
  http.HandleFunc("/simple/save", Save)
  http.HandleFunc("/simple/load", Load)
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


