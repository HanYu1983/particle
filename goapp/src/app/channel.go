package app

import (
	"appengine"
	"appengine/channel"
	"lib/tool"
	"net/http"
)

func CreateChannel(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	tool.Assert(tool.ParameterIsNotExist(r.Form, "Name"))

	name := r.Form["Name"][0]
	tok, err := channel.Create(ctx, name)
	tool.Assert(tool.IfError(err))

	Output(w, tok, nil)
}

func SendChannelMessage(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
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

	Output(w, nil, nil)
}

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

func OnChannelDisconnected(w http.ResponseWriter, r *http.Request) {
	/*
	  r.ParseForm()
	  from := r.FormValue("from")
	  ctx := appengine.NewContext( r )
	  ctx.Infof("onChannelDisconnected %v", from)
	*/
}
