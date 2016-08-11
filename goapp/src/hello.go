package hello

import (
	"app"
	"app/duelsys"
	"fmt"
	appauth "lib/auth"
	"lib/db2"
	"lib/tool"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, world!")
}

func init() {
	//// 基本設施 ////
	// 歡迎頁面
	http.HandleFunc("/", handler)
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
	http.HandleFunc("/dbfile2/", appauth.WrapFBAuth(db2.Handler))
	// 以下不必登fb，已登入自定user(deckWiki, particle)
	// 檔案資料庫有基本的保護機制，無法覆寫別的user的檔案，也無法看到別的user建立的檔案內容。
	// 秀牌風雲用
	http.HandleFunc("/deckwikidbfile2/", db2.Handler(appauth.User{Key: "deckWiki"}))
	// 幽夢仙境用
	http.HandleFunc("/particledbfile2/", db2.Handler(appauth.User{Key: "particle"}))

	//// 資料庫檢視、備份與轉移 ////
	// 下載備份加清除。若有Clear參數，才會執行清除
	http.HandleFunc("/admindbfile2/__archiveAndClear__", db2.HandleClearDataAndDownloadArchive)
	// 觀看現在資料庫的備份狀態（資料列表）
	http.HandleFunc("/admindbfile2/__memento__", db2.HandleMemento)
	// 資料庫viewer
	http.HandleFunc("/admindbfile2/", db2.Handler(appauth.User{Key: "admin"}))
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

	// 比賽風雲
	http.HandleFunc("/fn/duelsys/talk", duelsys.Server_Talk)

	// 幽夢仙境[池]
	// no function

	// 余氏K線圖
	// no function
}

func init_xxx() {
	// 歡迎頁面
	http.HandleFunc("/", handler)
	// 代理伺服器
	http.HandleFunc("/proxy", tool.Proxy)
	// 卡牌風雲
	http.HandleFunc("/fn/createChannel", app.CreateChannel)
	http.HandleFunc("/fn/sendChannelMessage", app.SendChannelMessage)
	// 傾聽事件，沒有實作內容
	http.HandleFunc("/_ah/channel/connected/", app.OnChannelConnected)
	http.HandleFunc("/_ah/channel/disconnected/", app.OnChannelDisconnected)
	// 給前台的訊息
	http.HandleFunc("/fn/message", app.MessageConfig)
	// 取得公開的牌組(秀牌風雲用)
	http.HandleFunc("/fn/publicdeck", app.ReadPublicCardSuit)
	// 使用者用，這個會先經過FB認證
	http.HandleFunc("/dbfile2/", appauth.WrapFBAuth(db2.Handler))
	// 秀牌風雲用
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
	http.HandleFunc("/fn/duelsys/talk", duelsys.Server_Talk)
}
