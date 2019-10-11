package game

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"sort"
	"strconv"
	"time"

	dbfile "github.com/HanYu1983/gomod/lib/db/file"
	"github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
	"google.golang.org/appengine/datastore"
)

var _ = time.Millisecond

func CreateUser(w http.ResponseWriter, r *http.Request) {

	ctx := appengine.NewContext(r)

	w.Header().Set("Content-Type", "application/json; charset=utf8")

	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})

	if r.Method == "GET" {
		gameCtx, err := LoadGameContext(ctx)
		tool.Assert(tool.IfError(err))
		Output(w, gameCtx.Users, nil)
		return
	}

	form, err := tool.ReadAjaxPost(r)
	tool.Assert(tool.IfError(err))

	tool.Assert(tool.ParameterIsNotExist(form, "FBID"))

	fbid := form["FBID"][0]
	tool.Assert(tool.ParameterIsNotExist(form, "Name"))

	err = WithTransaction(ctx, 3, func(ctx context.Context) error {
		gameCtx, err := LoadGameContext(ctx)
		if err != nil {
			return err
		}

		name := form["Name"][0]
		user := gameCtx.User(fbid)
		user.Name = name
		gameCtx.EditUser(user)

		err = SaveGameContext(ctx, gameCtx)
		return err
	})

	tool.Assert(tool.IfError(err))

	Output(w, nil, nil)
}

func CreateRoom(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf8")

	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)

	if r.Method == "GET" {
		gameCtx, err := LoadGameContext(ctx)
		tool.Assert(tool.IfError(err))
		Output(w, gameCtx.Rooms, nil)
		return
	}

	form, err := tool.ReadAjaxPost(r)
	tool.Assert(tool.IfError(err))

	tool.Assert(tool.ParameterIsNotExist(form, "ID"))

	id := form["ID"][0]

	tool.Assert(tool.ParameterIsNotExist(form, "Name"))

	err = WithTransaction(ctx, 3, func(ctx context.Context) error {
		gameCtx, err := LoadGameContext(ctx)
		if err != nil {
			return err
		}

		name := form["Name"][0]
		room := gameCtx.Room(id)
		room.Name = name
		gameCtx.EditRoom(room)

		err = SaveGameContext(ctx, gameCtx)
		return err
	})

	tool.Assert(tool.IfError(err))

	Output(w, nil, nil)
}

func EnterRoom(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf8")

	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)

	if r.Method == "GET" {
		gameCtx, err := LoadGameContext(ctx)
		tool.Assert(tool.IfError(err))
		Output(w, gameCtx.Rooms, nil)
		return
	}

	form, err := tool.ReadAjaxPost(r)
	tool.Assert(tool.IfError(err))

	tool.Assert(tool.ParameterIsNotExist(form, "FBID"))

	fbid := form["FBID"][0]

	tool.Assert(tool.ParameterIsNotExist(form, "Room"))

	err = WithTransaction(ctx, 3, func(ctx context.Context) error {
		gameCtx, err := LoadGameContext(ctx)
		if err != nil {
			return err
		}

		roomKey := form["Room"][0]
		user := gameCtx.User(fbid)
		room := gameCtx.Room(roomKey)
		user.Room = room.Key
		gameCtx.EditUser(user)

		err = SaveGameContext(ctx, gameCtx)
		return err
	})

	tool.Assert(tool.IfError(err))

	Output(w, nil, nil)
}

func LeaveMessage(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json; charset=utf8")

	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)

	if r.Method == "GET" {
		gameCtx, err := LoadGameContext(ctx)
		tool.Assert(tool.IfError(err))
		Output(w, gameCtx.Messages, nil)
		return
	}

	form, err := tool.ReadAjaxPost(r)
	tool.Assert(tool.IfError(err))

	tool.Assert(tool.ParameterIsNotExist(form, "FBID"))
	tool.Assert(tool.ParameterIsNotExist(form, "TargetUser"))
	tool.Assert(tool.ParameterIsNotExist(form, "Content"))
	tool.Assert(tool.ParameterIsNotExist(form, "UnixTime"))

	fbid := form["FBID"][0]
	targetUser := form["TargetUser"][0]
	content := form["Content"][0]
	unixTime, err := strconv.ParseInt(form["UnixTime"][0], 10, 64)
	tool.Assert(tool.IfError(err))

	err = WithTransaction(ctx, 3, func(ctx context.Context) error {
		gameCtx, err := LoadGameContext(ctx)
		if err != nil {
			return err
		}
		user := gameCtx.FindUser(targetUser)
		if user == EmptyUser {
			return errors.New(fmt.Sprintf("user not found:%v", targetUser))
		}
		msg := Message{
			FromUser: fbid,
			ToUser:   targetUser,
			Content:  content,
			Time:     time.Unix(unixTime, 0),
		}
		gameCtx.LeaveMessage(msg)
		err = SaveGameContext(ctx, gameCtx)
		return err
	})

	tool.Assert(tool.IfError(err))

	Output(w, nil, nil)
}

func Clear(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf8")
	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)
	err := datastore.RunInTransaction(ctx, func(ctx context.Context) error {
		gameCtx, err := LoadGameContext(ctx)
		if err != nil {
			return err
		}
		gameCtx = Context{}
		err = SaveGameContext(ctx, gameCtx)
		return err
	}, nil)

	tool.Assert(tool.IfError(err))

	Output(w, nil, nil)
}

