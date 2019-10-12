package freechess

import (
	"context"
	"errors"
	"fmt"
)

type OOXX struct{}

const (
	TypeOOXX = "ooxx"
)

func (sender OOXX) Put(ctx context.Context, game Game, token Token, player string) (Game, error) {
	if game.State == Finish {
		return game, fmt.Errorf("%s game already finished", game.ID)
	}

	if game.State != Play {
		return game, fmt.Errorf("%s game not start yet", game.ID)
	}

	var orderID = -1
	for playerIdx, playerID := range game.Players {
		if playerID == player {
			orderID = game.PlayerOrder[playerIdx]
			break
		}
	}
	if orderID == -1 {
		return game, fmt.Errorf("you are not player %s", player)
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

	for _, t := range game.Tokens {
		if t.Position == token.Position {
			return game, fmt.Errorf("the position already token (%d, %d)", token.Position.X, token.Position.Y)
		}
	}

	game.Tokens = append(game.Tokens, token)
	game.CurrOrderIdx = (orderID + 1) % len(game.PlayerOrder)
	game = sender.CheckWin(ctx, game)
	return game, nil
}

func checkLine(ctx context.Context, game Game, line []Position, t string) bool {
	var mapping = map[Position]string{}
	for _, t := range game.Tokens {
		mapping[t.Position] = t.Type
	}
	for _, p := range line {
		if mapping[p] != t {
			return false
		}
	}
	return true
}

func (OOXX) CheckWin(ctx context.Context, game Game) Game {
	var completed = false

	completed = completed || checkLine(ctx, game, []Position{{0, 0}, {0, 1}, {0, 2}}, "0")
	completed = completed || checkLine(ctx, game, []Position{{1, 0}, {1, 1}, {1, 2}}, "0")
	completed = completed || checkLine(ctx, game, []Position{{2, 0}, {2, 1}, {2, 2}}, "0")
	completed = completed || checkLine(ctx, game, []Position{{0, 0}, {1, 0}, {2, 0}}, "0")
	completed = completed || checkLine(ctx, game, []Position{{0, 1}, {1, 1}, {2, 1}}, "0")
	completed = completed || checkLine(ctx, game, []Position{{0, 2}, {1, 2}, {2, 2}}, "0")
	completed = completed || checkLine(ctx, game, []Position{{0, 0}, {1, 1}, {2, 2}}, "0")
	completed = completed || checkLine(ctx, game, []Position{{0, 2}, {1, 1}, {2, 0}}, "0")

	if completed {
		game.Winner = "0"
		game.State = Finish
		return game
	}

	completed = completed || checkLine(ctx, game, []Position{{0, 0}, {0, 1}, {0, 2}}, "1")
	completed = completed || checkLine(ctx, game, []Position{{1, 0}, {1, 1}, {1, 2}}, "1")
	completed = completed || checkLine(ctx, game, []Position{{2, 0}, {2, 1}, {2, 2}}, "1")
	completed = completed || checkLine(ctx, game, []Position{{0, 0}, {1, 0}, {2, 0}}, "1")
	completed = completed || checkLine(ctx, game, []Position{{0, 1}, {1, 1}, {2, 1}}, "1")
	completed = completed || checkLine(ctx, game, []Position{{0, 2}, {1, 2}, {2, 2}}, "1")
	completed = completed || checkLine(ctx, game, []Position{{0, 0}, {1, 1}, {2, 2}}, "1")
	completed = completed || checkLine(ctx, game, []Position{{0, 2}, {1, 1}, {2, 0}}, "1")

	if completed {
		game.Winner = "1"
		game.State = Finish
		return game
	}
	return game
}
