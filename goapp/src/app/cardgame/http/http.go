package http

import (
	"appengine"
	"appengine/datastore"
	"net/http"
	"fmt"
	core "app/cardgame/core"
	uuid "github.com/google/uuid"
	sgs "app/cardgame/sgs"
	"io"
	"errors"
	"encoding/json"
	"github.com/gorilla/mux"
	"strconv"
)

type Handler func(ctx appengine.Context, w http.ResponseWriter, r *http.Request)

func AppengineContext(handler Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		handler(appengine.NewContext(r), w, r)
	}
}

// 統一回傳資訊
func Recover(w io.Writer) {
	if err := recover(); err != nil {
		switch err.(type) {
		case string:
			Json(w, nil, errors.New(err.(string)))
		case error:
			Json(w, nil, err.(error))
		default:
			Json(w, nil, errors.New(fmt.Sprintf("err:%s", err)))
		}
	}
}

// 回傳json陣列:[error, info]
func Json(w io.Writer, ret interface{}, err error) {
	var total []interface{}
	if err != nil {
		total = []interface{}{err.Error(), nil}
	} else {
		total = []interface{}{nil, ret}
	}
	jsonstr, _ := json.Marshal(total)
	fmt.Fprint(w, string(jsonstr))
}

func GroupKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "SGS", "OnlyOne", 0, nil)
}

func RoomList(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	var err error
	var rooms []core.Room
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		rooms, err = core.RoomList(ctx, 0, 20, GroupKey(ctx))
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, rooms, nil)
}

func NewLobby(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	var err error
	var room core.Room
	ctx := appengine.NewContext(r)
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room = core.NewRoom("lobby", "admin")
		room, err = core.CreateChannel(ctx, room)
		if err != nil {
			return err
		}
		err = core.SaveRoom(ctx, room, GroupKey(ctx))
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, room, nil)
}

func NewRoom(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	r.ParseForm()
	user := r.PostForm.Get("user")
	if user == "" {
		panic("must have user")
	}

	var err error
	var room core.Room
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room = core.NewRoom(uuid.New().String(), user)
		room, err = core.AddPlayer(room, user, sgs.UserA)
		if err != nil {
			return err
		}
		err = core.SaveRoom(ctx, room, GroupKey(ctx))
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, room, nil)
}

func JoinRoom(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	r.ParseForm()
	user := r.PostForm.Get("user")
	if user == "" {
		panic("must have user")
	}
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	var err error
	var room core.Room
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err = core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		role := "watcher"
		if len(room.Players) == 1 {
			role = sgs.UserB
		}
		room, err = core.AddPlayer(room, user, role)
		if err != nil {
			return err
		}
		err = core.SaveRoom(ctx, room, GroupKey(ctx))
		if err != nil {
			return err
		}
		err = core.SendMessage(ctx, room, map[string]interface{}{
			"desc": "{user}加入房間{roomId}",
			"user": user,
			"roomId":  roomId,
		})
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, room, nil)
}

func ValidateRoom(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	var err error
	var room core.Room
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err = core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		room = core.UpdateExpiration(room)
		err = core.SaveRoom(ctx, room, GroupKey(ctx))
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, room, nil)
}

func GetRoom(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	var err error
	var room core.Room
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err = core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, room, nil)
}

func SendRoomMessage(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	var err error

	vars := mux.Vars(r)
	roomId := vars["roomId"]

	r.ParseForm()
	user := r.PostForm.Get("user")
	if user == "" {
		panic("must have user")
	}

	msg := r.PostForm.Get("msg")
	if msg == "" {
		panic("must have msg")
	}

	var room core.Room
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err = core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		err = core.SendMessage(ctx, room, map[string]interface{}{
			"desc": "{user}傳送訊息{msg}",
			"user": user,
			"msg":  msg,
		})
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, room, nil)
}

func UpdateRoom(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	r.ParseForm()
	isPrivate := r.PostForm.Get("isPrivate")
	userA := r.PostForm.Get("userA")
	userB := r.PostForm.Get("userB")
	userACards := r.PostForm["userACards"]
	userBCards := r.PostForm["userBCards"]

	var err error
	var room core.Room
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err = core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		if isPrivate == "true" {
			room.IsPrivate = true
		}
		if userA != "" {
			room, err = core.ChangeRole(room, userA, sgs.UserA)
			if err != nil {
				return err
			}
		}
		if userB != "" {
			room, err = core.ChangeRole(room, userB, sgs.UserB)
			if err != nil {
				return err
			}
		}
		if len(userACards) > 0 {
			room.UserACards = userACards
		}
		if len(userBCards) > 0{
			room.UserBCards = userBCards
		}
		err = core.SaveRoom(ctx, room, GroupKey(ctx))
		if err != nil {
			return err
		}
		err = core.SendMessage(ctx, room, map[string]interface{}{
			"desc": "{roomId}資料變更",
			"roomId":  roomId,
		})
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, room, nil)
}

