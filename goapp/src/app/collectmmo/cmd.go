// 沒有在使用，可刪
package collectmmo

/*
import (
	"appengine"
	"appengine/datastore"
	"errors"
	"lib/tool"
	"net/http"
	"time"
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

// username為fbid
func UserLogin(ctx appengine.Context, w http.ResponseWriter, r *http.Request, username string) error {
	err := tool.WithTransaction(ctx, 3, func(ctx appengine.Context) error {
		key := datastore.NewKey(ctx, UserKind, username, 0, GroupKey(ctx))
		user := User{}
		err := datastore.Get(ctx, key, &user)
		if err == datastore.ErrNoSuchEntity {
			_, err = datastore.Put(ctx, key, &user)
		}
		duration, _ := time.ParseDuration("6h")
		tool.SetCookie(w, "user", "collectmmo/", username, time.Now().Add(duration))
		return err
	})
	return err
}

func Users(ctx appengine.Context, w http.ResponseWriter, r *http.Request, username string) ([]User, error) {
	_, err := tool.GetCookie(r, "user")
	if err == http.ErrNoCookie {
		return nil, errors.New("you are not login")
	} else if err != nil {
		return nil, err
	}
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
*/
