package tool

import (
	"appengine"
	_ "errors"
	"fmt"
	"net/http"
	"regexp"
)

type Command struct {
	Pattern *regexp.Regexp
	Execute func(appengine.Context, http.ResponseWriter, *http.Request, []string) interface{}
}

func ExecuteCommand(cmds []Command, ctx appengine.Context, w http.ResponseWriter, r *http.Request, des string) interface{} {
	for _, cmd := range cmds {
		substrings := cmd.Pattern.FindStringSubmatch(des)
		isMatch := len(substrings) > 0
		if isMatch {
			return cmd.Execute(ctx, w, r, substrings)
		}
	}
	panic(fmt.Sprintf("沒有指令%v", des))
}
