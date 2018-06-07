package contestsys

import (
	"encoding/json"
	"lib/db2"

	"appengine"

	"errors"
)

const (
	contextPath = "root/contestsys/context.json"
)

type Context struct {
	ContestSys ContestSys
	DualSys    DualSys
	ConfirmSys ConfirmSys
}

func NewContext() Context {
	return Context{
		ContestSys: NewContestSys(),
		DualSys:    NewDualSys(),
		ConfirmSys: NewConfirmSys(),
	}
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

	err = db2.WriteFileWithoutTransaction(ctx, contextPath, code, "contestsys", true)
	if err != nil {
		return err
	}

	return nil
}

func CtxUpdateDual(appCtx *Context, contestId string) error {
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
		nextDual, hasDual := GetNextDual(&appCtx.DualSys, dual.ID)
		if hasDual == false {
			return errors.New("must has nextDual pos")
		}
		people.Pos = nextDual.ID
		contest.Peoples[people.ID] = people
	}
	appCtx.ContestSys.Contests[contestId] = contest
	return nil
}

func CtxConfirmWinner(appCtx *Context, contestId string, peopleId string, winner string) error {
	contest, isExist := appCtx.ContestSys.Contests[contestId]
	if isExist == false {
		return errors.New("no contest")
	}
	people, isPeopleExist := contest.Peoples[peopleId]
	if isPeopleExist == false {
		return errors.New("no people")
	}
	ConfirmWinner(&appCtx.ConfirmSys, people.Pos, people.ID, winner)
	return nil
}

func CtxUpgrade(appCtx *Context, contestId string, peopleId string) error {
	contest, isExist := appCtx.ContestSys.Contests[contestId]
	if isExist == false {
		return errors.New("no contest")
	}
	people, isPeopleExist := contest.Peoples[peopleId]
	if isPeopleExist == false {
		return errors.New("no people")
	}
	pos := people.Pos
	nextDual, hasNextDual := GetNextDual(&appCtx.DualSys, pos)
	if hasNextDual == false {
		return errors.New("no next dual")
	}
	state := GetConfirmState(&appCtx.ConfirmSys, pos)
	if state != ConfirmStateOk {
		return errors.New("can not upgrade")
	}
	people.Pos = nextDual.ID
	contest.Peoples[peopleId] = people
	appCtx.ContestSys.Contests[contestId] = contest

	RemoveConfirm(&appCtx.ConfirmSys, pos)
	return nil
}
