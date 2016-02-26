package duelsys

import (
	"appengine"
	"appengine/channel"
	"lib/tool"
	"net/http"
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

//TODO 建立比賽
func Serve_CreateDuel(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	r.ParseForm()
	form := r.Form
	tool.Assert(tool.ParameterIsNotExist(form, "DuelName"))
	tool.Assert(tool.ParameterIsNotExist(form, "OpenDate"))
	tool.Assert(tool.ParameterIsNotExist(form, "CloseDate"))

	duelName := form["DuelName"][0]

	const shortForm = "2006-Jan-02"
	openDate, err := time.Parse(shortForm, form["OpenDate"][0])
	tool.Assert(tool.IfError(err))
	closeDate, err := time.Parse(shortForm, form["CloseDate"][0])
	tool.Assert(tool.IfError(err))

	ctx := appengine.NewContext(r)
	err = Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
		err := CreateDuel(dc, duelName, openDate, closeDate)
		if err != nil {
			return err
		}
		return nil
	})

	tool.Assert(tool.IfError(err))
	Notify(ctx, "")
	tool.Output(w, nil, nil)
}

//TODO 取得比賽本文
func Serve_GetDuelContext(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	//dc, err := GetDuelContext(ctx)
	//tool.Assert(tool.IfError(err))

	dc := DuelContext{}
	var duelName = "天下一武道會第一屆"
	CreateDuel(&dc, duelName, time.Now(), time.Now())
	GetDuel(&dc, &duelName)
	han := People{
		Name: "han",
	}
	AddPeople(&dc, duelName, han)
	ctx.Infof("%#v", dc)
	tool.Output(w, dc, nil)
	//tool.Output(w, "test", nil)
}

// 參加比賽，同名參賽者無法加入一次以上(ErrPeopleAlreadyAdd)
func Serve_AddPeople(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	err := Swap(ctx, func(ctx appengine.Context, dc *DuelContext) error {
		//TODO 判斷Duel的期間是不是報名期間

		// 加入參賽者
		var p People
		err := AddPeople(dc, "xxx", p)
		if err != nil {
			return err
		}
		return nil
	})
	//TODO 推播訊息
	if err != nil {
		Notify(ctx, "")
	}
	var _ = err
}

//TODO 取得對戰玩家的名字配對列表
func Serve_DuelTargetNamePairList(w http.ResponseWriter, r *http.Request) {

}

//TODO 指定比賽結果

//TODO 取得比賽結果的狀態
