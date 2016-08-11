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

func ExecuteCommand(cmd []Command, ctx appengine.Context, w http.ResponseWriter, r *http.Request, des string) (interface{}, error) {
	for _, cmd := range cmds {
		substrings := cmd.Pattern.FindStringSubmatch(des)
		isMatch := len(substrings) > 0
		if isMatch {
			return cmd.Execute(ctx, w, r, substrings)
		}
	}
	return nil, errors.New(fmt.Sprintf("沒有指令%v", des))
}
