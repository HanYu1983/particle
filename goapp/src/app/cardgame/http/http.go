package http

import (
	"appengine"
	"appengine/datastore"
	"net/http"
	"fmt"
	core "app/cardgame/core"
	uuid "github.com/google/uuid"
	"io"
	"errors"
	"encoding/json"
	"github.com/gorilla/mux"
)

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

func RoomList(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	var err error
	var rooms []core.Room
	ctx := appengine.NewContext(r)
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
		room = core.NewRoom("lobby")
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

func NewRoom(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	r.ParseForm()
	user := r.PostForm.Get("user")
	if user == "" {
		panic("must have user")
	}

	var err error
	var room core.Room
	ctx := appengine.NewContext(r)
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room = core.NewRoom(uuid.New().String())
		room = core.AddPlayer(room, user, "")
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

func JoinRoom(w http.ResponseWriter, r *http.Request) {
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
	ctx := appengine.NewContext(r)
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err = core.LoadRoom(ctx, roomId, GroupKey(ctx))
		if err != nil {
			return err
		}
		room = core.AddPlayer(room, user, "")
		err = core.SendMessage(ctx, room, map[string]interface{}{
			"desc": "{user}加入房間{roomId}",
			"user": user,
			"roomId":  roomId,
		})
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

func ValidateRoom(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	var err error
	var room core.Room
	ctx := appengine.NewContext(r)
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

func GetRoom(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	vars := mux.Vars(r)
	roomId := vars["roomId"]

	var err error
	var room core.Room
	ctx := appengine.NewContext(r)
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

func SendRoomMessage(w http.ResponseWriter, r *http.Request) {
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
	ctx := appengine.NewContext(r)
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		room, err = core.LoadRoom(ctx, roomId, GroupKey(ctx))
		err = core.SendMessage(ctx, room, map[string]interface{}{
			"desc": "{user}傳送訊息{msg}",
			"user": user,
			"msg":  msg,
		})
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
