package contestsys

import (
	_ "errors"
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
}

type DualSys struct {
	DualSeq int
	Duals   []Dual
}

func NewDualSys() DualSys {
	return DualSys{}
}

type ByDualPower []Dual

func (a ByDualPower) Len() int           { return len(a) }
func (a ByDualPower) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByDualPower) Less(i, j int) bool { return a[i].Power < a[j].Power }

func PrepareDual(dualSys *DualSys, contest Contest) {
	// remove old
	for i := len(dualSys.Duals) - 1; i >= 0; i -= 1 {
		if dualSys.Duals[i].Contest == contest.ID {
			dualSys.Duals = append(dualSys.Duals[:i], dualSys.Duals[i+1:]...)
		}
	}

	duals := []Dual{}

	for _, p := range contest.Peoples {
		dual := Dual{
			ID:      strconv.Itoa(dualSys.DualSeq),
			Name:    p.ID,
			Type:    DualTypePeople,
			Contest: contest.ID,
		}
		dualSys.DualSeq = dualSys.DualSeq + 1
		dualSys.Duals = append(dualSys.Duals, dual)
		duals = append(duals, dual)
	}

	for {
		dualLen := len(duals)
		if dualLen <= 1 {
			break
		}

		removeDuals := []string{}
		sort.Sort(ByDualPower(duals))

		for i, length := 0, len(duals)/2; i < length; i += 1 {
			left, right := duals[i*2].ID, duals[i*2+1].ID
			dual := Dual{
				ID:      strconv.Itoa(dualSys.DualSeq),
				Name:    "match",
				Type:    DualTypeDuel,
				Left:    left,
				Right:   right,
				Contest: contest.ID,
			}
			dualSys.DualSeq = dualSys.DualSeq + 1
			dualSys.Duals = append(dualSys.Duals, dual)
			duals = append(duals, dual)

			removeDuals = append(removeDuals, left)
			removeDuals = append(removeDuals, right)
		}

		for i := len(duals) - 1; i >= 0; i -= 1 {
			for _, removeId := range removeDuals {
				if duals[i].ID == removeId {
					duals = append(duals[:i], duals[i+1:]...)
				}
			}
		}
	}
}

func GetDualWithPeople(dualSys *DualSys, contestId string, peopleId string) (Dual, bool) {
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

func GetDualWithPos(dualSys *DualSys, contestId string, pos string) (Dual, bool) {
	for _, dual := range dualSys.Duals {
		if dual.Contest != contestId {
			continue
		}
		if dual.ID == pos {
			return dual, true
		}
	}
	return Dual{}, false
}

func GetNextDual(dualSys *DualSys, contestId string, pos string) (Dual, bool) {
	for _, dual := range dualSys.Duals {
		if dual.Contest != contestId {
			continue
		}
		if dual.Left == pos || dual.Right == pos {
			return dual, true
		}
	}
	return Dual{}, false
}
