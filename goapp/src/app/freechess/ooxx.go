package freechess

import (
	"context"
	"errors"
)

type OOXX struct{}

const (
	TypeOOXX = "ooxx"
)

func (OOXX) Put(ctx context.Context, game Game, token Token, player string) (Game, error) {
	if game.State != Play {
		return game, errors.New("game not start yet")
	}

	var orderID = -1
	for playerIdx, playerID := range game.Players {
		if playerID == player {
			orderID = game.PlayerOrder[playerIdx]
			break
		}
	}
	if orderID == -1 {
		return game, errors.New("player not found " + player)
	}

	if len(game.Tokens) != 0 {
		for playerIdx, orderID := range game.PlayerOrder {
			if orderID == game.CurrOrderIdx {
				if game.Players[playerIdx] != player {
					return game, errors.New("you are not active player")
				}
			}
		}
	}

	game.Tokens = append(game.Tokens, token)
	game.CurrOrderIdx = (orderID + 1) % len(game.PlayerOrder)
	return game, nil
}

func (OOXX) CheckWin(ctx context.Context, game Game) (Game, error) {
	game.State = Finish
	return game, nil
}
