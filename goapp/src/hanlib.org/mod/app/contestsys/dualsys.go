package contestsys

import (
	"errors"

	"math/rand"
	"sort"
	"strconv"
	_ "strings"
	_ "time"
)

const (
	DualTypePeople = iota
	DualTypeDuel
)

type Dual struct {
	ID      string
	Name    string
	Type    int
	Left    string
	Right   string
	Power   int
	Contest string
	IsTop   bool
}

type DualSys struct {
	DualSeq int
	Duals   []Dual
}

func NewDualSys() DualSys {
	return DualSys{
		Duals: []Dual{},
	}
}

type ByDualPower []Dual

func (a ByDualPower) Len() int           { return len(a) }
func (a ByDualPower) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByDualPower) Less(i, j int) bool { return a[i].Power < a[j].Power }

const (
	SortTypeDefault = iota
	SortTypeRandom
	SortTypeMix
)

func RemoveDual(dualSys *DualSys, contestId string) {
	// remove old
	for i := len(dualSys.Duals) - 1; i >= 0; i -= 1 {
		if dualSys.Duals[i].Contest == contestId {
			dualSys.Duals = append(dualSys.Duals[:i], dualSys.Duals[i+1:]...)
		}
	}
}

func PrepareDual(dualSys *DualSys, contest Contest, sortType int) error {
	if len(contest.Peoples) < 2 {
		return errors.New("人數小於2人, 不能排賽")
	}

	RemoveDual(dualSys, contest.ID)

	duals := []Dual{}
	// 將玩家排入場次
	for _, p := range contest.Peoples {
		dual := Dual{
			ID:      strconv.Itoa(dualSys.DualSeq),
			Name:    p.ID,
			Type:    DualTypePeople,
			Contest: contest.ID,
			Power:   p.Power,
		}
		dualSys.DualSeq = dualSys.DualSeq + 1
		dualSys.Duals = append(dualSys.Duals, dual)
		duals = append(duals, dual)
	}

	for {
		dualLen := len(duals)
		// 無場次可排位就退出
		if dualLen <= 1 {
			break
		}

		// 記錄要刪除的場次
		removeDuals := []string{}

		switch sortType {
		case SortTypeDefault:
			sort.Sort(ByDualPower(duals))
			break
		case SortTypeRandom:
			// 隨機排位場次
			src := duals
			duals = make([]Dual, len(src))
			perm := rand.Perm(len(src))
			for i, v := range perm {
				duals[v] = src[i]
			}
			break
		case SortTypeMix:
			// 隨機排位場次
			src := duals
			duals = make([]Dual, len(src))
			perm := rand.Perm(len(src))
			// 並記錄最大的種子場次
			maxPowerId := 0
			maxPower := 0
			for i, v := range perm {
				duals[v] = src[i]
				if maxPower < duals[v].Power {
					maxPower = duals[v].Power
					maxPowerId = v
				}
			}
			// 將種子場次移到最後
			duals[len(duals)-1], duals[maxPowerId] = duals[maxPowerId], duals[len(duals)-1]
			break
		}

		isTop := dualLen == 2

		// 依排位新增場次, 每1對場次合成下一個場次, 落單的場次會排在下一輪(種子場次)
		for i, length := 0, len(duals)/2; i < length; i += 1 {
			left, right := duals[i*2], duals[i*2+1]
			dual := Dual{
				ID:      strconv.Itoa(dualSys.DualSeq),
				Name:    "match",
				Type:    DualTypeDuel,
				Left:    left.ID,
				Right:   right.ID,
				Contest: contest.ID,
				Power:   left.Power + right.Power,
				IsTop:   isTop,
			}
			dualSys.DualSeq = dualSys.DualSeq + 1
			dualSys.Duals = append(dualSys.Duals, dual)
			duals = append(duals, dual)

			removeDuals = append(removeDuals, left.ID)
			removeDuals = append(removeDuals, right.ID)
		}

		// 刪除已排位的場次
		for i := len(duals) - 1; i >= 0; i -= 1 {
			for _, removeId := range removeDuals {
				if duals[i].ID == removeId {
					duals = append(duals[:i], duals[i+1:]...)
				}
			}
		}
	}
	return nil
}

func GetStartDualWithPeople(dualSys *DualSys, contestId string, peopleId string) (Dual, bool) {
	for _, dual := range dualSys.Duals {
		if dual.Contest != contestId {
			continue
		}
		if dual.Type != DualTypePeople {
			continue
		}
		if dual.Name == peopleId {
			return dual, true
		}
	}
	return Dual{}, false
}

func GetDualWithPos(dualSys *DualSys, pos string) (Dual, bool) {
	for _, dual := range dualSys.Duals {
		if dual.ID == pos {
			return dual, true
		}
	}
	return Dual{}, false
}

func GetNextDual(dualSys *DualSys, pos string) (Dual, bool) {
	for _, dual := range dualSys.Duals {
		if dual.Left == pos || dual.Right == pos {
			return dual, true
		}
	}
	return Dual{}, false
}

func GetGoalDual(dualSys *DualSys, contestId string) (Dual, bool) {
	for _, dual := range dualSys.Duals {
		if dual.Contest == contestId && dual.IsTop {
			return dual, true
		}
	}
	return Dual{}, false
}
