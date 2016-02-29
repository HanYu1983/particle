package hello

import (
	"app"
	"app/cardInfo"
	"app/duelsys"
	"appengine"
	"appengine/user"
	"fmt"
	appauth "lib/auth"
	"lib/db/file"
	"lib/db2"
	auth "lib/hack/go-http-auth"
	"lib/tool"
	"net/http"
)

func Secret(user, realm string) string {
	if user == "hanvicadmin" {
		// password is "91281121"
		return "afd9c0fa03da5ef7f24a4833e0fff439"
	}
	return ""
}

/*
func (u auth.User) HasPermission(file interface{}) bool {
	if u.Key == "admin" {
		return true
	}
	if file.Owner == "" {
		return true
	}
	return u.Key == file.Owner
}
*/
func init() {
	authenticator := auth.NewDigestAuthenticator("dbpublic", Secret)
	// 歡迎頁面
	http.HandleFunc("/", handler)
	// 代理伺服器
	http.HandleFunc("/proxy", tool.Proxy)
	// 管理者用。需要認證，保護使用者資料
	dbfileHandler := authenticator.JustCheck(dbfile.DBFileSystem2(appauth.User{Key: "admin"}))
	http.HandleFunc("/admindbfile/", dbfileHandler)
	// 使用者用
	http.HandleFunc("/dbfile/", appauth.WrapFBAuth(dbfile.DBFileSystem2))
	// 各別app用
	http.HandleFunc("/dbfile/particle/", dbfile.DBFileSystem2(appauth.User{Key: "particle"}))
	// 檔案的操做管理
	http.HandleFunc("/write", dbfile.WriteFile)
	// 簡易將app的存檔記到個人資料夾
	app.SetUserPosition(app.UserPosition)
	http.HandleFunc("/fn/saveUser", appauth.WrapFBAuth(app.SaveToUser))
	http.HandleFunc("/fn/loadUser", appauth.WrapFBAuth(app.LoadFormUser))
	//http.HandleFunc("/fn/saveUser", SaveToUser(appauth.User{ Key: "admin" }))
	//http.HandleFunc("/fn/loadUser", LoadFormUser(appauth.User{ Key: "admin" }))
	// 格鬥風雲錄卡表
	/*
	  http.HandleFunc("/fn/cardInfo/addCard", AddCard)
	  http.HandleFunc("/fn/cardInfo/deleteCard", DeleteCard)
	  http.HandleFunc("/fn/cardInfo/cardList", CardList)
	*/
	cardInfo.SetCardInfoPosition(app.CardInfoPosition2)
	http.HandleFunc("/fn/cardInfo/addCard", cardInfo.AddCard)
	http.HandleFunc("/fn/cardInfo/deleteCard", cardInfo.DeleteCard)
	http.HandleFunc("/fn/cardInfo/cardList", cardInfo.CardList)
	// 卡牌風雲
	http.HandleFunc("/fn/createChannel", app.CreateChannel)
	http.HandleFunc("/fn/sendChannelMessage", app.SendChannelMessage)
	// 傾聽事件，沒有實作內容
	http.HandleFunc("/_ah/channel/connected/", app.OnChannelConnected)
	http.HandleFunc("/_ah/channel/disconnected/", app.OnChannelDisconnected)
	// 余氏K線圖用的記錄功能。已修改為SaveToUser
	//http.HandleFunc("/simple/save", Save)
	//http.HandleFunc("/simple/load", Load)

	// 測試用
	http.HandleFunc("/welcome/", welcome)
	http.HandleFunc("/welcome2/", welcome2)
	//http.HandleFunc("/testfn/zip", TestZip)
	//http.HandleFunc("/testfn/memento", Memento)
	//http.HandleFunc("/testfn/readfile", TestReadFile)
	//http.HandleFunc("/testfn/TestWriteSnaphot", TestWriteSnaphot2)

	// 給前台的訊息
	http.HandleFunc("/fn/message", app.MessageConfig)

	http.HandleFunc("/fn/publicdeck", app.ReadPublicCardSuit)
	// 使用者用，這個會先經過FB認證
	http.HandleFunc("/dbfile2/", appauth.WrapFBAuth(db2.Handler))
	// 組牌危機用
	http.HandleFunc("/deckwikidbfile2/", db2.Handler(appauth.User{Key: "deckWiki"}))
	// 幽夢仙境用
	http.HandleFunc("/particledbfile2/", db2.Handler(appauth.User{Key: "particle"}))
	// 下載備份加清除。若有Clear參數，才會執行清除
	http.HandleFunc("/admindbfile2/__archiveAndClear__", db2.HandleClearDataAndDownloadArchive)
	// 觀看現在資料庫的備份狀態（資料列表）
	http.HandleFunc("/admindbfile2/__memento__", db2.HandleMemento)
	// 資料庫viewer
	http.HandleFunc("/admindbfile2/", db2.Handler(appauth.User{Key: "admin"}))
	// 新舊資料庫整合（舊方法移除後移除）
	http.HandleFunc("/temp/dbtodb2", app.Dbtodb2)
	// 比賽風雲
	http.HandleFunc("/fn/duelsys/duelcontext", duelsys.Serve_GetDuelContext)
	http.HandleFunc("/fn/duelsys/createduel", duelsys.Serve_CreateDuel)
	http.HandleFunc("/fn/duelsys/deleteduel", duelsys.Serve_DeleteDuel)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, world!")
}

func welcome(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)
	u, err := user.CurrentOAuth(c, "")
	if err != nil {
		http.Error(w, "OAuth Authorization header required", http.StatusUnauthorized)
		return
	}
	/*
		if !u.Admin {
			http.Error(w, "Admin login only", http.StatusUnauthorized)
			return
		}*/
	fmt.Fprintf(w, `Welcome, admin user %#v!`, u)
}

func welcome2(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	ctx := appengine.NewContext(r)
	u := user.Current(ctx)
	if u == nil {
		url, _ := user.LoginURL(ctx, "/")
		fmt.Fprintf(w, `<a href="%s">Sign in or register</a>`, url)
		return
	}
	url, _ := user.LogoutURL(ctx, "/")
	fmt.Fprintf(w, `Welcome, %s! (<a href="%s">sign out</a>)`, u, url)
}
