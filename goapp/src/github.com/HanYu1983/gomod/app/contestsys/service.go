package contestsys

import (
	"context"
	"net/http"

	"github.com/HanYu1983/gomod/lib/tool"

	"github.com/gorilla/mux"

	"errors"
	"strconv"
	"strings"
	"time"

	"google.golang.org/appengine"
)

func Serve_Context(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)
	appCtx, err := LoadContext(ctx)
	tool.Assert(tool.IfError(err))
	tool.Output(w, appCtx, nil)
}

func Serve_CreateContest(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()
	pwd := r.FormValue("pwd")
	ownerName := r.FormValue("ownerName")

	params := mux.Vars(r)
	owner := params["owner"]

	ctx := appengine.NewContext(r)
	var id string
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		id = CreateContest(&appCtx.ContestSys, pwd, owner)
		contest := appCtx.ContestSys.Contests[id]
		contest.OwnerName = ownerName
		appCtx.ContestSys.Contests[id] = contest
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, id, nil)
}

func Serve_DeleteContest(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["owner"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		err = DeleteContest(&appCtx.ContestSys, contestId, peopleId)
		if err != nil {
			return err
		}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}

func Serve_UpdateContest(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()
	name, hasName := r.Form["name"]
	description, hasDescription := r.Form["description"]
	game, hasGame := r.Form["game"]
	startTime, hasStartTime := r.Form["startTime"]
	pwd, hasPwd := r.Form["pwd"]
	info, hasInfo := r.Form["info"]

	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["owner"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		contest, hasContest := appCtx.ContestSys.Contests[contestId]
		if hasContest == false {
			return errors.New("找不到比賽")
		}
		if contest.Owner != peopleId {
			return errors.New("你不是管理者")
		}
		if contest.State == ContestStateEnd {
			return errors.New("比賽結束前才能修改比賽內容")
		}
		if hasName {
			contest.Name = name[0]
		}
		if hasDescription {
			contest.Description = description[0]
		}
		if hasGame {
			contest.Game = game[0]
		}
		if hasStartTime {
			t, err := strconv.ParseInt(startTime[0], 10, 64)
			if err != nil {
				return err
			}
			contest.StartTime = time.Unix(t/1000, 0)
		}
		if hasPwd {
			contest.Password = pwd[0]
		}
		if hasInfo {
			contest.Info = info[0]
		}
		appCtx.ContestSys.Contests[contestId] = contest
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}

func Serve_UpgradeContestState(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()
	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["owner"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		contest, isExist := appCtx.ContestSys.Contests[contestId]
		if isExist == false {
			return errors.New("找不到比賽")
		}
		if contest.Owner != peopleId {
			return errors.New("你不是管理者")
		}
		if contest.State == ContestStateStart {
			goal, hasGoal := GetGoalDual(&appCtx.DualSys, contestId)
			if hasGoal == false {
				return errors.New("找不到冠軍賽場次. 程式內部錯誤")
			}
			hasTopPeople := false
			for _, p := range contest.Peoples {
				if p.Pos == goal.ID {
					hasTopPeople = true
					break
				}
			}
			if hasTopPeople == false {
				return errors.New("還沒決定冠軍, 無法結束")
			}
		}
		err = UpgradeContest(&appCtx.ContestSys, contestId, peopleId)
		if err != nil {
			return err
		}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}

func Serve_FailEndContest(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()
	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["owner"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		contest, isExist := appCtx.ContestSys.Contests[contestId]
		if isExist == false {
			return errors.New("找不到比賽")
		}
		if contest.Owner != peopleId {
			return errors.New("你不是管理者")
		}
		if contest.State == ContestStateStart {
			goal, hasGoal := GetGoalDual(&appCtx.DualSys, contestId)
			if hasGoal == true {
				hasTopPeople := false
				for _, p := range contest.Peoples {
					if p.Pos == goal.ID {
						hasTopPeople = true
						break
					}
				}
				if hasTopPeople == true {
					return errors.New("已選出冠軍, 無法流局")
				}
			}
		}
		contest.State = ContestStateFailEnd
		appCtx.ContestSys.Contests[contestId] = contest
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}

func Serve_JoinContest(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()
	peopleName := r.FormValue("name")
	pwd := r.FormValue("pwd")

	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["peopleId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}

		err = JoinContest(&appCtx.ContestSys, contestId, peopleId, peopleName, pwd)
		if err != nil {
			return err
		}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Serve_LeaveContest(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["peopleId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		err = LeaveContest(&appCtx.ContestSys, contestId, peopleId)
		if err != nil {
			return err
		}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Serve_PrepareDual(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["peopleId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		err = CtxUpdateDual(&appCtx, contestId, peopleId)
		if err != nil {
			return err
		}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Serve_GetDuals(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	params := mux.Vars(r)
	peopleId := params["peopleId"]

	duals := []Dual{}
	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		duals = CtxGetDualsWithPeople(&appCtx, peopleId)
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, duals, nil)
}

func Serve_ConfirmWinner(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["peopleId"]
	winner := params["winner"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		err = CtxConfirmWinner(&appCtx, contestId, peopleId, winner)
		if err != nil {
			return err
		}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Serve_CancelWinner(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["peopleId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		err = CtxCancelWinner(&appCtx, contestId, peopleId)
		if err != nil {
			return err
		}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Serve_Upgrade(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	r.ParseForm()
	_, hasForce := r.Form["force"]

	params := mux.Vars(r)
	contestId := params["contestId"]
	owner := params["owner"]
	peopleId := params["peopleId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		err = CtxUpgrade(&appCtx, contestId, owner, peopleId, hasForce)
		if err != nil {
			return err
		}
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Serve_UpdatePower(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	params := mux.Vars(r)
	contestId := params["contestId"]
	owner := params["owner"]
	peopleId := params["peopleId"]
	powerStr := params["power"]

	power, err := strconv.Atoi(powerStr)
	tool.Assert(tool.IfError(err))

	ctx := appengine.NewContext(r)
	err = tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		contest, isExist := appCtx.ContestSys.Contests[contestId]
		if isExist == false {
			return errors.New("找不到比賽")
		}
		if contest.Owner != owner {
			return errors.New("你不是管理者")
		}
		if contest.State != ContestStatePublic {
			return errors.New("只有公佈比賽時才能指定種子選手")
		}
		people, isPeopleExist := contest.Peoples[peopleId]
		if isPeopleExist == false {
			return errors.New("找不到玩家")
		}
		people.Power = power
		contest.Peoples[peopleId] = people
		appCtx.ContestSys.Contests[contestId] = contest
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Serve_GetDualInfoWithContestOwner(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	params := mux.Vars(r)
	owner := params["owner"]
	var _ = owner

	duals := []Dual{}
	states := map[string]int{}

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		for _, dual := range appCtx.DualSys.Duals {
			if dual.Type == DualTypePeople {
				continue
			}
			contest, hasContest := appCtx.ContestSys.Contests[dual.Contest]
			if hasContest == false {
				continue
			}
			/*if contest.Owner != owner {
				continue
			}*/
			if contest.State != ContestStateStart {
				continue
			}
			state, _ := GetConfirmState(&appCtx.ConfirmSys, dual, contest.Peoples)

			duals = append(duals, dual)
			states[dual.ID] = state
		}
		return nil
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, map[string]interface{}{
		"Duals":  duals,
		"States": states,
	}, nil)
}

func Serve_LeaveMessage(w http.ResponseWriter, r *http.Request) {
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
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
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

func Serve_DeleteMessage(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	r.ParseForm()
	pwd := r.FormValue("pwd")

	params := mux.Vars(r)
	peopleId := params["peopleId"]
	msgId := params["msgId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		msg, hasMessage := FindMessage(&appCtx.MessageSys, msgId)
		if hasMessage == false {
			return errors.New("沒有這個訊息")
		}
		if msg.People != peopleId {
			return errors.New("你不是擁有者")
		}
		contest, hasContest := appCtx.ContestSys.Contests[msg.Contest]
		if hasContest == false {
			return errors.New("找不到比賽")
		}
		_, isJoinPeople := contest.Peoples[peopleId]
		isPasswordRequire := isJoinPeople == false && strings.Trim(contest.Password, " ") != ""
		if isPasswordRequire && contest.Password != pwd {
			return errors.New("參加碼不正確")
		}
		DeleteMessage(&appCtx.MessageSys, msgId)
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Serve_MakeDualTime(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	r.ParseForm()
	dualTime := r.FormValue("dualTime")

	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["peopleId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c context.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		contest, hasContest := appCtx.ContestSys.Contests[contestId]
		if hasContest == false {
			return errors.New("找不到比賽")
		}
		people, isJoinPeople := contest.Peoples[peopleId]
		if isJoinPeople == false {
			return errors.New("你沒有參賽")
		}
		people.DualTime = dualTime

		contest.Peoples[peopleId] = people
		appCtx.ContestSys.Contests[contestId] = contest
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}
