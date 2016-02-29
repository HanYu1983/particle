package duelsys

import (
	"appengine"
	"appengine/channel"
	"fmt"
	"lib/tool"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
)

func AssertParametersNotMatch(cfg map[string]string, form url.Values) {
	for k, v := range cfg {
		a := strings.Index(k, "?")
		k2 := strings.Replace(k, "?", "", 1)
		k2 = strings.Replace(k, "*", "", 1)
		k2 = strings.Replace(k, "+", "", 1)
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
		if a+b+c == -1 {
			if len(form[k2]) == 0 {
				panic(fmt.Sprintf("%s not exits", k2))
			}
		}
		if len(form[k2]) > 0 {
			// check type
			switch v {
			case "int":
				for _, str := range form[k2] {
					_, err := strconv.ParseInt(str, 10, 32)
					if err != nil {
						panic(err)
					}
				}
				break
			case "int64":
				for _, str := range form[k2] {
					_, err := strconv.ParseInt(str, 10, 64)
					if err != nil {
						panic(err)
					}
				}
			case "stime":
				for _, str := range form[k2] {
					_, err := time.Parse("2006-Jan-02", str)
					if err != nil {
						panic(err)
					}
				}
			}
		}
	}
}

//TODO 加入訊息觀察者
func Serve_CreateChannel(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	tool.Assert(tool.ParameterIsNotExist(r.Form, "Name"))

	name := r.Form["Name"][0]
	tok, err := channel.Create(ctx, name)
	tool.Assert(tool.IfError(err))

	//TODO 加入觀察者列表

	tool.Output(w, tok, nil)
}

//TODO 擴播訊息
func Serve_SendChannelMessage(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	form, err := tool.ReadAjaxPost(r)
	tool.Assert(tool.IfError(err))
	tool.Assert(tool.ParameterIsNotExist(form, "Message"))

	msg := form["Message"][0]

	err = Notify(ctx, msg)
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

func Notify(ctx appengine.Context, msg string) error {
	//TODO 取得觀察者列表
	var names []string
	// 擴播
	for _, name := range names {
		err := channel.SendJSON(ctx, name, msg)
		if err != nil {
			return err
		}
	}
	return nil
}

// 建立比賽
func Serve_CreateDuel(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	r.ParseForm()
	form := r.Form

	AssertParametersNotMatch(map[string]string{
		"DuelName":  "string",
		"OpenDate":  "stime",
		"CloseDate": "stime",
	}, form)

	duelName := form["DuelName"][0]

	const shortForm = "2006-Jan-02"
	openDate, _ := time.Parse(shortForm, form["OpenDate"][0])
	closeDate, _ := time.Parse(shortForm, form["CloseDate"][0])

	ctx := appengine.NewContext(r)
	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
		err := CreateDuel(dc, duelName, openDate, closeDate)
		if err != nil {
			return err
		}
		return nil
	})

	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}

func Serve_DeleteDuel(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	r.ParseForm()
	form := r.Form

	AssertParametersNotMatch(map[string]string{
		"DuelName": "string",
	}, form)

	duelName := form["DuelName"][0]
	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
		err := DeleteDuel(dc, duelName)
		if err != nil {
			return err
		}
		return nil
	})
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}

// 取得比賽本文
func Serve_GetDuelContext(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	dc, err := GetDuelContext(ctx)
	tool.Assert(tool.IfError(err))
	tool.Output(w, dc, nil)
}

// 參加比賽，同名參賽者無法加入一次以上(ErrPeopleAlreadyAdd)
func Serve_AddPeople(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	r.ParseForm()
	form := r.Form

	AssertParametersNotMatch(map[string]string{
		"Name": "string",
	}, form)

	name := form["Name"][0]

	ctx := appengine.NewContext(r)
	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
		//TODO 判斷Duel的期間是不是報名期間

		// 加入參賽者
		var p People
		err := AddPeople(dc, name, p)
		if err != nil {
			return err
		}
		return nil
	})
	//TODO 推播訊息
	if err != nil {
		Notify(ctx, "")
	}
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}

//TODO 取得對戰玩家的名字配對列表
func Serve_DuelTargetNamePairList(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
}

//TODO 指定比賽結果
func Serve_AsignWinner(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	r.ParseForm()
	form := r.Form

	AssertParametersNotMatch(map[string]string{
		"Name":   "string",
		"Target": "string",
		"Win":    "bool",
	}, form)

	//name := form["Name"][0]

	ctx := appengine.NewContext(r)
	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {

		return nil
	})
	//TODO 推播訊息
	if err != nil {
		Notify(ctx, "")
	}
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}

//TODO 取得比賽結果的狀態
func Serve_WinState(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	r.ParseForm()
	form := r.Form

	AssertParametersNotMatch(map[string]string{
		"Name": "string",
	}, form)

	//name := form["Name"][0]

	ctx := appengine.NewContext(r)
	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {

		return nil
	})
	//TODO 推播訊息
	if err != nil {
		Notify(ctx, "")
	}
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}
