package tool

import (
	"fmt"
	"net/http"

	"google.golang.org/appengine"
)

func Proxy(w http.ResponseWriter, r *http.Request) {
	defer Recover(WriteErrorJson(w))

	ctx := appengine.NewContext(r)

	r.ParseForm()

	Assert(ParameterIsNotExist(r.Form, "url"))

	url := r.Form["url"][0]

	req, err := GetRequest(url, nil)
	Assert(IfError(err))

	res, err := DoRequest(req, ctx)
	Assert(IfError(err))

	body, err := ReadAll(res)
	Assert(IfError(err))

	w.Header().Set("Cache-Control", fmt.Sprintf("max-age=%d, public", 60*60*6))
	fmt.Fprint(w, string(body[:]))
}
