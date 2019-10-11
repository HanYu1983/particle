package freechess

import (
	"context"
	"errors"
	"net/http"
	"strconv"

	"github.com/HanYu1983/gomod/lib/tool"

	"github.com/gorilla/mux"

	"google.golang.org/appengine"
)

func Serve_App(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	var ret interface{}
	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		ret = appCtx
		return nil
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, ret, nil)
}

func Serve_CreateGame(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	params := mux.Vars(r)
	t := params["type"]
	playerID := params["player"]
	var ret interface{}
	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		appCtx, gameIdx, game, err := CreateGame(ctx, appCtx, t)
		if err != nil {
			return err
		}
		game, err = AddPlayer(ctx, game, playerID)
		if err != nil {
			return err
		}
		game, err = AppendOrder(ctx, game, playerID, false)
		if err != nil {
			return err
		}
		appCtx.Games[gameIdx] = game
		ret = []interface{}{appCtx, game}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, ret, nil)
}

func Serve_GetGame(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	params := mux.Vars(r)
	gameID := params["game"]
	var ret interface{}

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		_, game, err := GetGame(ctx, appCtx, gameID)
		if err != nil {
			return err
		}
		ret = game
		return nil
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, ret, nil)
}

func Serve_JoinGame(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	visitorStr := r.URL.Query().Get("visitor")
	isVisitor := visitorStr != ""

	params := mux.Vars(r)
	gameID := params["game"]
	playerID := params["player"]

	var ret interface{}
	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		gameIdx, game, err := GetGame(ctx, appCtx, gameID)
		if err != nil {
			return err
		}

		if isVisitor {
			game, err = AddVisitor(ctx, game, playerID)
			if err != nil {
				return err
			}
		} else {
			game, err = AddPlayer(ctx, game, playerID)
			if err != nil {
				return err
			}
			game, err = AppendOrder(ctx, game, playerID, false)
			if err != nil {
				return err
			}
		}

		appCtx.Games[gameIdx] = game
		ret = game
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, ret, nil)
}

func Serve_LeaveGame(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	params := mux.Vars(r)
	gameID := params["game"]
	playerID := params["player"]

	var ret interface{}
	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		gameIdx, game, err := GetGame(ctx, appCtx, gameID)
		if err != nil {
			return err
		}
		game, err = RemovePlayer(ctx, game, playerID)
		if err != nil {
			return err
		}
		appCtx.Games[gameIdx] = game
		ret = game
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, ret, nil)
}

func Serve_PutChess(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	params := mux.Vars(r)
	gameID := params["game"]
	playerID := params["player"]
	xs := params["x"]
	ys := params["y"]
	x, err := strconv.Atoi(xs)
	tool.Assert(tool.IfError(err))

	y, err := strconv.Atoi(ys)
	tool.Assert(tool.IfError(err))

	var ret interface{}
	ctx := appengine.NewContext(r)
	err = tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		gameIdx, game, err := GetGame(ctx, appCtx, gameID)
		if err != nil {
			return err
		}
		order, err := GetPlayerOrder(ctx, game, playerID)
		if err != nil {
			return err
		}
		switch game.Type {
		case TypeOOXX:
			var sender OOXX
			game, err = sender.Put(ctx, game, Token{
				Position: Position{x, y},
				Type:     strconv.Itoa(order),
			}, playerID)
			if err != nil {
				return err
			}
			break
		default:
			return errors.New("game type not found " + game.Type)
		}
		appCtx.Games[gameIdx] = game
		ret = game
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, ret, nil)
}
