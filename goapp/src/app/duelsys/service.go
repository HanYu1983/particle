package duelsys

import (
	"appengine"
	"appengine/channel"
	"lib/tool"
	"net/http"
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

//TODO 取得比賽列表

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
