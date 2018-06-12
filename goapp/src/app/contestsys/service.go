package contestsys

import (
	"lib/tool"
	"net/http"

	"github.com/gorilla/mux"

	"errors"
	"strconv"
	_ "strings"
	"time"

	"appengine"
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

	params := mux.Vars(r)
	owner := params["owner"]

	ctx := appengine.NewContext(r)
	var id string
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		id = CreateContest(&appCtx.ContestSys, pwd, owner)
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
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
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

	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["owner"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		contest, hasContest := appCtx.ContestSys.Contests[contestId]
		if hasContest == false {
			return errors.New("no contest")
		}
		if contest.Owner != peopleId {
			return errors.New("u r not owner")
		}
		if contest.State == ContestStateEnd {
			return errors.New("contest already end")
		}
		/*if contest.State == ContestStateProcessing && time.Now().After(contest.StartTime) {
			return errors.New("already game start")
		}*/
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
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
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
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
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
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
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
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
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

	var duals []Dual
	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
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
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
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
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
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
	params := mux.Vars(r)
	contestId := params["contestId"]
	peopleId := params["peopleId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		err = CtxUpgrade(&appCtx, contestId, peopleId)
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
	err = tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		contest, isExist := appCtx.ContestSys.Contests[contestId]
		if isExist == false {
			return errors.New("contest is not exist")
		}
		if contest.Owner != owner {
			return errors.New("u r not owner")
		}
		people, isPeopleExist := contest.Peoples[peopleId]
		if isPeopleExist == false {
			return errors.New("people is not exist")
		}
		people.Power = power
		contest.Peoples[peopleId] = people
		appCtx.ContestSys.Contests[contestId] = contest
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}
