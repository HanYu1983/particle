package hello

// C:\Users\johny\AppData\Local\Google\CloudSDK\google-cloud-sdk
import (
	"app"
	"fmt"
	appauth "lib/auth"
	"lib/db2"
	"lib/tool"
	"net/http"

	"github.com/gorilla/mux"

	"appengine"
	"appengine/user"

	"app/contestsys"
	"app/uploadcard"
	"strconv"
)

func init() {
	//// 基本設施 ////
	// 歡迎頁面
	http.HandleFunc("/", handler2)
	// 代理伺服器
	http.HandleFunc("/proxy", tool.Proxy)
	// 即時訊息(方法已淘汰)
	//http.HandleFunc("/fn/createChannel", app.CreateChannel)
	//http.HandleFunc("/fn/sendChannelMessage", app.SendChannelMessage)
	// 即時訊息傾聽事件(方法已淘汰)
	//http.HandleFunc("/_ah/channel/connected/", app.OnChannelConnected)
	//http.HandleFunc("/_ah/channel/disconnected/", app.OnChannelDisconnected)
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
	// 小跟班用
	http.HandleFunc("/nightmarketssistentdbfile2/", db2.Handler(appauth.User{Key: "nightmarketassistent"}))
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

	// 比賽風雲
	router := mux.NewRouter()
	router.HandleFunc("/fn/contestsys/", contestsys.Serve_Context).Methods("GET")
	router.HandleFunc("/fn/contestsys/CreateContest/{owner}", contestsys.Serve_CreateContest).Methods("GET")
	router.HandleFunc("/fn/contestsys/DeleteContest/{contestId}/{owner}", contestsys.Serve_DeleteContest).Methods("GET")
	router.HandleFunc("/fn/contestsys/UpdateContest/{contestId}/{owner}", contestsys.Serve_UpdateContest).Methods("GET")
	router.HandleFunc("/fn/contestsys/UpgradeContest/{contestId}/{owner}", contestsys.Serve_UpgradeContestState).Methods("GET")
	router.HandleFunc("/fn/contestsys/FailEndContest/{contestId}/{owner}", contestsys.Serve_FailEndContest).Methods("GET")
	router.HandleFunc("/fn/contestsys/JoinContest/{contestId}/{peopleId}", contestsys.Serve_JoinContest).Methods("GET")
	router.HandleFunc("/fn/contestsys/LeaveContest/{contestId}/{peopleId}", contestsys.Serve_LeaveContest).Methods("GET")
	router.HandleFunc("/fn/contestsys/PrepareDual/{contestId}/{peopleId}", contestsys.Serve_PrepareDual).Methods("GET")
	router.HandleFunc("/fn/contestsys/GetDuals/{peopleId}", contestsys.Serve_GetDuals).Methods("GET")
	router.HandleFunc("/fn/contestsys/ConfirmWinner/{contestId}/{peopleId}/{winner}", contestsys.Serve_ConfirmWinner).Methods("GET")
	router.HandleFunc("/fn/contestsys/CancelWinner/{contestId}/{peopleId}", contestsys.Serve_CancelWinner).Methods("GET")
	router.HandleFunc("/fn/contestsys/Upgrade/{contestId}/{owner}/{peopleId}", contestsys.Serve_Upgrade).Methods("GET")
	router.HandleFunc("/fn/contestsys/UpdatePower/{contestId}/{owner}/{peopleId}/{power}", contestsys.Serve_UpdatePower).Methods("GET")
	router.HandleFunc("/fn/contestsys/GetDualInfoWithContestOwner/{owner}", contestsys.Serve_GetDualInfoWithContestOwner).Methods("GET")
	router.HandleFunc("/fn/contestsys/LeaveMessage/{contestId}/{peopleId}", contestsys.Serve_LeaveMessage).Methods("GET")
	router.HandleFunc("/fn/contestsys/DeleteMessage/{peopleId}/{msgId}", contestsys.Serve_DeleteMessage).Methods("GET")
	router.HandleFunc("/fn/contestsys/MakeDualTime/{contestId}/{peopleId}", contestsys.Serve_MakeDualTime).Methods("GET")

	http.Handle("/fn/contestsys/", router)

	// 上傳自製卡
	http.HandleFunc("/fn/tcg/", uploadcard.Serve_ExtensionZipList)
	http.HandleFunc("/fn/tcg/parseResult", uploadcard.Serve_ParseResult)
	http.HandleFunc("/fn/tcg/extensionZipList", uploadcard.Serve_ExtensionZipList)
	http.HandleFunc("/fn/tcg/deleteExtensionZip", uploadcard.Serve_DeleteExtensionZip)
	http.HandleFunc("/fn/tcg/extractExtensionZip", uploadcard.Serve_ExtractExtensionZip)
	http.HandleFunc("/fn/tcg/getExtension", uploadcard.Serve_GetExtension)
	http.HandleFunc("/fn/tcg/addExtensionZip", uploadcard.Serve_AddExtensionZip)
	http.HandleFunc("/tcgdbfile2/", db2.Handler(appauth.User{Key: "tcg"}))
	// Test
	http.HandleFunc("/fn/auth", welcome)

	http.HandleFunc("/fn/stockInfo", stock)
}

func stock(w http.ResponseWriter, r *http.Request) {

	defer tool.Recover(func(err error) {
		fmt.Fprintf(w, "[\"%s\", null]", err.Error())
	})
	w.Header().Set("Content-Type", "application/json")

	ctx := appengine.NewContext(r)

	r.ParseForm()
	tool.Assert(tool.ParameterIsNotExist(r.Form, "symbol"))

	symbol := r.Form["symbol"][0]
	chartLast := int64(200)
	var err error
	if len(r.Form["chartLast"]) > 0 {
		chartLast, err = strconv.ParseInt(r.Form["chartLast"][0], 10, 32)
	}

	url := fmt.Sprintf("https://api.iextrading.com/1.0/stock/%s/chart/ytd?chartLast=%d", symbol, chartLast)

	req, err := tool.GetRequest(url, nil)
	tool.Assert(tool.IfError(err))

	res, err := tool.DoRequest(req, ctx)
	tool.Assert(tool.IfError(err))

	body, err := tool.ReadAll(res)
	tool.Assert(tool.IfError(err))

	bodyStr := string(body[:])
	if bodyStr == "Unknown symbol" {
		panic("Unknown symbol")
		return
	}
	// w.Header().Set("Cache-Control", fmt.Sprintf("max-age=%d, public", 60* 60* 6))
	fmt.Fprintf(w, "[null, %s]", bodyStr)
}

func handler2(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	ctx.Infof("Hello, %v", "Han")
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
