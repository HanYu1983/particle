package uploadcard

import (
	"archive/zip"
	"bytes"
	"fmt"
	"io/ioutil"
	"lib/db2"
	tool "lib/tool"
	"net/http"

	uuid "github.com/google/uuid"

	"appengine"
)

var (
	validExtensionNames = []string{"sangoWar"}
)

func IsValidExtensionName(name string) bool {
	for _, n := range validExtensionNames {
		if n == name {
			return true
		}
	}
	return false
}

func Serve_AddExtensionZip(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		err2 := OutputMessage(w, err.Error())
		if err2 != nil {
			tool.Output(w, nil, err2.Error())
		}
	})
	ctx := appengine.NewContext(r)
	var _ = ctx

	fileList, err := db2.GetFileList(ctx, "root/tcg/extensionZip", true)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	isExceedSize := len(fileList) >= 3
	if isExceedSize {
		panic("擴充包數量超過上限")
	}

	// 最大上傳5MB
	if err := r.ParseMultipartForm(1024 * 1024 * 5); err != nil {
		tool.Assert(tool.IfError(err))
	}
	f, h, err := r.FormFile("file")
	tool.Assert(tool.IfError(err))

	var _ = h
	body, err := ioutil.ReadAll(f)
	tool.Assert(tool.IfError(err))

	zipReader, err := zip.NewReader(bytes.NewReader(body), int64(len(body)))
	tool.Assert(tool.IfError(err))

	manifast, err := VerifyZip(ctx, zipReader)
	tool.Assert(tool.IfError(err))

	if IsValidExtensionName(manifast.Game) == false {
		panic(fmt.Sprintf("遊戲名稱錯誤:%s", manifast.Game))
	}

	uuid := uuid.New()
	err = tool.WithTransaction(ctx, 3, func(ctx appengine.Context) error {
		err2 := db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extensionZip/%s/%s", uuid, h.Filename), body, "tcg", true)
		if err2 == db2.ErrFileExist {
			return fmt.Errorf("沒有override，必須無法寫入檔案:%s", h.Filename)
		}
		return err2
	})
	tool.Assert(tool.IfError(err))
	http.Redirect(w, r, fmt.Sprintf("./parseResult?id=%s", uuid), http.StatusMovedPermanently)
}
