package contestsys

import (
	"lib/tool"
	"net/http"

	"github.com/gorilla/mux"

	_ "errors"

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
	tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		id = CreateContest(&appCtx.ContestSys, pwd, owner)
		return SaveContext(ctx, appCtx)
	})

	tool.Output(w, id, nil)
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

func Serve_PrepareDual(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	params := mux.Vars(r)
	contestId := params["contestId"]

	ctx := appengine.NewContext(r)
	err := tool.WithTransaction(ctx, 3, func(c appengine.Context) error {
		appCtx, err := LoadContext(ctx)
		if err != nil {
			return err
		}
		err = UpdateDual(&appCtx, contestId)
		if err != nil {
			return err
		}
		/*
			contest, isExist := appCtx.ContestSys.Contests[contestId]
			if isExist == false {
				return errors.New("no contest")
			}
			PrepareDual(&appCtx.DualSys, contest)
			for _, people := range contest.Peoples {
				dual, hasDual := GetDualWithPeople(&appCtx.DualSys, contestId, people.ID)
				if hasDual == false {
					return errors.New("must has pos")
				}
				people.Pos = dual.ID
				contest.Peoples[people.ID] = people
			}
			appCtx.ContestSys.Contests[contestId] = contest
		*/
		return SaveContext(ctx, appCtx)
	})
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}
