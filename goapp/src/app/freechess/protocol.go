package freechess

import (
	"context"
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
	Type              string
	Tokens            []Token
	State             int
	Players           []string
	PlayerOrder       []int
	Winner            string
	ActivePlayerIndex int
}

func AddPlayer(ctx context.Context, game Game, player string) (Game, error) {
	// TODO check player exist
	game.Players = append(game.Players, player)
	game.PlayerOrder = append(game.PlayerOrder, len(game.Players)-1)
	return game, nil
}

func MakeFirst(ctx context.Context, game Game, player string) (Game, error) {
	return game, nil
}

type IGame interface {
	Put(ctx context.Context, game Game, token Token, player string) (Game, error)
	CheckWin(ctx context.Context, game Game) (Game, error)
}
