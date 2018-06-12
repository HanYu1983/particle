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
	Power      int
	CreateTime time.Time
}

const (
	ContestStatePending = iota
	ContestStatePublic
	ContestStateStart
	ContestStateEnd
)

type Contest struct {
	ID          string
	Password    string
	Game        string
	Info        string
	Name        string
	Description string
	Peoples     map[string]People
	State       int
	Owner       string
	CreateTime  time.Time
	StartTime   time.Time
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
		State:      ContestStatePending,
		Owner:      owner,
	}
	model.ContestSeq = model.ContestSeq + 1
	model.Contests[contest.ID] = contest
	return contest.ID
}

func DeleteContest(model *ContestSys, contestId string, peopleId string) error {
	contest, isExist := model.Contests[contestId]
	if isExist == false {
		return errors.New("contest is not exist")
	}
	if contest.Owner != peopleId {
		return errors.New("u r not owner")
	}
	if contest.State != ContestStatePending {
		return errors.New("contest can not remove")
	}
	delete(model.Contests, contestId)
	return nil
}

func UpgradeContest(model *ContestSys, contestId string, peopleId string) error {
	contest, isExist := model.Contests[contestId]
	if isExist == false {
		return errors.New("contest is not exist")
	}
	if contest.Owner != peopleId {
		return errors.New("u r not owner")
	}
	switch contest.State {
	case ContestStatePending:
		if strings.Trim(contest.Game, " ") == "" {
			return errors.New("沒有定義遊戲")
		}
		contest.State = ContestStatePublic
		break
	case ContestStatePublic:
		contest.State = ContestStateStart
		break
	case ContestStateStart:
		contest.State = ContestStateEnd
		break
	}
	model.Contests[contestId] = contest
	return nil
}

func LeaveContest(model *ContestSys, contestId string, id string) error {
	contest, isExist := model.Contests[contestId]
	if isExist == false {
		return errors.New("contest is not exist")
	}
	if time.Now().Before(contest.StartTime) {
		return errors.New("game already start")
	}
	delete(contest.Peoples, id)
	model.Contests[contestId] = contest
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
	if contest.State != ContestStatePublic {
		return errors.New("contest not ready")
	}
	if time.Now().After(contest.StartTime) {
		return errors.New("game already start")
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
