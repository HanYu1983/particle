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
	Date     [3]time.Time
	DuelTree Tree
	NodeInfo map[string]NodeInfo //注意，要json化的話key一定要是string
	Deleted  bool
}

type DuelContext struct {
	Duels []Duel
}

var (
	ErrDuelNotFound        = errors.New("duel not found")
	ErrNoTarget            = errors.New("no target")
	ErrTargetNotAlready    = errors.New("target not already")
	ErrPeopleAlreadyAdd    = errors.New("people already add")
	ErrPeopleNotFound      = errors.New("people not found")
	ErrPeopleCanNotForward = errors.New("people can not forward")
)

var (
	EmptyPeople = People{}
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

func CreateDuel(dc *DuelContext, name string, startDate time.Time, openDate time.Time, closeDate time.Time) error {
	if GetDuel(dc, &name) != nil {
		return errors.New("duelname exist!")
	}
	duel := Duel{
		Name: name,
	}
	duel.Date[0] = startDate
	duel.Date[1] = openDate
	duel.Date[2] = closeDate
	duel.NodeInfo = map[string]NodeInfo{}
	dc.Duels = append(dc.Duels, duel)
	return nil
}

func DeleteDuel(dc *DuelContext, duelname string) error {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return ErrDuelNotFound
	}
	duel.Deleted = true
	return nil
}

func AddPeople(dc *DuelContext, duelname string, people People) error {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return ErrDuelNotFound
	}
	for _, p := range duel.Peoples {
		if p.Name == people.Name {
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
		position := duel.DuelTree.Nodes[idx]
		duel.Peoples[idx].Position = position
		duel.NodeInfo[position.ToString()] = NodeInfo{Name: duel.Peoples[idx].Name, Winner: map[string]bool{}}
	}
	return nil
}

func AssignWinner(dc *DuelContext, duelname string, position Node, target string, win bool) error {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return ErrDuelNotFound
	}
	duel.NodeInfo[position.ToString()].Winner[target] = win
	return nil
}

const (
	BothDidntAssign = iota
	SomeoneDidntAssign
	WinnerNotMatch
	WinnerIsMatch
)

func CheckWinnerMatch(dc *DuelContext, duelname string, position Node, target Node) (int, error) {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return 0, ErrDuelNotFound
	}
	win1, has1 := duel.NodeInfo[position.ToString()].Winner[duel.NodeInfo[target.ToString()].Name]
	win2, has2 := duel.NodeInfo[target.ToString()].Winner[duel.NodeInfo[position.ToString()].Name]
	if has1 == false && has2 == false {
		return BothDidntAssign, nil
	}
	if has1 == false || has2 == false {
		return SomeoneDidntAssign, nil
	}
	if win1 == win2 {
		return WinnerNotMatch, nil
	}
	return WinnerIsMatch, nil
}

func DuelTargetName(dc *DuelContext, duelname string, position Node) (string, error) {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return "", ErrDuelNotFound
	}
	nodes := NextNodes(duel.DuelTree, position)
	for _, node := range nodes {
		if duel.NodeInfo[node.ToString()].Name == "" {
			return "", ErrTargetNotAlready
		}
	}

	var check int
	var err error
	for _, node := range nodes {
		check, err = CheckWinnerMatch(dc, duelname, position, node)
		if err != nil {
			return "", err
		}
		if check != WinnerIsMatch {
			return duel.NodeInfo[node.ToString()].Name, nil
		}
	}
	return "", ErrNoTarget
}

func GetPeople(dc *DuelContext, duelname string, name string) (People, error) {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return EmptyPeople, ErrDuelNotFound
	}
	for _, people := range duel.Peoples {
		if people.Name == name {
			return people, nil
		}
	}
	return EmptyPeople, ErrPeopleNotFound
}

func PeopleForward(dc *DuelContext, duelname string, winnerName string) error {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return ErrDuelNotFound
	}

	var winnerInDuel *People
	for idx, people := range duel.Peoples {
		if people.Name == winnerName {
			winnerInDuel = &duel.Peoples[idx]
		}
	}
	if winnerInDuel == nil {
		return ErrPeopleNotFound
	}

	fwdNode := ForwardNode(duel.DuelTree, winnerInDuel.Position)
	if fwdNode == NullNode {
		return ErrPeopleCanNotForward
	}

	winnerInDuel.Position = fwdNode
	info := duel.NodeInfo[fwdNode.ToString()]
	info.Name = winnerName
	duel.NodeInfo[fwdNode.ToString()] = info

	return nil
}

func Power(dc *DuelContext, duelname string, position Node) (int, error) {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return 0, ErrDuelNotFound
	}
	if IsTopOfTree(duel.DuelTree, position) == true {
		return 1, nil
	}
	return 0, nil
}

func IsWinner(dc *DuelContext, duelname string, position Node) (bool, error) {
	duel := GetDuel(dc, &duelname)
	if duel == nil {
		return false, ErrDuelNotFound
	}

	for _, win := range duel.NodeInfo[position.ToString()].Winner {
		if win == false {
			return false, nil
		}
	}

	return true, nil
}
