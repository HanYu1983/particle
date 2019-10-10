package freechess

import (
	"context"
	"errors"
)

type OOXX struct{}

func (OOXX) Put(ctx context.Context, game Game, token Token, player string) (Game, error) {
	if game.Players[game.PlayerOrder[game.ActivePlayerIndex]] != player {
		return game, errors.New("you are not active player")
	}
	game.Tokens = append(game.Tokens, token)
	game.ActivePlayerIndex = (game.ActivePlayerIndex + 1) % len(game.PlayerOrder)
	return game, nil
}

func (OOXX) CheckWin(ctx context.Context, game Game) (Game, error) {
	game.State = Finish
	return game, nil
}
