package contestsys

import (
	"context"
	"encoding/json"

	"github.com/HanYu1983/gomod/lib/db2"

	"errors"
	"time"
)

const (
	contextPath = "root/contestsys/context.json"
)

type Context struct {
	ContestSys ContestSys
	DualSys    DualSys
	ConfirmSys ConfirmSys
	MessageSys MessageSys
}

func NewContext() Context {
	return Context{
		ContestSys: NewContestSys(),
		DualSys:    NewDualSys(),
		ConfirmSys: NewConfirmSys(),
		MessageSys: NewMessageSys(),
	}
}

func LoadContext(ctx context.Context) (Context, error) {
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

func SaveContext(ctx context.Context, appContext Context) error {
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

func CtxRemoveDual(appCtx *Context, contestId string) error {
	contest, isExist := appCtx.ContestSys.Contests[contestId]
	if isExist == false {
		return errors.New("找不到比賽")
	}
	if contest.State != ContestStatePublic {
		return errors.New("只有公佈比賽時才能清除排賽")
	}
	// 先清除舊的位置, 變成未安排狀態
	for _, p := range contest.Peoples {
		p.Pos = ""
		contest.Peoples[p.ID] = p
	}
	// 一並刪除這場比賽的所有場次
	RemoveDual(&appCtx.DualSys, contest.ID)
	// 套用修改
	appCtx.ContestSys.Contests[contestId] = contest
	return nil
}

func CtxUpdateDual(appCtx *Context, contestId string, peopleId string) error {
	contest, isExist := appCtx.ContestSys.Contests[contestId]
	if isExist == false {
		return errors.New("找不到比賽")
	}
	if peopleId != contest.Owner {
		return errors.New("你不是管理者")
	}
	if contest.State != ContestStatePublic {
		return errors.New("只有公佈比賽時才能排賽")
	}
	if time.Now().Before(contest.StartTime) {
		return errors.New("報名截止後才能排賽")
	}
	err := CtxRemoveDual(appCtx, contest.ID)
	if err != nil {
		return err
	}
	err = PrepareDual(&appCtx.DualSys, contest, SortTypeMix)
	if err != nil {
		return err
	}
	for _, people := range contest.Peoples {
		dual, hasDual := GetStartDualWithPeople(&appCtx.DualSys, contestId, people.ID)
		if hasDual == false {
			return errors.New("程式內部錯誤")
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
		return errors.New("找不到比賽")
	}
	if contest.State != ContestStateStart {
		return errors.New("比賽中才能宣告勝利玩家")
	}
	people, isPeopleExist := contest.Peoples[peopleId]
	if isPeopleExist == false {
		return errors.New("找不到玩家")
	}
	nextDual, hasDual := GetNextDual(&appCtx.DualSys, people.Pos)
	if hasDual == false {
		return errors.New("找不到要爭奪的場次")
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
		return errors.New("要爭奪場次玩家還沒到齊")
	}
	ConfirmWinner(&appCtx.ConfirmSys, nextDual.ID, people.ID, winner)
	return nil
}

func CtxCancelWinner(appCtx *Context, contestId string, peopleId string) error {
	contest, isExist := appCtx.ContestSys.Contests[contestId]
	if isExist == false {
		return errors.New("找不到比賽")
	}
	people, isPeopleExist := contest.Peoples[peopleId]
	if isPeopleExist == false {
		return errors.New("找不到玩家")
	}
	nextDual, hasDual := GetNextDual(&appCtx.DualSys, people.Pos)
	if hasDual == false {
		return errors.New("找不到要爭奪的場次")
	}
	RemoveConfirm(&appCtx.ConfirmSys, nextDual.ID)
	return nil
}

func CtxUpgrade(appCtx *Context, contestId string, owner string, peopleId string, force bool) error {
	contest, isExist := appCtx.ContestSys.Contests[contestId]
	if isExist == false {
		return errors.New("找不到比賽")
	}
	people, isPeopleExist := contest.Peoples[peopleId]
	if isPeopleExist == false {
		return errors.New("找不到玩家")
	}
	if people.Lose {
		return errors.New("玩家已經失敗")
	}
	nextDual, hasNextDual := GetNextDual(&appCtx.DualSys, people.Pos)
	if hasNextDual == false {
		return errors.New("找不到要爭奪的場次")
	}
	if force {
		if contest.Owner != owner {
			return errors.New("你不是管理者")
		}
	} else {
		state, winner := GetConfirmState(&appCtx.ConfirmSys, nextDual, contest.Peoples)
		if state != ConfirmStateOk {
			switch state {
			case ConfirmStatePending:
				return errors.New("尚未回報結果")

			case ConfirmStateLoseLeft:
				return errors.New("左方玩家未回報結果")

			case ConfirmStateLoseRight:
				return errors.New("右方玩家未回報結果")

			case ConfirmStateConflict:
				return errors.New("玩家回報結果不致, 請管理員做協調")

			case ConfirmStateUnknown:
				// 內部錯誤
				break
			}
			return errors.New("不能升級")
		}
		if winner != people.ID {
			return errors.New("你不是勝利玩家")
		}
	}
	// 先將左右玩家設為已失敗
	for _, p := range contest.Peoples {
		if p.Pos == nextDual.Left {
			p.Lose = true
			contest.Peoples[p.ID] = p
		}

		if p.Pos == nextDual.Right {
			p.Lose = true
			contest.Peoples[p.ID] = p
		}
	}
	people.Pos = nextDual.ID
	people.Lose = false
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
			if contest.State != ContestStateStart {
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
