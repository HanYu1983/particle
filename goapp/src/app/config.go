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
