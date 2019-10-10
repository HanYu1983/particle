package freechess

import (
	"context"
	"errors"
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
}

func AddPlayer(ctx context.Context, game Game, player string) (Game, error) {
	// TODO check player exist
	game.Players = append(game.Players, player)
	return game, nil
}

func RemovePlayer(ctx context.Context, game Game, player string) (Game, error) {
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

type Freechess struct {
	Games []Game
}
