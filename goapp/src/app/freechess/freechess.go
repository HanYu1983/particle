package freechess

import (
	"lib/tool"
	"net/http"

	"appengine"
)

func Serve_CreateRoom(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		return nil
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}
