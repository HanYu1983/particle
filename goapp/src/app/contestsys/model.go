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
	if contest.State != ContestStatePublic {
		return errors.New("state not in ContestStatePublic")
	}
	PrepareDual(&appCtx.DualSys, contest, SortTypeMix)
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
	if contest.State != ContestStateStart {
		return errors.New("contest state not in ContestStateStart")
	}
	people, isPeopleExist := contest.Peoples[peopleId]
	if isPeopleExist == false {
		return errors.New("no people")
	}
	nextDual, hasDual := GetNextDual(&appCtx.DualSys, people.Pos)
	if hasDual == false {
		return errors.New("must has nextDual pos")
	}
	leftPeople, rightPeople := "", ""
	for _, people := range contest.Peoples {
		if people.Pos == nextDual.Left {
			leftPeople = people.ID
		}
		if people.Pos == nextDual.Right {
			rightPeople = people.ID
		}
	}
	if leftPeople == "" || rightPeople == "" {
		return errors.New("dual not start")
	}
	ConfirmWinner(&appCtx.ConfirmSys, nextDual.ID, people.ID, winner)
	return nil
}

func CtxCancelWinner(appCtx *Context, contestId string, peopleId string) error {
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
	RemoveConfirm(&appCtx.ConfirmSys, nextDual.ID)
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
	nextDual, hasNextDual := GetNextDual(&appCtx.DualSys, people.Pos)
	if hasNextDual == false {
		return errors.New("no next dual")
	}
	state := GetConfirmState(&appCtx.ConfirmSys, nextDual.ID)
	if state != ConfirmStateOk {
		return errors.New("can not upgrade")
	}
	people.Pos = nextDual.ID
	contest.Peoples[peopleId] = people
	appCtx.ContestSys.Contests[contestId] = contest

	RemoveConfirm(&appCtx.ConfirmSys, nextDual.ID)
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

func CtxGetConflictDual(appCtx *Context) []Dual {
	duals := []Dual{}
	for _, contest := range appCtx.ContestSys.Contests {
		if contest.State != ContestStateStart {
			continue
		}
		for _, dual := range appCtx.DualSys.Duals {
			if dual.Contest != contest.ID {
				continue
			}
			state := GetConfirmState(&appCtx.ConfirmSys, dual.ID)
			if state != ConfirmStateConflict {
				continue
			}
			duals = append(duals, dual)
		}
	}
	return duals
}
