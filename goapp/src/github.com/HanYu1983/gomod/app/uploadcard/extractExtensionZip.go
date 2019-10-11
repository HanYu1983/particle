package uploadcard

import (
	"archive/zip"
	"bytes"
	"context"
	"fmt"
	"net/http"

	"github.com/HanYu1983/gomod/lib/db2"
	tool "github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
)

func Serve_ExtractExtensionZip(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		err2 := OutputMessage(w, err.Error())
		if err2 != nil {
			tool.Output(w, nil, err2.Error())
		}
	})
	ctx := appengine.NewContext(r)
	var _ = ctx

	if r.Method != "POST" {
		panic("can not delete")
	}

	r.ParseForm()
	tool.Assert(tool.ParameterIsNotExist(r.PostForm, "id"))
	id := r.PostForm["id"][0]
	path := fmt.Sprintf("root/tcg/extensionZip/%s", id)
	fileList, err := db2.GetFileList(ctx, path, true)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	if len(fileList) == 0 {
		panic("no file")
	}

	body := fileList[0].Content

	zipReader, err := zip.NewReader(bytes.NewReader(body), int64(len(body)))
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	manifastInfo, err := VerifyZip(ctx, zipReader)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	err = tool.WithTransaction(ctx, 3, func(ctx context.Context) error {
		err2 := WriteToDb(ctx, id, manifastInfo, true, zipReader)
		return err2
	})
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	http.Redirect(w, r, "./", http.StatusMovedPermanently)
}
