package uploadcard

import (
	"lib/db2"
	tool "lib/tool"
	"net/http"
	"path/filepath"
	"text/template"

	"appengine"
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

	names := [][]string{}
	for _, file := range fileList {
		fileName := filepath.Base(file.Name)
		id := filepath.Base(filepath.Dir(file.Name))
		names = append(names, []string{id, fileName})
	}

	model := map[string]interface{}{
		"extensionZips": names,
	}

	t, err := template.ParseFiles("app/uploadcard/extensionZipList.html", "app/uploadcard/header.html", "app/uploadcard/htmlHeader.html")
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	err = t.Execute(w, model)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
}
