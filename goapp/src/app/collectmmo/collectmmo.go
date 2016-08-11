package collectmmo

import (
	"appengine"
	"database/sql"
	_ "errors"
	_ "fmt"
	_ "github.com/go-sql-driver/mysql"
	"lib/tool"
	"net/http"
	"regexp"
)

var (
	cmds = []Command{
		Command{
			regexp.MustCompile("(.*)玩家登入"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				return nil, UserLogin(ctx, w, r, input[1])
			},
		},
		Command{
			regexp.MustCompile("取得名稱為(.*)的玩家"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				return Users(ctx, w, r, input[1])
			},
		},
		Command{
			regexp.MustCompile("取得所有玩家"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				return Users(ctx, w, r, "")
			},
		},
		Command{
			regexp.MustCompile("使用(.*)道具"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				ctx.Infof("use some thing %v", input)
				return nil, nil
			},
		},
		Command{
			regexp.MustCompile("(.*)往([上|下|左|右])移動"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				ctx.Infof("use some thing %v", input)
				name := input[1]
				movedir := input[2]
				var _ = name
				var _ = movedir
				db, err := sql.Open("mysql", "root2:@/mmo")
				var _ = db
				tool.Assert(tool.IfError(err))
				return nil, nil
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

	result, err := ExecuteCommand(cmds, ctx, w, r, talk)
	tool.Assert(tool.IfError(err))
	tool.Output(w, result, nil)

}
