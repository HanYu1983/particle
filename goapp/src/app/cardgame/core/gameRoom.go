package core

import (
	"appengine"
	"appengine/datastore"
	"appengine/channel"
	"time"
	"errors"
	"fmt"
)

const (
	RoomStateWaiting = iota
	RoomStatePlaying
	RoomStateClose
)

type Room struct {
	ID                string
	Players           []string
	Roles             []string
	UserACards        []string
	UserBCards        []string
	GameID            string
	Channel           string
	ChannelExpiration time.Time
	State             int
	IsPrivate         bool
	Expiration        time.Time
	Owner             string
}

func NewRoom(id string, owner string) Room {
	return Room{
		ID:         id,
		State:      RoomStateWaiting,
		Expiration: time.Now().Add(time.Second * 30),
		IsPrivate:  true,
		Owner:      owner,
	}
}

func UpdateExpiration(r Room) Room {
	r.Expiration = time.Now().Add(time.Second * 30)
	return r
}

func CreateChannel(ctx appengine.Context, r Room) (Room, error) {
	var err error
	if r.Channel != "" {
		// 如果還沒過期就不必重建
		if r.ChannelExpiration.After(time.Now()) {
			return r, nil
		}
		// 無論前台接不接得到，傳送重建通知
		err = channel.SendJSON(ctx, r.ID, map[string]interface{}{
			"desc":"{roomId}重新建立channel",
			"roomId": r.ID,
		})
		// 不處理這個err
		err = nil
	}
	// 重建
	token, err := channel.Create(ctx, r.ID)
	if err != nil {
		return r, err
	}
	r.Channel = token
	// 2小時後過期
	r.ChannelExpiration = time.Now().Add(time.Hour * 2)
	return r, nil
}

func AddPlayer(r Room, playerId, roleId string) (Room, error) {
	for _, p := range r.Players {
		if p == playerId {
			return r, errors.New(fmt.Sprintf("%v已經加入", playerId))
		}
	}
	r.Players = append(r.Players, playerId)
	r.Roles = append(r.Roles, roleId)
	return r, nil
}

func ChangeRole(r Room, playerId, roleId string) (Room, error) {
	playerIndex := -1
	for i, player := range r.Players {
		if player == playerId {
			playerIndex = i
		}
	}
	if playerIndex == -1 {
		return r, errors.New(fmt.Sprintf("no this player:%v", playerId))
	}
	r.Roles[playerIndex] = roleId
	return r, nil
}

func GetRole(r Room, playerId string) (string, error) {
	playerIndex := -1
	for i, player := range r.Players {
		if player == playerId {
			playerIndex = i
		}
	}
	if playerIndex == -1 {
		return "", errors.New(fmt.Sprintf("no this player:%v", playerId))
	}
	return r.Roles[playerIndex], nil
}

func LoadRoom(ctx appengine.Context, roomId string, group *datastore.Key) (Room, error) {
	key := datastore.NewKey(ctx, "gameRoom", roomId, 0, group)
	var room Room
	var err error
	err = datastore.Get(ctx, key, &room)
	if err != nil {
		return Room{}, err
	}
	return room, nil
}

// 記錄陣面對決
func SaveRoom(ctx appengine.Context, r Room, group *datastore.Key) (error) {
	var err error
	key := datastore.NewKey(ctx, "gameRoom", r.ID, 0, group)
	_, err = datastore.Put(ctx, key, &r)
	if err != nil {
		return err
	}
	return nil
}

func RoomList(ctx appengine.Context, offset, limit int, group *datastore.Key) ([]Room, error) {
	q := datastore.NewQuery("gameRoom").Ancestor(group)
	q = q.Limit(limit).Offset(offset)
	// q = q.Filter("IsPrivate =", false)
	// q = q.Filter("Expiration >", time.Now())
	rooms := []Room{}
	var err error
	_, err = q.GetAll(ctx, &rooms)
	if err != nil {
		return nil, err
	}
	return rooms, nil
}
