package duelsys

import (
	"errors"
	"time"
)

type People struct {
	Name     string
	Position Node
}

type Duel struct {
	Name     string
	Peoples  []People
	Date     [2]time.Time
	DuelTree Tree
	NodeInfo map[Node]NodeInfo
}

type DuelContext struct {
	Duels []Duel
}

var (
	ErrDuelNotFound     = errors.New("duel not found")
	ErrNoTarget         = errors.New("no target")
	ErrTargetNotAlready = errors.New("target not already")
	ErrPeopleAlreadyAdd = errors.New("people already add")
)

func GetDuel(dc *DuelContext, name *string) *Duel {
	for idx, duel := range dc.Duels {
		if duel.Name == *name {
			// 不能這樣寫，會回傳複製品的地址
			// return &duel
			return &dc.Duels[idx]
		}
	}
	return nil
}

func CreateDuel(dc *DuelContext, name string, openDate time.Time, closeDate time.Time) error {
	if GetDuel(dc, &name) != nil {
		return errors.New("duelname exist!")
	}
	duel := Duel{
		Name: name,
	}
	duel.Date[0] = openDate
	duel.Date[1] = closeDate
	dc.Duels = append(dc.Duels, duel)
	return nil
}

func AddPeople(dc *DuelContext, duelname string, people People) error {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return ErrDuelNotFound
	}
	for _, p := range duel.Peoples {
		if p == people {
			return ErrPeopleAlreadyAdd
		}
	}
	duel.Peoples = append(duel.Peoples, people)
	StartDuel(dc, duelname)
	return nil
}

func StartDuel(dc *DuelContext, duelname string) error {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return ErrDuelNotFound
	}
	duel.DuelTree = CreateDuelTree(len(duel.Peoples))
	for idx, _ := range duel.Peoples {
		duel.Peoples[idx].Position = duel.DuelTree.Nodes[idx]
	}
	return nil
}

func AssignWinner(dc *DuelContext, duelname string, position Node, target string, win bool) error {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return ErrDuelNotFound
	}
	duel.NodeInfo[position].Winner[target] = win
	return nil
}

func CheckWinnerMatch(dc *DuelContext, duelname string, position Node, target Node) (bool, error) {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return false, ErrDuelNotFound
	}
	win1, has1 := duel.NodeInfo[position].Winner[duel.NodeInfo[target].Name]
	win2, has2 := duel.NodeInfo[target].Winner[duel.NodeInfo[position].Name]
	if has1 && has2 && (win1 != win2) {
		return true, nil
	}
	return false, nil
}

func DuelTarget(dc *DuelContext, duelname string, position Node) (string, error) {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return "", ErrDuelNotFound
	}
	nodes := NextNodes(duel.DuelTree, position)
	for _, node := range nodes {
		if duel.NodeInfo[node].Name == "" {
			return "", ErrTargetNotAlready
		}
	}

	var checkOk bool
	var err error
	for _, node := range nodes {
		checkOk, err = CheckWinnerMatch(dc, duelname, position, node)
		if err != nil {
			return "", err
		}
		if checkOk == false {
			return duel.NodeInfo[node].Name, nil
		}
	}
	return "", ErrNoTarget
}
