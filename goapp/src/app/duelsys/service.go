package duelsys

import (
	"appengine"
	"appengine/channel"
	_ "fmt"
	"lib/tool"
	"net/http"
	_ "net/url"
	"regexp"
	"strconv"
	_ "strings"
	"time"
)

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

	tool.AssertParametersNotMatch(map[string]string{
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

	tool.AssertParametersNotMatch(map[string]string{
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

	tool.AssertParametersNotMatch(map[string]string{
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

	tool.AssertParametersNotMatch(map[string]string{
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

	tool.AssertParametersNotMatch(map[string]string{
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

var (
	cmds = []Command{
		Command{
			regexp.MustCompile("建立(.*)比賽。期間從(.*)到(.*)"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {

				duelName := input[1]

				const shortForm = "2006-Jan-02"
				openDate, _ := time.Parse(shortForm, input[2])
				closeDate, _ := time.Parse(shortForm, input[3])

				err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
					err := CreateDuel(dc, duelName, openDate, closeDate)
					if err != nil {
						return err
					}
					return nil
				})

				return nil, err
			},
		},
		Command{
			regexp.MustCompile("刪除(.*)比賽"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {

				duelName := input[1]
				err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
					err := DeleteDuel(dc, duelName)
					if err != nil {
						return err
					}
					return nil
				})

				return nil, err
			},
		},
		Command{
			regexp.MustCompile("比賽本文"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				return GetDuelContext(ctx)
			},
		},
		Command{
			regexp.MustCompile("(.+)要參加(.+)比賽"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				duelName := input[2]
				name := input[1]

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

				return nil, err
			},
		},
		Command{
			regexp.MustCompile("確認(.+)比賽的(.+)選手和(.+)選手的比賽結果"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				duelName := input[1]
				name := input[2]
				target := input[3]

				dc, err := GetDuelContext(ctx)
				if err != nil {
					return nil, err
				}
				meInDuel, err := GetPeople(&dc, duelName, name)
				if err != nil {
					return nil, err
				}
				targetInDuel, err := GetPeople(&dc, duelName, target)
				if err != nil {
					return nil, err
				}
				check, err := CheckWinnerMatch(&dc, duelName, meInDuel.Position, targetInDuel.Position)
				if err != nil {
					return nil, err
				}
				return check, err
			},
		},
		Command{
			regexp.MustCompile("(.+)比賽的(.+)選手([勝|負])(.+)選手"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				duelName := input[1]
				name := input[2]
				target := input[4]

				var win bool
				if input[3] == "勝" {
					win = true
				}

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

				return nil, err
			},
		},
		Command{
			regexp.MustCompile("比賽本文"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				return GetDuelContext(ctx)
			},
		},
		Command{
			regexp.MustCompile("(.+)比賽的(.+)選手升格"),
			func(ctx appengine.Context, w http.ResponseWriter, r *http.Request, input []string) (interface{}, error) {
				return nil, nil
			},
		},
	}
)

func Server_Talk(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	form := r.Form

	tool.AssertParametersNotMatch(map[string]string{
		"Talk": "string",
	}, form)

	talk := form["Talk"][0]

	result, err := ExecuteCommand(cmds, ctx, w, r, talk)
	tool.Assert(tool.IfError(err))
	tool.Output(w, result, nil)

}
