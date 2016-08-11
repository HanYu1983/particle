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

func init() {
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

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, world!")
}
