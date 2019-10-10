package freechess

import (
	"context"
	"encoding/json"
	"errors"
	"lib/db2"
	"time"

	"appengine"
)

type Position struct {
	X int
	Y int
}

type Token struct {
	Position Position
	Type     string
}

const (
	Pending = iota
	WaitOpponent
	Play
	Finish
)

type Game struct {
	ID                string
	Type              string
	Tokens            []Token
	State             int
	Players           []string
	PlayerOrder       []int
	Winner            string
	ActivePlayerIndex int
	Create            time.Time
}

func AddPlayer(ctx context.Context, game Game, player string) (Game, error) {
	// TODO check player exist
	game.Players = append(game.Players, player)
	return game, nil
}

func RemovePlayer(ctx context.Context, game Game, player string) (Game, error) {
	var idx = -1
	for i := 0; i < len(game.Players); i++ {
		if game.Players[i] == player {
			idx = i
			break
		}
	}
	if idx == -1 {
		return game, nil
	}
	game.Players = append(game.Players[:idx], game.Players[idx+1:]...)

	var idx2 = -1
	for i := 0; i < len(game.PlayerOrder); i++ {
		if game.PlayerOrder[i] == idx {
			idx2 = i
			break
		}
	}
	if idx2 == -1 {
		return game, nil
	}
	game.PlayerOrder = append(game.PlayerOrder[:idx2], game.PlayerOrder[idx2+1:]...)
	if len(game.PlayerOrder) == 0 {
		game.State = Pending
	}
	if len(game.PlayerOrder) == 1 {
		game.State = WaitOpponent
	}
	return game, nil
}

func AppendOrder(ctx context.Context, game Game, player string, isFirst bool) (Game, error) {
	var idx = -1
	for i := 0; i < len(game.Players); i++ {
		if game.Players[i] == player {
			idx = i
			break
		}
	}
	if idx == -1 {
		return game, errors.New("you are not player")
	}
	if isFirst {
		game.PlayerOrder = []int{}
	}
	game.PlayerOrder = append(game.PlayerOrder, idx)
	if len(game.PlayerOrder) == 1 {
		game.State = WaitOpponent
	}
	if len(game.PlayerOrder) >= 2 {
		game.State = Play
	}
	return game, nil
}

type IGame interface {
	Put(ctx context.Context, game Game, token Token, player string) (Game, error)
	CheckWin(ctx context.Context, game Game) (Game, error)
}

type Context struct {
	Games []Game
}

const (
	contextPath = "root/freechess/context.json"
	user        = "freechess"
)

func NewContext() Context {
	return Context{}
}

func LoadContext(ctx appengine.Context) (Context, error) {
	file, err := db2.GetFile(ctx, contextPath)
	if err != nil {
		return Context{}, err
	}
	if file == nil {
		return NewContext(), nil
	}
	var dc Context
	err = json.Unmarshal(file.Content, &dc)
	return dc, err
}

func SaveContext(ctx appengine.Context, appContext Context) error {
	// 先將結構平面化成字串
	code, err := json.Marshal(appContext)
	if err != nil {
		return err
	}

	err = db2.WriteFileWithoutTransaction(ctx, contextPath, code, user, true)
	if err != nil {
		return err
	}

	return nil
}
