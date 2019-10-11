// 定義各個app的開頭訊息
package app

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// 吐出訊息
// 由path:"/fn/message"處理
func MessageConfig(w http.ResponseWriter, r *http.Request) {
	config := []map[string]interface{}{
		//map[string]interface{}{
		//	"app":     "card_admin",
		//	"level":   3,
		//	"Message": "<h1>遊戲暫時停止維護，不便之處請見諒!</h1>",
		//},
		//map[string]interface{}{
		//	"app":     "deckWiki_admin",
		//	"level":   3,
		//	"Message": "<h1>遊戲暫時停止維護，不便之處請見諒!</h1>",
		//},
		//map[string]interface{}{
		//	"app":     "stock",
		//	"level":   3,
		//	"Message": "<h1>程式維護中</h1>",
		//},
	}
	jsonstr, _ := json.Marshal(config)
	fmt.Fprintf(w, string(jsonstr))
}
