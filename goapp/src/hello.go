package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
  "lib/db/file"
  "appengine"
  "appengine/user"
  "app/cardInfo"
  auth "lib/hack/go-http-auth"
  appauth "lib/auth"
)

var Output = tool.Output

func Secret(user, realm string) string {
  if user == "hanvicadmin" {
    // password is "91281121"
    return "afd9c0fa03da5ef7f24a4833e0fff439"
  }
  return ""
}

func init(){
  authenticator := auth.NewDigestAuthenticator("dbpublic", Secret)
  // 歡迎頁面
  http.HandleFunc("/", handler)
  // 代理伺服器
  http.HandleFunc("/proxy", tool.Proxy)
  // 管理者用。需要認證，保護使用者資料
  dbfileHandler := authenticator.JustCheck(dbfile.DBFileSystem2(appauth.User{ Key: "admin" }))
  http.HandleFunc("/admindbfile/", dbfileHandler)
  // 使用者用
  http.HandleFunc("/dbfile/", appauth.WrapFBAuth(dbfile.DBFileSystem2))
  // 各別app用
  http.HandleFunc("/dbfile/particle/", dbfile.DBFileSystem2(appauth.User{ Key: "particle" }))
  // 檔案的操做管理
  http.HandleFunc("/write", dbfile.WriteFile)
  // 簡易將app的存檔記到個人資料夾
  SetUserPosition( UserPosition )
  http.HandleFunc("/fn/saveUser", appauth.WrapFBAuth( SaveToUser ))
  http.HandleFunc("/fn/loadUser", appauth.WrapFBAuth( LoadFormUser ))
  //http.HandleFunc("/fn/saveUser", SaveToUser(appauth.User{ Key: "admin" }))
  //http.HandleFunc("/fn/loadUser", LoadFormUser(appauth.User{ Key: "admin" }))
  // 格鬥風雲錄卡表
  /*
  http.HandleFunc("/fn/cardInfo/addCard", AddCard)
  http.HandleFunc("/fn/cardInfo/deleteCard", DeleteCard)
  http.HandleFunc("/fn/cardInfo/cardList", CardList)
  */
  cardInfo.SetCardInfoPosition( CardInfoPosition2 )
  http.HandleFunc("/fn/cardInfo/addCard", cardInfo.AddCard)
  http.HandleFunc("/fn/cardInfo/deleteCard", cardInfo.DeleteCard)
  http.HandleFunc("/fn/cardInfo/cardList", cardInfo.CardList)
  // 卡牌風雲
  http.HandleFunc("/fn/createChannel", CreateChannel)
  http.HandleFunc("/fn/sendChannelMessage", SendChannelMessage)
  // 傾聽事件，沒有實作內容
  http.HandleFunc("/_ah/channel/connected/", onChannelConnected)
  http.HandleFunc("/_ah/channel/disconnected/", onChannelDisconnected)
  // 余氏K線圖用的記錄功能。已修改為SaveToUser
  //http.HandleFunc("/simple/save", Save)
  //http.HandleFunc("/simple/load", Load)
  // 測試用
  http.HandleFunc("/welcome/", welcome)
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

