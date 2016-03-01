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
		"DuelName": "string",
		"Name":     "string",
	}, form)

	duelName := form["DuelName"][0]
	name := form["Name"][0]

	ctx := appengine.NewContext(r)
	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
		//TODO 判斷Duel的期間是不是報名期間

		// 加入參賽者
		p := People{
			Name: name,
		}
		err := AddPeople(dc, duelName, p)
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

// 取得比賽結果的狀態
func Serve_WinState(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	r.ParseForm()
	form := r.Form

	AssertParametersNotMatch(map[string]string{
		"DuelName": "string",
		"Name":     "string",
		"Target":   "string",
	}, form)

	duelName := form["DuelName"][0]
	name := form["Name"][0]
	target := form["Target"][0]

	ctx := appengine.NewContext(r)
	dc, err := GetDuelContext(ctx)
	tool.Assert(tool.IfError(err))

	meInDuel, err := GetPeople(&dc, duelName, name)
	tool.Assert(tool.IfError(err))

	targetInDuel, err := GetPeople(&dc, duelName, target)
	tool.Assert(tool.IfError(err))

	check, err := CheckWinnerMatch(&dc, duelName, meInDuel.Position, targetInDuel.Position)
	tool.Assert(tool.IfError(err))

	tool.Assert(tool.IfError(err))
	tool.Output(w, check, nil)
}

// 指定比賽結果
func Serve_AssignWinner(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	form := r.Form

	AssertParametersNotMatch(map[string]string{
		"DuelName": "string",
		"Name":     "string",
		"Target":   "string",
		"Win":      "bool",
	}, form)

	duelName := form["DuelName"][0]
	name := form["Name"][0]
	target := form["Target"][0]
	win, _ := strconv.ParseBool(form["Win"][0])

	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
		meInDuel, err := GetPeople(dc, duelName, name)
		if err != nil {
			return err
		}
		targetInDuel, err := GetPeople(dc, duelName, target)
		if err != nil {
			return err
		}
		err = AssignWinner(dc, duelName, meInDuel.Position, targetInDuel.Name, win)
		return err
	})
	//TODO 推播訊息
	if err != nil {
		Notify(ctx, "")
	}
	tool.Assert(tool.IfError(err))
	tool.Output(w, nil, nil)
}
