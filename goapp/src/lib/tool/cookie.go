package tool

import (
	"net/http"
	"time"
)

func GetCookie(r *http.Request, key string) (*http.Cookie, error) {
	return r.Cookie(key)
}

// key不能使用中文
func SetCookie(w http.ResponseWriter, key, path, value string, expiration time.Time) {
	cookie := http.Cookie{Name: key, Path: path, Value: value, Expires: expiration}
	http.SetCookie(w, &cookie)
}

func ClearCookie(w http.ResponseWriter, key, path string) {
	cookie := http.Cookie{Name: key, Path: path, MaxAge: -1}
	http.SetCookie(w, &cookie)
}
