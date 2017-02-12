package http

import (
	"testing"
	"appengine/aetest"
	"net/http"
	"net/http/httptest"
	"io/ioutil"
	"strings"
	"encoding/json"
	"appengine"
	"errors"
	"fmt"
	"github.com/gorilla/mux"
	"app/cardgame/core"
	"net/url"
	"app/cardgame/sgs"
)

func WithContext(ctx appengine.Context, handler Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		handler(ctx, w, r)
	}
}

func Get(service http.Handler, url string) (interface{}, error) {
	r, _ := http.NewRequest("GET", url, nil)
	r.Header.Set("Content-Type", "application/x-www-form-urlencoded; param=value")
	w := httptest.NewRecorder()

	service.ServeHTTP(w, r)

	if w.Code != http.StatusOK {
		return nil, errors.New("http status error")
	}
	res, err := ioutil.ReadAll(w.Body)
	if err != nil {
		return nil, err
	}
	var result []interface{}
	json.Unmarshal(res, &result)
	if result[0] != nil {
		return nil, errors.New(result[0].(string))
	}
	return result[1], nil
}

func Post(service http.Handler, url string, body string) (interface{}, error) {
	r, _ := http.NewRequest("POST", url, strings.NewReader(body))
	r.Header.Set("Content-Type", "application/x-www-form-urlencoded; param=value")
	w := httptest.NewRecorder()

	service.ServeHTTP(w, r)

	if w.Code != http.StatusOK {
		return nil, errors.New("http status error")
	}
	res, err := ioutil.ReadAll(w.Body)
	if err != nil {
		return nil, err
	}
	var result []interface{}
	json.Unmarshal(res, &result)
	if result[0] != nil {
		return nil, errors.New(result[0].(string))
	}
	return result[1], nil
}

func TestBasicHttp(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	var _= ctx

	// 陣面對決
	r := mux.NewRouter()
	r.HandleFunc("/fn/sgs/room", WithContext(ctx, RoomList)).Methods("GET")
	r.HandleFunc("/fn/sgs/room", WithContext(ctx, NewRoom)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}", WithContext(ctx, GetRoom)).Methods("GET")
	r.HandleFunc("/fn/sgs/room/{roomId}", WithContext(ctx, UpdateRoom)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}/join", WithContext(ctx, JoinRoom)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}/validate", WithContext(ctx, ValidateRoom)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}/message", WithContext(ctx, SendRoomMessage)).Methods("POST")
	r.HandleFunc("/fn/sgs/room/{roomId}/start", WithContext(ctx, StartGame)).Methods("POST")
	// 取得遊戲狀態
	r.HandleFunc("/fn/sgs/room/{roomId}/game", WithContext(ctx, GetGame)).Methods("GET")
	// 1. 先呼叫topCommand察看堆疊中還沒結束的指令
	r.HandleFunc("/fn/sgs/room/{roomId}/game/topCommand", WithContext(ctx, GetTopCommand)).Methods("GET")
	// 1-1. 上傳並修改那個指令
	r.HandleFunc("/fn/sgs/room/{roomId}/game/command/{commandId}", WithContext(ctx, UpdateCommand)).Methods("POST")
	// 2. 或是呼叫collectCommand取得目前可以用的指令
	r.HandleFunc("/fn/sgs/room/{roomId}/game/collectCommand", WithContext(ctx, CollectCommand)).Methods("POST")
	// 2-1. 選一個指令上傳並加入
	r.HandleFunc("/fn/sgs/room/{roomId}/game/command", WithContext(ctx, PushCommand)).Methods("POST")


	var ret interface{}
	ret, err = Post(r, "/fn/sgs/room", "user=test")
	if err != nil {
		t.Fatal(err)
	}

	room := ret.(map[string]interface{})
	roomId := room["ID"].(string)

	ret, err = Post(r, fmt.Sprintf("/fn/sgs/room/%v/join", roomId), "user=test2")
	if err != nil {
		t.Fatal(err)
	}

	ret, err = Post(r, fmt.Sprintf("/fn/sgs/room/%v/join", roomId), "user=test2")
	if err != nil {
		t.Fatal(err)
	}

	ret, err = Post(r, fmt.Sprintf("/fn/sgs/room/%v", roomId), fmt.Sprintf("userA=%v&userB=%v", "test", "test2"))
	if err != nil {
		t.Fatal(err)
	}

	ret, err = Post(r, fmt.Sprintf("/fn/sgs/room/%v/start", roomId), "")
	if err != nil {
		t.Fatal(err)
	}
	room = ret.(map[string]interface{})

	if int(room["State"].(float64)) != core.RoomStatePlaying {
		t.Fatal("必須是Playing狀態")
	}

	ret, err = Get(r, fmt.Sprintf("/fn/sgs/room/%v/game", roomId))
	if err != nil {
		t.Fatal(err)
	}

	ret, err = Post(r, fmt.Sprintf("/fn/sgs/room/%v/game/collectCommand", roomId), "user=test")
	if err != nil {
		t.Fatal(err)
	}
	ctx.Infof("%v", ret)
	if len(ret.([]interface{})) == 0 {
		t.Fatal("test必須至少一個指令(讓過)")
	}
	passCmd := ret.([]interface{})[0].(map[string]interface{})

	ret, err = Post(r, fmt.Sprintf("/fn/sgs/room/%v/game/collectCommand", roomId), "user=test2")
	if err != nil {
		t.Fatal(err)
	}
	if len(ret.([]interface{})) != 0 {
		t.Fatal("test2必須沒有任何指令")
	}

	commandBody, err := json.Marshal(passCmd)

	parameters := url.Values{}
	parameters.Add("commandBody", string(commandBody))
	body := parameters.Encode()

	ret, err = Post(r, fmt.Sprintf("/fn/sgs/room/%v/game/command", roomId), body)
	if err != nil {
		t.Fatal(err)
	}
	ret, err = Get(r, fmt.Sprintf("/fn/sgs/room/%v/game", roomId))
	if err != nil {
		t.Fatal(err)
	}
	// 一開始是重置，所以讓過後會直接跳到準備階段
	game := ret.(map[string]interface{})
	if int(game["CurrentPhase"].(float64)) != sgs.StandbyStep {
		t.Fatal("必須跳到準備階段")
	}
}