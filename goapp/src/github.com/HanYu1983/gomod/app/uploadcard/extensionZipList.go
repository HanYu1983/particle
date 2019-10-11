package uploadcard

import (
	"net/http"
	"path/filepath"
	"text/template"

	"github.com/HanYu1983/gomod/lib/db2"
	tool "github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
)

func Serve_ExtensionZipList(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	var _ = ctx

	fileList, err := db2.GetFileList(ctx, "root/tcg/extensionZip", true)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	extractList, err := db2.GetFileList(ctx, "root/tcg/extension", true)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	names := [][]interface{}{}
	for _, file := range fileList {
		fileName := filepath.Base(file.Name)
		id := filepath.Base(filepath.Dir(file.Name))
		fileSize := float32(len(file.Content)) / (1024)

		alreadyExtract := false
		for _, extractFile := range extractList {
			extractFileName := filepath.Base(extractFile.Name)
			extractId := filepath.Base(filepath.Dir(extractFile.Name))
			if extractFileName == "manifast.txt" && extractId == id {
				alreadyExtract = true
				break
			}
		}

		names = append(names, []interface{}{id, fileName, alreadyExtract, fileSize})
	}

	model := map[string]interface{}{
		"extensionZips": names,
	}

	t, err := template.ParseFiles("github.com/HanYu1983/gomod/app/uploadcard/extensionZipList.html", "github.com/HanYu1983/gomod/app/uploadcard/header.html", "github.com/HanYu1983/gomod/app/uploadcard/htmlHeader.html")
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	err = t.Execute(w, model)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
}
