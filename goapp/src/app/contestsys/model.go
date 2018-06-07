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
}

func NewContext() Context {
	return Context{
		ContestSys: NewContestSys(),
		DualSys:    NewDualSys(),
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

func UpdateDual(appCtx *Context, contestId string) error {
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
	return nil
}
