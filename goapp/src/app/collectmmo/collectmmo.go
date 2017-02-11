package collectmmo

import (
	"app/collectmmo/mysql"
	. "app/collectmmo/tool"
	"appengine"
	"errors"
	"fmt"
	"lib/tool"
	"net/http"
	_ "os"
	"regexp"
	"strconv"
	_ "strings"
	"time"
)

var (
	ErrNotLogin = errors.New("you are not login")
)

var (
	cmds = []Command{
		Command{
			regexp.MustCompile("(.*) login"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				username := input[1]
				user, err := mysql.CallGetUser(username, true)
				tool.Assert(tool.IfError(err))
				// 加入cookie
				// 用來判斷玩家有沒有登入
				duration, _ := time.ParseDuration("6h")
				tool.SetCookie(w, "user", "collectmmo/", username, time.Now().Add(duration))
				// 回傳玩家資料
				return user
			},
		},
		Command{
			regexp.MustCompile("me"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				// 從cookie中取得玩家名稱
				usernameCookie, err := tool.GetCookie(r, "user")
				if err != nil {
					panic(ErrNotLogin)
				}
				username := usernameCookie.Value
				user, err := mysql.CallGetUser(username, true)
				tool.Assert(tool.IfError(err))
				// 回傳玩家資料
				return user
			},
		},
		Command{
			regexp.MustCompile("player (.*) move to (top|bottom|left|right)"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				playername := input[1]
				movedir := input[2]

				// 從cookie中取得玩家名稱
				usernameCookie, err := tool.GetCookie(r, "user")
				if err != nil {
					panic(ErrNotLogin)
				}
				username := usernameCookie.Value

				// 判斷移動方向
				var x, y int
				switch movedir {
				case "top":
					x, y = 0, -1
					break
				case "bottom":
					x, y = 0, 1
					break
				case "left":
					x, y = -1, 0
					break
				case "right":
					x, y = 1, 0
					break
				}
				err = mysql.CallMove(username, playername, x, y)
				tool.Assert(tool.IfError(err))
				return nil
			},
		},
		Command{
			regexp.MustCompile("get map. center is \\((\\d+),(\\d+)\\). left top is \\((\\d+),(\\d+)\\)"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				xs, ys, ls, ts := input[1], input[2], input[3], input[4]
				// regular進來的一定是數字
				// 不必檢查error
				x, _ := strconv.Atoi(xs)
				y, _ := strconv.Atoi(ys)
				l, _ := strconv.Atoi(ls)
				t, _ := strconv.Atoi(ts)
				cells, err := mysql.CallGetMap(x, y, l, t)
				tool.Assert(tool.IfError(err))
				return cells
			},
		},
		Command{
			regexp.MustCompile("logout"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				// 從cookie中取得玩家名稱
				usernameCookie, err := tool.GetCookie(r, "user")
				if err != nil {
					panic(ErrNotLogin)
				}
				username := usernameCookie.Value
				// 刪除cookie
				tool.ClearCookie(w, "user", "collectmmo/")
				return fmt.Sprintf("%s logout", username)
			},
		},
		Command{
			regexp.MustCompile("取得所有玩家"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				return nil
			},
		},
		Command{
			regexp.MustCompile("使用(.*)道具"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) interface{} {
				ctx.Infof("use some thing %v", input)
				return nil
			},
		},
	}
)

func Talk(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	form := r.Form

	tool.AssertParametersNotMatch(map[string]string{
		"Talk": "string",
	}, form)

	talk := form["Talk"][0]

	result := ExecuteCommand(cmds, ctx, w, r, talk)
	tool.Output(w, result, nil)

}

// 重置db
// 將所有的table刪掉重建
// 資料當然全部不見
func Server_ResetDB(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	err := mysql.ResetDB(ctx)
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}
