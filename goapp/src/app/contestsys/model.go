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

func CtxUpdateDual(appCtx *Context, contestId string, peopleId string) error {
	contest, isExist := appCtx.ContestSys.Contests[contestId]
	if isExist == false {
		return errors.New("no contest")
	}
	if peopleId != contest.Owner {
		return errors.New("u r not owner")
	}
	PrepareDual(&appCtx.DualSys, contest)
	for _, people := range contest.Peoples {
		dual, hasDual := GetStartDualWithPeople(&appCtx.DualSys, contestId, people.ID)
		if hasDual == false {
			return errors.New("must has pos")
		}
		people.Pos = dual.ID
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
	nextDual, hasDual := GetNextDual(&appCtx.DualSys, people.Pos)
	if hasDual == false {
		return errors.New("must has nextDual pos")
	}
	ConfirmWinner(&appCtx.ConfirmSys, nextDual.ID, people.ID, winner)
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

func CtxGetDualsWithPeople(appCtx *Context, peopleId string) []Dual {
	duals := []Dual{}
	for _, contest := range appCtx.ContestSys.Contests {
		for _, people := range contest.Peoples {
			if people.ID != peopleId {
				continue
			}
			nextDual, hasNext := GetNextDual(&appCtx.DualSys, people.Pos)
			if hasNext == false {
				continue
			}
			for _, dual := range appCtx.DualSys.Duals {
				if dual.Contest == contest.ID && dual.ID == nextDual.ID {
					duals = append(duals, nextDual)
				}
			}
		}
	}
	return duals
}
