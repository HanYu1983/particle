package collectmmo

import (
	"appengine"
	"errors"
	"fmt"
	"regexp"
)

type Command struct {
	Pattern *regexp.Regexp
	Execute func(appengine.Context, []string) (interface{}, error)
}

var (
	cmds = []Command{
		Command{
			regexp.MustCompile("建立名稱為(.*)的角色"),
			func(ctx appengine.Context, input []string) (interface{}, error) {
				return nil, CreateUser(ctx, input[1])
			},
		},
		Command{
			regexp.MustCompile("取得名稱為(.*)的角色"),
			func(ctx appengine.Context, input []string) (interface{}, error) {
				return Users(ctx, input[1])
			},
		},
		Command{
			regexp.MustCompile("取得所有角色"),
			func(ctx appengine.Context, input []string) (interface{}, error) {
				return Users(ctx, "")
			},
		},
		Command{
			regexp.MustCompile("使用(.*)道具"),
			func(ctx appengine.Context, input []string) (interface{}, error) {
				ctx.Infof("use some thing %v", input)
				return nil, nil
			},
		},
	}
)

func ExecuteCommand(ctx appengine.Context, des string) (interface{}, error) {
	for _, cmd := range cmds {
		substrings := cmd.Pattern.FindStringSubmatch(des)
		isMatch := len(substrings) > 0
		if isMatch {
			return cmd.Execute(ctx, substrings)
		}
	}
	return nil, errors.New(fmt.Sprintf("沒有指令%v", des))
}
