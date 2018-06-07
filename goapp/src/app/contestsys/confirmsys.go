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
	return ConfirmSys{}
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
	ConfirmStateConflict
	ConfirmStateOk
)

func GetConfirmState(s *ConfirmSys, pos string) int {
	var confirms []Confirm
	for _, c := range s.Confirms {
		if c.Pos == pos {
			confirms = append(confirms, c)
		}
	}
	var length = len(confirms)
	if length <= 1 {
		return ConfirmStatePending
	}
	if confirms[0].Winner != confirms[1].Winner {
		return ConfirmStateConflict
	}
	return ConfirmStateOk
}

func RemoveConfirm(s *ConfirmSys, pos string) {
	for i := len(s.Confirms) - 1; i >= 0; i -= 1 {
		if s.Confirms[i].Pos == pos {
			s.Confirms = append(s.Confirms[:i], s.Confirms[i+1:]...)
		}
	}
}
