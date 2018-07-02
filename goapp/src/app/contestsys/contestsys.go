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
	Pos        string // 場次
	Lose       bool   // 是否已輸場, 只要為真就沒有變回假的可能. 用來判斷是否場次已比完
	Power      int    // 種子權重
	CreateTime time.Time
	DualTime   string
}

const (
	ContestStatePending = iota
	ContestStatePublic
	ContestStateStart
	ContestStateEnd
	ContestStateFailEnd
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
	OwnerName   string
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
		StartTime:  time.Now().AddDate(0, 0, 7),
	}
	model.ContestSeq = model.ContestSeq + 1
	model.Contests[contest.ID] = contest
	return contest.ID
}

func DeleteContest(model *ContestSys, contestId string, peopleId string) error {
	contest, isExist := model.Contests[contestId]
	if isExist == false {
		return errors.New("找不到比賽")
	}
	if contest.Owner != peopleId {
		return errors.New("你不是管理者")
	}
	if contest.State != ContestStatePending {
		return errors.New("只有草搞能刪除")
	}
	delete(model.Contests, contestId)
	return nil
}

func UpgradeContest(model *ContestSys, contestId string, peopleId string) error {
	contest, isExist := model.Contests[contestId]
	if isExist == false {
		return errors.New("找不到比賽")
	}
	if contest.Owner != peopleId {
		return errors.New("你不是管理者")
	}
	switch contest.State {
	case ContestStatePending:
		if strings.Trim(contest.Game, " ") == "" {
			return errors.New("沒有定義遊戲")
		}
		contest.State = ContestStatePublic
		break
	case ContestStatePublic:
		if len(contest.Peoples) == 0 {
			return errors.New("沒有任何人參賽")
		}
		for _, people := range contest.Peoples {
			if people.Pos == "" {
				return errors.New("玩家還沒排賽")
			}
		}
		contest.State = ContestStateStart
		break
	case ContestStateStart:
		contest.State = ContestStateEnd
		break
	case ContestStateEnd:
		return errors.New("遊戲已結束")
	}
	model.Contests[contestId] = contest
	return nil
}

func LeaveContest(model *ContestSys, contestId string, id string) error {
	contest, isExist := model.Contests[contestId]
	if isExist == false {
		return errors.New("找不到比賽")
	}
	if contest.State == ContestStatePublic {
		if time.Now().After(contest.StartTime) {
			return errors.New("報名已截止, 不能退出比賽. 請自行在場次中宣告失敗")
		}
	}
	if contest.State >= ContestStateStart {
		return errors.New("比賽已經開始了, 不能退出比賽. 請自行在場次中宣告失敗")
	}
	delete(contest.Peoples, id)
	model.Contests[contestId] = contest
	return nil
}

// id is fbid
func JoinContest(model *ContestSys, contestId string, id string, name string, password string) error {
	contest, isExist := model.Contests[contestId]
	if contest.State != ContestStatePublic {
		return errors.New("只有公佈才能加入")
	}
	if time.Now().After(contest.StartTime) {
		return errors.New("報名已截止")
	}
	if isExist == false {
		return errors.New("找不到比賽")
	}
	_, isAlreadyJoin := contest.Peoples[id]
	if isAlreadyJoin {
		return errors.New("玩家已經加入")
	}
	isPasswordRequire := strings.Trim(contest.Password, " ") != ""
	if isPasswordRequire && contest.Password != password {
		return errors.New("參加碼不正確")
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
		return People{}, errors.New("找不到比賽")
	}
	people, isAlreadyJoin := contest.Peoples[id]
	if isAlreadyJoin {
		return people, nil
	}
	return People{}, errors.New("找不到玩家")
}
