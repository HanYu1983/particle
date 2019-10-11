package auth

import (
	"net/http"
	"net/url"

	"github.com/HanYu1983/gomod/lib/abstract"
	dbfile "github.com/HanYu1983/gomod/lib/db/file"
	"github.com/HanYu1983/gomod/lib/db2"
	. "github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
)

type User struct {
	Key  string
	Name string
}

func (u User) GetID() string {
	return u.Key
}

func (u User) HasPermission(file interface{}) bool {
	if u.Key == "admin" {
		return true
	}
	switch f := file.(type) {
	case db2.DBFile:
		if f.Owner == "" {
			return true
		}
		return f.Owner == u.Key
	case dbfile.DBFile:
		if f.Owner == "" {
			return true
		}
		return f.Owner == u.Key
	}
	return false
}

/*
func (u User) HasPermission(file dbfile.DBFile) bool {
	if u.Key == "admin" {
		return true
	}
	if file.Owner == "" {
		return true
	}
	return u.Key == file.Owner
}

func (u User) HasPermission2(file db2.DBFile) bool {
	if u.Key == "admin" {
		return true
	}
	if file.Owner == "" {
		return true
	}
	return u.Key == file.Owner
}
*/

type BindUserFunc func(user abstract.IUser) http.HandlerFunc

func WrapFBAuth(handler BindUserFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		defer Recover(func(err error) {
			Output(w, nil, err.Error())
		})

		ctx := appengine.NewContext(r)

		var form url.Values

		r.ParseForm()
		if r.Method == "POST" {
			form = r.PostForm

		} else {
			form = r.Form

		}

		Assert(ParameterIsNotExist(form, "FBID"))
		Assert(ParameterIsNotExist(form, "AccessToken"))

		fbid := form["FBID"][0]
		accessToken := form["AccessToken"][0]

		Assert(AssertFBIDIsInvalid(ctx, fbid, accessToken))

		user := User{fbid, ""}
		handler(user)(w, r)
	}
}
