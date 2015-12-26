package tool

import (
	"appengine"
	"appengine/datastore"
	"appengine/urlfetch"
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
)

func TemplateWithFile(key string, path string) *template.Template {
	t := template.New(key)
	var err error
	t, err = t.Parse(StringWithFilePath(path))
	if err != nil {
		panic(err.Error())
	}
	return t
}

func ReadAll(res *http.Response) ([]byte, error) {
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	return body, err
}

func GetRequest(url string, data url.Values) (*http.Request, error) {
	urlPath := url
	if data != nil {
		urlPath = fmt.Sprintf("%s?%s", url, data.Encode())
	}
	r, err := http.NewRequest("GET", urlPath, nil)
	if err != nil {
		return nil, err
	}
	return r, nil
}

func PostRequest(url string, data url.Values) (*http.Request, error) {
	databytes := data.Encode()
	r, err := http.NewRequest("POST", url, bytes.NewBufferString(databytes))
	if err != nil {
		return nil, err
	}
	r.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	r.Header.Add("Content-Length", strconv.Itoa(len(databytes)))
	return r, nil
}

func DoRequest(r *http.Request, ctx appengine.Context) (*http.Response, error) {
	client := urlfetch.Client(ctx)
	return client.Do(r)
}

func Byte2Json(data []byte) (jsonobj map[string]interface{}, err error) {
	var ret interface{}
	err = json.Unmarshal(data, &ret)
	if err == nil {
		jsonobj = ret.(map[string]interface{})
	}
	return
}

func IdentifyError(err interface{}) error {
	switch err.(type) {
	case string:
		return errors.New(err.(string))
	case error:
		return err.(error)
	default:
		return errors.New(fmt.Sprintf("%s", err))
	}
}

func Recover(do func(err error)) {
	if x := recover(); x != nil {
		do(IdentifyError(x))
	}
}

func WriteErrorJson(w http.ResponseWriter) func(err error) {
	return func(err error) {
		w.Header().Set("Content-Type", "application/json; charset=utf8")
		fmt.Fprintf(w, "{\"error\": \"%s\"}", err.Error())
	}
}

func ReadAjaxPost(r *http.Request) (url.Values, error) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return nil, err
	}
	u, err := url.Parse("?" + string(body))
	if err != nil {
		return nil, err
	}
	return u.Query(), nil
}

func Assert(fn func() (bool, string)) {
	if hasError, msg := fn(); hasError {
		panic(msg)
	}
}

func IfError(err error) func() (bool, string) {
	return func() (bool, string) {
		if err != nil {
			return true, err.Error()
		} else {
			return false, ""
		}
	}
}

func ParameterIsNotExist(v url.Values, key string) func() (bool, string) {
	return func() (bool, string) {
		if len(v[key]) == 0 {
			return true, fmt.Sprintf("no parameter [%s]", key)
		} else {
			return false, ""
		}
	}
}

func AuthFB(ctx appengine.Context, fbid string, token string) (bool, error) {
	param := url.Values{}
	param.Set("access_token", token)
	r, err := GetRequest("https://graph.facebook.com/"+fbid, param)
	if err != nil {
		return false, err
	}
	res, err := DoRequest(r, ctx)
	if err != nil {
		return false, err
	}
	body, err := ReadAll(res)
	if err != nil {
		return false, err
	}
	json, err := Byte2Json(body)
	if err != nil {
		return false, err
	}
	if err, exist := json["error"]; exist {
		return false, errors.New(err.(map[string]interface{})["message"].(string))
	}
	isMatchId := json["id"].(string) == fbid
	if isMatchId == false {
		return false, errors.New("id can not match")
	}
	return true, nil
}

func AssertFBIDIsInvalid(ctx appengine.Context, fbid, accessToken string) func() (bool, string) {
	return func() (bool, string) {
		_, err := AuthFB(ctx, fbid, accessToken)
		if err != nil {
			return true, err.Error()
		} else {
			return false, ""
		}
	}
}

func Output(w http.ResponseWriter, info, err interface{}) {
	w.Header().Set("Content-Type", "application/json; charset=utf8")
	ret := map[string]interface{}{
		"Info":  info,
		"Error": err,
	}
	jsonstr, _ := json.Marshal(ret)
	fmt.Fprintf(w, "%s", string(jsonstr))
}

func WithTransaction(ctx appengine.Context, retry int, fn func(c appengine.Context) error) error {
	var err error
	var times int
	for times < retry {
		err = datastore.RunInTransaction(ctx, fn, nil)
		if err == datastore.ErrConcurrentTransaction {
			// redo RunTransaction

		} else {
			break

		}
		times += 1
	}
	return err
}