func StartGame(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	var err error
	var room core.Room
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err = core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		game, err := sgs.NewGame(ctx, room.ID)
		if err != nil {
			return err
		}
		game, _, err = sgs.AddCards(ctx, game, sgs.UserA+sgs.Hand, sgs.UserA, room.UserACards)
		if err != nil {
			return err
		}
		game, _, err = sgs.AddCards(ctx, game, sgs.UserB+sgs.Hand, sgs.UserB, room.UserBCards)
		if err != nil {
			return err
		}
		err = sgs.SaveGame(ctx, game, GroupKey(ctx))
		if err != nil {
			return err
		}
		room.GameID = game.ID
		room.State = core.RoomStatePlaying
		err = core.SaveRoom(ctx, room, GroupKey(ctx))
		if err != nil {
			return err
		}
		err = core.SendMessage(ctx, room, map[string]interface{}{
			"desc": "{roomId}開始遊戲",
			"roomId":  roomId,
		})
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, room, nil)
}


func GetGame(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	var err error
	var game sgs.Game
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err := core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		game, err = sgs.LoadGame(ctx, room.GameID, GroupKey(ctx))
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, game, nil)
}

func PushCommand(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	var err error
	vars := mux.Vars(r)
	roomId := vars["roomId"]
	r.ParseForm()
	commandBody := r.PostForm.Get("commandBody")
	if commandBody == "" {
		panic("must have commandBody")
	}
	var uploadCommand core.Command
	err = json.Unmarshal([]byte(commandBody), &uploadCommand)
	if err != nil {
		panic(err)
	}
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err := core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		game, err := sgs.LoadGame(ctx, room.GameID, GroupKey(ctx))
		if err != nil {
			return err
		}
		game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
			uploadCommand,
		})

		var HandleCommand sgs.CommandHandler
		HandleCommand = sgs.ReduceCommandHandler([]sgs.CommandHandler{sgs.BasicCommandHandler})
		game, err = sgs.PerformCommandHandler(HandleCommand, ctx, game)
		if err != nil {
			switch err.(type) {
			case sgs.TargetMissingError:
				ctx.Infof("target missing:%v", err.Error())
			default:
				return err
			}
		}

		err = sgs.SaveGame(ctx, game, GroupKey(ctx))
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, uploadCommand, nil)
}

func GetTopCommand(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	var err error
	var c core.Command
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err := core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		game, err := sgs.LoadGame(ctx, room.GameID, GroupKey(ctx))
		if err != nil {
			return err
		}
		var has bool
		c, has = core.GetCommand(ctx, game.Procedure)
		if has == false {
			return nil
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, c, nil)
}

func UpdateCommand(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	var err error
	vars := mux.Vars(r)
	roomId := vars["roomId"]
	commandIdStr := vars["commandId"]
	commandId, err := strconv.Atoi(commandIdStr)
	if err != nil {
		panic(err)
	}
	r.ParseForm()
	commandBody := r.PostForm.Get("commandBody")
	if commandBody == "" {
		panic("must have commandBody")
	}
	var uploadCommand core.Command
	err = json.Unmarshal([]byte(commandBody), &uploadCommand)
	if err != nil {
		panic(err)
	}
	if uploadCommand.ID != commandId {
		panic("commandId isnt match")
	}
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err := core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		game, err := sgs.LoadGame(ctx, room.GameID, GroupKey(ctx))
		if err != nil {
			return err
		}
		game.Procedure.Command[commandId] = uploadCommand

		var HandleCommand sgs.CommandHandler
		HandleCommand = sgs.ReduceCommandHandler([]sgs.CommandHandler{sgs.BasicCommandHandler})
		game, err = sgs.PerformCommandHandler(HandleCommand, ctx, game)
		if err != nil {
			switch err.(type) {
			case sgs.TargetMissingError:
				ctx.Infof("target missing:%v", err.Error())
			default:
				return err
			}
		}

		err = sgs.SaveGame(ctx, game, GroupKey(ctx))
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, uploadCommand, nil)
}

func CollectCommand(ctx appengine.Context, w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	var err error
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	r.ParseForm()
	user := r.PostForm.Get("user")
	if user == "" {
		panic("must have user")
	}

	cmds := []core.Command{}
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err := core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		game, err := sgs.LoadGame(ctx, room.GameID, GroupKey(ctx))
		if err != nil {
			return err
		}
		role, err := core.GetRole(room, user)
		if err != nil {
			return err
		}
		cmds, err = sgs.CollectCommand(ctx, game, role, cmds)
		if err != nil {
			return err
		}
		return nil
	}, nil)
	if err != nil {
		panic(err)
	}
	Json(w, cmds, nil)
}