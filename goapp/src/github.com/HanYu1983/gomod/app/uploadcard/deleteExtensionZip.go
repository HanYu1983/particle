package uploadcard

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"path/filepath"
	"strings"

	"github.com/HanYu1983/gomod/lib/db2"
	tool "github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
)

func Serve_DeleteExtensionZip(w http.ResponseWriter, r *http.Request) {
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
	tool.Assert(tool.ParameterIsNotExist(r.PostForm, "zipName"))
	id := r.PostForm["id"][0]
	zipName := r.PostForm["zipName"][0]

	err := tool.WithTransaction(ctx, 3, func(ctx context.Context) error {
		// 刪除zip
		path := fmt.Sprintf("root/tcg/extensionZip/%s", id)
		fileList, err2 := db2.GetFileList(ctx, path, true)
		if err2 != nil {
			return err2
		}
		if len(fileList) > 0 {
			for _, file := range fileList {
				originZipFileName := filepath.Base(file.Name)
				isFileNameVerifyOk := zipName == originZipFileName
				if isFileNameVerifyOk == false {
					return errors.New(fmt.Sprintf("請輸入正確的檔案名稱:%s", zipName))
				}
				err2 = db2.DeleteWithoutTransaction(ctx, file.Name)
				if err2 != nil {
					return err2
				}
			}
		}

		// 刪除所有由id導入的擴充包
		path = "root/tcg/extension/"
		fileList, err2 = db2.GetFileList(ctx, path, true)
		if err2 != nil {
			return err2
		}
		if len(fileList) > 0 {
			for _, file := range fileList {
				// 如果是id導入的
				isBelongTo := strings.Index(file.Name, id) > 0
				if isBelongTo == false {
					continue
				}
				err2 = db2.DeleteWithoutTransaction(ctx, file.Name)
				if err2 != nil {
					return err2
				}
			}
		}
		return nil
	})
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	http.Redirect(w, r, "./", http.StatusMovedPermanently)
}
