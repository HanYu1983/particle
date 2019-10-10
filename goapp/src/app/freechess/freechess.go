package freechess

import (
	"app/tool"
	"errors"
	"net/http"
	"strings"
)

func Serve_CreateRoom(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()
	pwd := r.FormValue("pwd")
	txt := r.FormValue("txt")

	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["peopleId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		contest, hasContest := appCtx.ContestSys.Contests[contestId]
		if hasContest == false {
			return errors.New("找不到比賽")
		}
		_, isJoinPeople := contest.Peoples[peopleId]
		isPasswordRequire := isJoinPeople == false && strings.Trim(contest.Password, " ") != ""
		if isPasswordRequire && contest.Password != pwd {
			return errors.New("參加碼不正確")
		}
		NewMessage(&appCtx.MessageSys, peopleId, contestId, txt)
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}
