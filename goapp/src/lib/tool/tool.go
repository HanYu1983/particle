package tool

import (
	"bytes"
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"

	"google.golang.org/appengine/datastore"
	"google.golang.org/appengine/urlfetch"
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
	if data == nil {
		r, err := http.NewRequest("POST", url, nil)
		if err != nil {
			return nil, err
		}
		return r, nil
	}
	databytes := data.Encode()
	r, err := http.NewRequest("POST", url, bytes.NewBufferString(databytes))
	if err != nil {
		return nil, err
	}
	r.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	r.Header.Add("Content-Length", strconv.Itoa(len(databytes)))
	return r, nil
}

func DoRequest(r *http.Request, ctx context.Context) (*http.Response, error) {
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

func AssertParametersNotMatch(cfg map[string]string, form url.Values) {
	for k, v := range cfg {
		k2 := strings.Replace(k, "?", "", 1)
		k2 = strings.Replace(k2, "*", "", 1)
		k2 = strings.Replace(k2, "+", "", 1)

		a := strings.Index(k, "?")
		if a != -1 {
			if len(form[k2]) > 1 {
				panic(fmt.Sprintf("%s has more then one", k2))
			}
		}
		b := strings.Index(k, "+")
		if b != -1 {
			if len(form[k2]) == 0 {
				panic(fmt.Sprintf("%s not exist", k2))
			}
		}
		c := strings.Index(k, "*")
		if c != -1 {
			// ignore
		}

		if a+b+c == -3 {
			if len(form[k2]) == 0 {
				panic(fmt.Sprintf("%s not exits", k2))
			}
		}
		if len(form[k2]) > 0 {
			// check type
			switch v {
			case "bool":
				for _, str := range form[k2] {
					_, err := strconv.ParseBool(str)
					if err != nil {
						panic(fmt.Sprintf("%v is not boolean", k2))
					}
				}
				break
			case "int":
				for _, str := range form[k2] {
					_, err := strconv.ParseInt(str, 10, 32)
					if err != nil {
						panic(fmt.Sprintf("%v is not int", k2))
					}
				}
				break
			case "int64":
				for _, str := range form[k2] {
					_, err := strconv.ParseInt(str, 10, 64)
					if err != nil {
						panic(fmt.Sprintf("%v is not int64", k2))
					}
				}
				break
			case "stime":
				for _, str := range form[k2] {
					_, err := time.Parse("2006-Jan-02", str)
					if err != nil {
						panic(fmt.Sprintf("%v is not time", k2))
					}
				}
				break
			}
		}
	}
}

func AuthFB(ctx context.Context, fbid string, token string) (bool, error) {
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

func AssertFBIDIsInvalid(ctx context.Context, fbid, accessToken string) func() (bool, string) {
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
	jsonstr, err := json.Marshal(ret)
	if err != nil {
		fmt.Fprintf(w, "%s", err)
	} else {
		fmt.Fprintf(w, "%s", string(jsonstr))
	}

}

func WithTransaction(ctx context.Context, retry int, fn func(c context.Context) error) error {
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

func Transact(db *sql.DB, txFunc func(*sql.Tx) error) (err error) {
	tx, err := db.Begin()
	if err != nil {
		return err
	}
	defer func() {
		if p := recover(); p != nil {
			switch p := p.(type) {
			case error:
				err = p
			default:
				err = fmt.Errorf("%s", p)
			}
		}
		if err != nil {
			tx.Rollback()
			return
		}
		err = tx.Commit()
	}()
	return txFunc(tx)
}
