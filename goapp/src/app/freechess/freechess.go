package freechess

import (
	"lib/tool"
	"net/http"

	uuid "github.com/google/uuid"

	"appengine"
)

func Serve_CreateGame(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		game := Game{
			ID: uuid.New().String(),
		}
		appCtx.Games = append(appCtx.Games, game)
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}
