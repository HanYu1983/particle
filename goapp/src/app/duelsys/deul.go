package duelsys

import (
	"errors"
	"time"
)

type People struct {
	Name string
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
	ErrAlreadyChecked   = errors.New("already checked")
	ErrTargetNotAlready = errors.New("target not already")
)

func GetDuel(dc *DuelContext, name *string) *Duel {
	for _, duel := range dc.Duels {
		if duel.Name == *name {
			return &duel
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
	duel.Peoples = append(duel.Peoples, people)
	return nil
}

func AssignWinner(dc *DuelContext, duelname string, position Node, target string, win bool) error {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return ErrDuelNotFound
	}
	duel.NodeInfo[position].Winner[target] = true
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
	return "", ErrAlreadyChecked
}
