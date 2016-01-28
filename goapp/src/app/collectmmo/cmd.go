package collectmmo

import (
	"appengine"
	"appengine/datastore"
	"lib/tool"
)

type User struct {
	Name string
}

const (
	GroupKind = "collectmmo"
	UserKind  = "User"
)

func GroupKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, GroupKind, "han", 0, nil)
}

func CreateUser(ctx appengine.Context, username string) error {
	err := tool.WithTransaction(ctx, 3, func(ctx appengine.Context) error {
		key := datastore.NewKey(ctx, UserKind, username, 0, GroupKey(ctx))
		user := User{}
		_, err := datastore.Put(ctx, key, &user)
		return err
	})
	return err
}

func Users(ctx appengine.Context, username string) ([]User, error) {
	if username != "" {
		key := datastore.NewKey(ctx, UserKind, username, 0, GroupKey(ctx))
		var user User
		err := datastore.Get(ctx, key, &user)
		return []User{user}, err
	} else {
		q := datastore.NewQuery(UserKind).Ancestor(GroupKey(ctx))
		var users []User
		_, err := q.GetAll(ctx, &users)
		return users, err
	}
}
