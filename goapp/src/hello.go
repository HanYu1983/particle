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
  // 歡迎頁面
  http.HandleFunc("/", handler)
  // 代理伺服器
  http.HandleFunc("/proxy", tool.Proxy)
  // 檔案的viewer
  // 需要認證，保護使用者資料
  dbfileHandler := authenticator.JustCheck(dbfile.DBFileSystem)
  http.HandleFunc("/dbfile/", dbfileHandler)
  // 檔案的操做管理
  http.HandleFunc("/write", dbfile.WriteFile)
  // 余氏K線圖用的記錄功能。將要改成SaveToUser
  http.HandleFunc("/simple/save", Save)
  http.HandleFunc("/simple/load", Load)
  // 簡易將app的存檔記到個人資料夾
  SetUserPosition( UserPosition )
  http.HandleFunc("/fn/saveUser", SaveToUser)
  http.HandleFunc("/fn/loadUser", LoadFormUser)
  // 格鬥風雲錄卡表
  http.HandleFunc("/fn/cardInfo/addCard", AddCard)
  http.HandleFunc("/fn/cardInfo/deleteCard", DeleteCard)
  http.HandleFunc("/fn/cardInfo/cardList", CardList)
  // 卡牌風雲
  http.HandleFunc("/fn/createChannel", CreateChannel)
  http.HandleFunc("/fn/sendChannelMessage", SendChannelMessage)
  // 傾聽事件，沒有實作內容
  http.HandleFunc("/_ah/channel/connected/", onChannelConnected)
  http.HandleFunc("/_ah/channel/disconnected/", onChannelDisconnected)
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


