package collectmmo

import (
	"appengine"
	"errors"
	"fmt"
	"net/http"
	"regexp"
)

type Command struct {
	Pattern *regexp.Regexp
	Execute func(appengine.Context, http.ResponseWriter, *http.Request, []string) (interface{}, error)
}

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
	}
)

func ExecuteCommand(ctx appengine.Context, w http.ResponseWriter, r *http.Request, des string) (interface{}, error) {
	for _, cmd := range cmds {
		substrings := cmd.Pattern.FindStringSubmatch(des)
		isMatch := len(substrings) > 0
		if isMatch {
			return cmd.Execute(ctx, w, r, substrings)
		}
	}
	return nil, errors.New(fmt.Sprintf("沒有指令%v", des))
}
