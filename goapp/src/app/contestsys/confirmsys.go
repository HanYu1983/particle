package contestsys

import (
	_ "errors"
)

type Confirm struct {
	Pos    string
	People string
	Winner string
}

type ConfirmSys struct {
	Confirms []Confirm
}

func NewConfirmSys() ConfirmSys {
	return ConfirmSys{
		Confirms: []Confirm{},
	}
}

func ConfirmWinner(s *ConfirmSys, pos string, people string, winner string) {
	// remove old
	for i, c := range s.Confirms {
		if c.Pos == pos && c.People == people {
			s.Confirms = append(s.Confirms[:i], s.Confirms[i+1:]...)
			break
		}
	}
	c := Confirm{
		Pos:    pos,
		People: people,
		Winner: winner,
	}
	s.Confirms = append(s.Confirms, c)
}

const (
	ConfirmStatePending = iota
	ConfirmStateLoseLeft
	ConfirmStateLoseRight
	ConfirmStateConflict
	ConfirmStateOk
	ConfirmStateUnknown
)

func GetConfirmState(s *ConfirmSys, dual Dual, peoples map[string]People) (int, string) {
	var confirms []Confirm
	for _, c := range s.Confirms {
		if c.Pos == dual.ID {
			confirms = append(confirms, c)
		}
	}
	var length = len(confirms)
	if length == 0 {
		return ConfirmStatePending, ""
	}
	if length == 1 {
		first := confirms[0]
		peopel, hasPeople := peoples[first.People]
		if hasPeople == false {
			return ConfirmStateUnknown, ""
		}

		if peopel.Pos == dual.Left {
			return ConfirmStateLoseRight, ""
		}

		if peopel.Pos == dual.Right {
			return ConfirmStateLoseLeft, ""
		}

		return ConfirmStateUnknown, ""
	}
	if confirms[0].Winner != confirms[1].Winner {
		return ConfirmStateConflict, ""
	}
	return ConfirmStateOk, confirms[0].Winner
}

func RemoveConfirm(s *ConfirmSys, pos string) {
	for i := len(s.Confirms) - 1; i >= 0; i -= 1 {
		if s.Confirms[i].Pos == pos {
			s.Confirms = append(s.Confirms[:i], s.Confirms[i+1:]...)
		}
	}
}
