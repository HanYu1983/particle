package hello

import (
	"app"
	"fmt"
	appauth "lib/auth"
	"lib/db2"
	"lib/tool"
	"net/http"
	"appengine"
    "appengine/user"
)




func init() {
	//// 基本設施 ////
	// 歡迎頁面
	http.HandleFunc("/", handler2)
	// 代理伺服器
	http.HandleFunc("/proxy", tool.Proxy)
	// 即時訊息
	http.HandleFunc("/fn/createChannel", app.CreateChannel)
	http.HandleFunc("/fn/sendChannelMessage", app.SendChannelMessage)
	// 即時訊息傾聽事件
	http.HandleFunc("/_ah/channel/connected/", app.OnChannelConnected)
	http.HandleFunc("/_ah/channel/disconnected/", app.OnChannelDisconnected)
	// 給前台的訊息
	http.HandleFunc("/fn/message", app.MessageConfig)

	//// 檔案資料庫 ////
	// 使用者用，這個會先經過FB認證
	// 直接呼叫dbfile2的，就會先要求登入使用者fb，用來保護使用者資料
	// 檔案資料庫有基本的保護機制，無法覆寫別的user的檔案，也無法看到別的user建立的檔案內容。
	http.HandleFunc("/dbfile2/", appauth.WrapFBAuth(db2.Handler))
	// 以下不必登fb，已登入自定user(deckWiki, particle)
	// 秀牌風雲用
	http.HandleFunc("/deckwikidbfile2/", db2.Handler(appauth.User{Key: "deckWiki"}))
	// 幽夢仙境用
	http.HandleFunc("/particledbfile2/", db2.Handler(appauth.User{Key: "particle"}))
	// 管理者
	// 權限最大，可以看到所有user建立的檔案內容
	http.HandleFunc("/admindbfile2/", db2.Handler(appauth.User{Key: "admin"}))
	//// 資料庫檢視、備份與轉移 ////
	// 下載備份加清除。若有Clear參數，才會執行清除
	http.HandleFunc("/admindbfile2/__archiveAndClear__", db2.HandleClearDataAndDownloadArchive)
	// 觀看現在資料庫的備份狀態（資料列表）
	http.HandleFunc("/admindbfile2/__memento__", db2.HandleMemento)
	// 新舊資料庫整合（舊方法移除後移除）
	http.HandleFunc("/temp/dbtodb2", app.Dbtodb2)

	//// 產品 ////
	// 卡牌風雲
	// no function

	// 組牌風雲
	// no function

	// 秀牌風雲
	// 取得公開的牌組
	http.HandleFunc("/fn/publicdeck", app.ReadPublicCardSuit)

	// 幽夢仙境[池]
	// no function

	// 余氏K線圖
	// no function
	
	// Test
	http.HandleFunc("/fn/auth", welcome)
}

func handler2(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, world3!")
}


func welcome(w http.ResponseWriter, r *http.Request) {
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

func welcomeOAuth(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	u, err := user.CurrentOAuth(ctx, "")
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