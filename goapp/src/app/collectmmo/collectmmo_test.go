package collectmmo

import (
	"appengine/aetest"
	"net/http"
	"net/http/httptest"
	"regexp"
	"testing"
)

func TestBasic(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	w := httptest.NewRecorder()
	r, err := http.NewRequest("get", "/", nil)
	if err != nil {
		t.Fatal(err)
	}

	ctx.Infof("執行沒有配對的指令")
	_, err = ExecuteCommand(ctx, w, r, "xxx")
	if err == nil {
		t.Fatal("沒有配對到指令的場合必須有錯誤")
	}

	ctx.Infof("test玩家登入")
	_, err = ExecuteCommand(ctx, w, r, "test玩家登入")
	if err != nil {
		t.Fatal(err)
	}

	ctx.Infof("取得Cookie")
	// Set-Cookie value
	// body:"user=test; Path=collectmmo/; Expires=Fri, 29 Jan 2016 09:29:56 UTC"
	re := regexp.MustCompile("user=(.+); Path=")
	token := re.FindStringSubmatch(w.Header().Get("Set-Cookie"))
	hasCookie := len(token) > 0
	if hasCookie == false {
		t.Fatal("登入必須有Cookie")
	}
	loginName := token[1]
	isMatchUser := loginName == "test"
	if isMatchUser == false {
		t.Fatal("回傳的Cookie的玩家名稱錯誤")
	}

	// 假前端Cookie
	cookie := http.Cookie{Name: "user", Path: "collectmmo/", Value: loginName}
	r.AddCookie(&cookie)

	ctx.Infof("取得名稱為test的玩家")
	users, err := ExecuteCommand(ctx, w, r, "取得名稱為test的玩家")
	if err != nil {
		t.Fatal(err)
	}

	userList := users.([]User)
	if len(userList) == 0 {
		t.Fatal("必須有名稱為test的玩家")
	}

	ctx.Infof("gan玩家登入")
	_, err = ExecuteCommand(ctx, w, r, "gan玩家登入")
	if err != nil {
		t.Fatal(err)
	}

	ctx.Infof("取得所有玩家")
	users, err = ExecuteCommand(ctx, w, r, "取得所有玩家")
	if err != nil {
		t.Fatal(err)
	}
	userList = users.([]User)
	if len(userList) != 2 {
		t.Fatal("必須有2個玩家")
	}
}
