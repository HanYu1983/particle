package contestsys

import (
	"errors"
	"strconv"
	"strings"
	"time"
)

type People struct {
	ID         string
	Name       string
	Pos        string
	CreateTime time.Time
}

const (
	ContestStateIdle = iota
	ContestStateProcessing
	ContestStateFinished
)

type Contest struct {
	ID         string
	Password   string
	Peoples    map[string]People
	CreateTime time.Time
	State      int
	Owner      string
}

type ContestSys struct {
	ContestSeq int
	Contests   map[string]Contest
}

func NewContestSys() ContestSys {
	return ContestSys{
		Contests: map[string]Contest{},
	}
}

// owner is fbid
func CreateContest(model *ContestSys, password string, owner string) string {
	contest := Contest{
		ID:         strconv.Itoa(model.ContestSeq),
		Password:   password,
		Peoples:    map[string]People{},
		CreateTime: time.Now(),
		State:      ContestStateIdle,
		Owner:      owner,
	}
	model.ContestSeq = model.ContestSeq + 1
	model.Contests[contest.ID] = contest
	return contest.ID
}

func LeaveContest(model *ContestSys, contestId string, id string) error {
	return nil
}

// id is fbid
func JoinContest(model *ContestSys, contestId string, id string, name string, password string) error {
	contest, isExist := model.Contests[contestId]
	if isExist == false {
		return errors.New("contest is not exist")
	}
	_, isAlreadyJoin := contest.Peoples[id]
	if isAlreadyJoin {
		return errors.New("isAlreadyJoin")
	}
	isPasswordRequire := strings.Trim(contest.Password, " ") != ""
	if isPasswordRequire && contest.Password != password {
		return errors.New("password not correct")
	}
	people := People{
		ID:         id,
		Name:       name,
		CreateTime: time.Now(),
	}
	contest.Peoples[people.ID] = people
	model.Contests[contestId] = contest
	return nil
}

func GetPeople(model *ContestSys, contestId string, id string) (People, error) {
	contest, isExist := model.Contests[contestId]
	if isExist == false {
		return People{}, errors.New("contest is not exist")
	}
	people, isAlreadyJoin := contest.Peoples[id]
	if isAlreadyJoin {
		return people, nil
	}
	return People{}, errors.New("didn't join")
}
