package freechess

import (
	"encoding/json"
	"errors"
	"lib/db2"
	"strconv"
	"time"

	"appengine"
)

type Position struct {
	X int `json:"x"`
	Y int `json:"y"`
}

type Token struct {
	Position Position `json:"position"`
	Type     string   `json:"type"`
}

const (
	Pending    = "Pending"
	WaitPlayer = "WaitPlayer"
	Play       = "Play"
	Finish     = "Finish"
)

type Game struct {
	ID           string    `json:"id"`
	Type         string    `json:"type"`
	Tokens       []Token   `json:"tokens"`
	State        string    `json:"state"`
	Players      []string  `json:"players"`
	PlayerOrder  []int     `json:"playerOrder"`
	Winner       string    `json:"winner"`
	CurrOrderIdx int       `json:"currOrderIdx"`
	CreateTime   time.Time `json:"createTime"`
}

func GetPlayerOrder(ctx appengine.Context, game Game, player string) (int, error) {
	for order, playerID := range game.Players {
		if playerID == player {
			return game.PlayerOrder[order], nil
		}
	}
	return 0, errors.New(player + " player not found")
}

func AddPlayer(ctx appengine.Context, game Game, player string) (Game, error) {
	// TODO check player exist
	game.Players = append(game.Players, player)
	return game, nil
}

func RemovePlayer(ctx appengine.Context, game Game, player string) (Game, error) {
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
	game.PlayerOrder = append(game.PlayerOrder[:idx], game.PlayerOrder[idx+1:]...)
	if len(game.PlayerOrder) < 2 {
		game.State = WaitPlayer
	}
	return game, nil
}

func AppendOrder(ctx appengine.Context, game Game, player string, isFirst bool) (Game, error) {
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

	var curr = len(game.PlayerOrder)
	for j := 0; j < len(game.PlayerOrder); j++ {
		var notFound = true
		for _, orderID := range game.PlayerOrder {
			if j == orderID {
				notFound = false
			}
		}
		if notFound {
			curr = j
			break
		}
	}

	game.PlayerOrder = append(game.PlayerOrder, curr)
	if len(game.PlayerOrder) < 2 {
		game.State = WaitPlayer
	}
	if len(game.PlayerOrder) >= 2 {
		game.State = Play
	}
	return game, nil
}

type IGame interface {
	Put(ctx appengine.Context, game Game, token Token, player string) (Game, error)
	CheckWin(ctx appengine.Context, game Game) (Game, error)
}

type Context struct {
	Games []Game `json:"games"`
	SeqId int    `json:"seqId"`
}

func CreateGame(ctx appengine.Context, app Context, gameType string) (Context, int, Game, error) {
	var game = Game{
		ID:          strconv.Itoa(app.SeqId),
		Type:        gameType,
		State:       Pending,
		Tokens:      []Token{},
		Players:     []string{},
		PlayerOrder: []int{},
		CreateTime:  time.Now(),
	}
	var idx = len(app.Games)
	app.Games = append(app.Games, game)
	app.SeqId = app.SeqId + 1
	return app, idx, game, nil
}

func GetGame(ctx appengine.Context, app Context, id string) (int, Game, error) {
	for i, game := range app.Games {
		if game.ID == id {
			return i, game, nil
		}
	}
	var game Game
	return 0, game, errors.New(id + " not found")
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