func State(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf8")
	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)
	gameCtx, err := LoadGameContext(ctx)
	tool.Assert(tool.IfError(err))
	Output(w, gameCtx, nil)
}

func LongPollingTargetMessage(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf8")

	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)
	var _ = ctx

	r.ParseForm()
	tool.Assert(tool.ParameterIsNotExist(r.Form, "FBID"))
	tool.Assert(tool.ParameterIsNotExist(r.Form, "Maxtime"))

	fbid := r.Form["FBID"][0]
	// use long polling tech if maxtime > 1
	maxtime, err := strconv.Atoi(r.Form["Maxtime"][0])
	tool.Assert(tool.IfError(err))

	retCh, errCh := make(chan []Message), make(chan error)

	go func() {
		defer close(retCh)
		defer close(errCh)
		var times int
		var ok bool

		for times < maxtime {
			// 忽略回傳的任何錯誤，直到timeout或取得資料
			datastore.RunInTransaction(ctx, func(ctx context.Context) error {
				gameCtx, err := LoadGameContext(ctx)
				if err != nil {
					return err
				}
				user := gameCtx.FindUser(fbid)
				if user == EmptyUser {
					// user not found, ignore this case
					ok = true

				} else {
					msgs := gameCtx.MessagesToUser(user)

					if len(msgs) > 0 {
						gameCtx.DeleteMessage(msgs)
						err = SaveGameContext(ctx, gameCtx)
						sort.Sort(ByTime(msgs))
						retCh <- msgs
						ok = true
					}

				}

				return err
			}, nil)

			if ok == true {
				break

			} else {
				if maxtime > 1 {
					time.Sleep(1 * time.Second)
				}

				times += 1
			}
		}

		if times == maxtime {
			errCh <- errors.New("times out")
		}

	}()

	select {
	case err := <-errCh:
		tool.Assert(tool.IfError(err))
	case ret := <-retCh:
		Output(w, ret, nil)
	}
}

func WithTransaction(ctx context.Context, retry int, fn func(c context.Context) error) error {
	var err error
	var times int
	for times < retry {
		err = datastore.RunInTransaction(ctx, fn, nil)
		if err == datastore.ErrConcurrentTransaction {
			// redo RunTransaction

		} else {
			break

		}
		times += 1
	}
	return err
}

var gameContextPosition int64

func InitContext(gameContextPosition_ int64) {
	gameContextPosition = gameContextPosition_
}

func LoadGameContext(ctx context.Context) (Context, error) {

	file, err := dbfile.GetFile(ctx, gameContextPosition)
	if err != nil {
		return Context{}, err
	}

	var gameCtx Context
	err = json.Unmarshal(file.Content, &gameCtx)
	if err != nil {
		return Context{}, err
	}
	return gameCtx, nil

	/*
	  files, _, err := dbfile.QueryKeys( ctx, 0, "root" )

	  if err != nil {
	    return Context{}, err
	  }
	  if len( files ) == 0 {
	    return Context{}, errors.New("root dir isn't exist")
	  }

	  rootDir := files[0].Key

	  files, _, err = dbfile.QueryKeys( ctx, rootDir, "card" )
	  if err != nil {
	    return Context{}, err
	  }

	  if len( files ) == 0 {
	    return Context{}, errors.New("card dir isn't exist")
	  }

	  cardDir := files[0].Key
	  files, _, err = dbfile.QueryKeys( ctx, cardDir, "gameContext.json" )
	  if err != nil {
	    return Context{}, err
	  }

	  if len( files ) == 0 {
	    return Context{}, errors.New("root/card/gameContext.json isn't exist")
	  }

	  var gameCtx Context
	  err = json.Unmarshal( files[0].Content, &gameCtx )
	  if err != nil {
	    return Context{}, err
	  }
	  return gameCtx, nil
	*/
}

func SaveGameContext(ctx context.Context, gameCtx Context) error {
	data, err := json.Marshal(gameCtx)
	if err != nil {
		return err
	}

	file, err := dbfile.GetFile(ctx, gameContextPosition)
	if err != nil {
		return err
	}

	_, err = dbfile.MakeFile(ctx, file.Position, file.Name, []byte(data), true, "")
	if err != nil {
		return err
	}

	return nil
	/*
	  files, _, err := dbfile.QueryKeys( ctx, 0, "root" )
	  if err != nil {
	    return err
	  }
	  if len( files ) == 0 {
	    return errors.New("root dir isn't exist")
	  }

	  rootDir := files[0].Key

	  files, _, err = dbfile.QueryKeys( ctx, rootDir, "card" )
	  if err != nil {
	    return err
	  }
	  if len( files ) == 0 {
	    return errors.New("card dir isn't exist")
	  }

	  cardDir := files[0].Key

	  data, err := json.Marshal( gameCtx )
	  if err != nil {
	    return err
	  }

	  _, err = dbfile.MakeFile( ctx, cardDir, "gameContext.json", []byte(data), true )
	  if err != nil {
	    return err
	  }

	  return nil
	*/
}

type Result struct {
	Info  interface{}
	Error interface{}
}

func Output(w http.ResponseWriter, info, err interface{}) {
	ret := Result{
		Info:  info,
		Error: err,
	}
	jsonstr, _ := json.Marshal(ret)
	fmt.Fprintf(w, "%s", string(jsonstr))
}
