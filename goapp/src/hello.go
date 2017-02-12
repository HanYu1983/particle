package hello

import (
	"app"
	"app/collectmmo"
	"app/duelsys"
	"fmt"
	appauth "lib/auth"
	"lib/db2"
	"lib/tool"
	"net/http"
	"github.com/gorilla/mux"
	sgs "app/cardgame/http"
)

func handler2(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, world3!")
}

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

	// 比賽風雲
	http.HandleFunc("/fn/duelsys/talk", duelsys.Server_Talk)

	// 幽夢仙境[池]
	// no function

	// 余氏K線圖
	// no function

	// collect mmo
	http.HandleFunc("/fn/collectmmo/talk", collectmmo.Talk)
	http.HandleFunc("/fn/collectmmo/resetdb", collectmmo.Server_ResetDB)

	// 陣面對決
	r := mux.NewRouter()
	r.HandleFunc("/fn/sgs/admin/room/newLobby", sgs.NewLobby).Methods("GET")
	r.HandleFunc("/fn/sgs/room", sgs.AppengineContext(sgs.RoomList)).Methods("GET")
	r.HandleFunc("/fn/sgs/room", sgs.AppengineContext(sgs.NewRoom)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}", sgs.AppengineContext(sgs.GetRoom)).Methods("GET")
	r.HandleFunc("/fn/sgs/room/{roomId}", sgs.AppengineContext(sgs.UpdateRoom)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}/join", sgs.AppengineContext(sgs.JoinRoom)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}/validate", sgs.AppengineContext(sgs.ValidateRoom)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}/message", sgs.AppengineContext(sgs.SendRoomMessage)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}/start", sgs.AppengineContext(sgs.StartGame)).Methods("POST")
	// 取得遊戲狀態
	r.HandleFunc("/fn/sgs/room/{roomId}/game", sgs.AppengineContext(sgs.GetGame)).Methods("GET")
	// 1. 先呼叫topCommand察看堆疊中還沒結束的指令
	r.HandleFunc("/fn/sgs/room/{roomId}/game/topCommand", sgs.AppengineContext(sgs.GetTopCommand)).Methods("GET")
	// 1-1. 上傳並修改那個指令
	r.HandleFunc("/fn/sgs/room/{roomId}/game/command/{commandId}", sgs.AppengineContext(sgs.UpdateCommand)).Methods("POST")
	// 2. 或是呼叫collectCommand取得目前可以用的指令
	r.HandleFunc("/fn/sgs/room/{roomId}/game/collectCommand", sgs.AppengineContext(sgs.CollectCommand)).Methods("POST")
	// 2-1. 選一個指令上傳並加入
	r.HandleFunc("/fn/sgs/room/{roomId}/game/command/", sgs.AppengineContext(sgs.PushCommand)).Methods("POST")

	http.Handle("/fn/sgs/", r)
	// 測試
	http.HandleFunc("/fn/testmysql", app.Testmysql)
}

func init_xxx() {
	// 歡迎頁面
	http.HandleFunc("/", handler2)
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
