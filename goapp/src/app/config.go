package app

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func MessageConfig(w http.ResponseWriter, r *http.Request) {
	config := []map[string]interface{}{
		map[string]interface{}{
			"app":     "card_admin",
			"level":   3,
			"Message": "<h1>此網址僅供私下交流用，請勿公開分享!</h1>",
		},
		map[string]interface{}{
			"app":     "deckWiki_admin",
			"level":   3,
			"Message": "<h1>此網址僅供私下交流用，請勿公開分享!</h1>",
		},
		//map[string]interface{}{
		//	"app":     "stock",
		//	"level":   3,
		//	"Message": "<h1>程式維護中</h1>",
		//},
	}
	jsonstr, _ := json.Marshal(config)
	fmt.Fprintf(w, string(jsonstr))
}

// 以下資料將不在維護
const (
	// ========= 使用者資料夾 ========= //
	// han local
	//UserPosition = 5066549580791808
	// remote
	UserPosition = 5757334940811264

	// ==========舊的用來存格鬥風雲的卡表，之後要改成新版========== //
	// han local
	//CardInfoPosition = 5733953138851840
	// remote
	CardInfoPosition = 5178081291534336

	// ==========用來存軍武gogogo的卡表========== //
	// vic local
	//CardInfoPosition2 = 5171003185430528
	// han local
	//CardInfoPosition2 = 5629499534213120
	// remote
	CardInfoPosition2 = 4839624983707648
)
