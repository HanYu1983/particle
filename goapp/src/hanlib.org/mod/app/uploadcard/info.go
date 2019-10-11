package uploadcard

import (
	"net/http"

	tool "hanlib.org/mod/lib/tool"
)

func Serve_Info(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	err := OutputModel(w, r, "hanlib.org/mod/app/uploadcard/info.html", nil)
	tool.Assert(tool.IfError(err))
}
