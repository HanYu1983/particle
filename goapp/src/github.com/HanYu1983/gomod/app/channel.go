// channel相關處理
package app

import (
	"net/http"

	"github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
	"google.golang.org/appengine/channel"
)

// 輸入一個名稱建立channel
func CreateChannel(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	tool.Assert(tool.ParameterIsNotExist(r.Form, "Name"))

	name := r.Form["Name"][0]
	tok, err := channel.Create(ctx, name)
	tool.Assert(tool.IfError(err))

	tool.Output(w, tok, nil)
}

// 發送訊息到指定的channel
func SendChannelMessage(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	form, err := tool.ReadAjaxPost(r)
	tool.Assert(tool.IfError(err))

	tool.Assert(tool.ParameterIsNotExist(form, "Name"))
	tool.Assert(tool.ParameterIsNotExist(form, "Message"))

	name := form["Name"][0]
	msg := form["Message"][0]

	err = channel.SendJSON(ctx, name, msg)
	tool.Assert(tool.IfError(err))

	tool.Output(w, nil, nil)
}

// 監聽channel的創建
// 要在hello.go中handle這個path:"/_ah/channel/connected/"
func OnChannelConnected(w http.ResponseWriter, r *http.Request) {
	/*
	  r.ParseForm()
	  from := r.FormValue("from")
	  ctx := appengine.NewContext( r )

	  err := channel.SendJSON(ctx, from, 0)
	  if err != nil {
	    ctx.Infof("sending error: %v", err)
	  }
	*/
}

// 監聽channel的離線
// 要在hello.go中handle這個path:"/_ah/channel/disconnected/"
func OnChannelDisconnected(w http.ResponseWriter, r *http.Request) {
	/*
	  r.ParseForm()
	  from := r.FormValue("from")
	  ctx := appengine.NewContext( r )
	  ctx.Infof("onChannelDisconnected %v", from)
	*/
}
