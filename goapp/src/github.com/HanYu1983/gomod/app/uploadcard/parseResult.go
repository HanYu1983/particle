package uploadcard

import (
	"archive/zip"
	"bytes"
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"net/http"
	"path/filepath"
	"text/template"

	"github.com/HanYu1983/gomod/lib/db2"
	tool "github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
)

func Serve_ParseResult(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	tool.Assert(tool.ParameterIsNotExist(r.Form, "id"))

	id := r.Form["id"][0]
	path := fmt.Sprintf("root/tcg/extensionZip/%s", id)
	fileList, err := db2.GetFileList(ctx, path, true)
	tool.Assert(tool.IfError(err))
	if len(fileList) == 0 {
		panic("no file")
	}
	file := fileList[0]

	zipReader, err := zip.NewReader(bytes.NewReader(file.Content), int64(len(file.Content)))
	tool.Assert(tool.IfError(err))

	manifast, err := VerifyZip(ctx, zipReader)
	tool.Assert(tool.IfError(err))

	var _ = manifast
	imgs := map[string]string{}

	for _, zipFile := range zipReader.File {
		isJpg, err := filepath.Match("*/*.jpg", zipFile.Name)
		tool.Assert(tool.IfError(err))

		isPng, err := filepath.Match("*/*.png", zipFile.Name)
		tool.Assert(tool.IfError(err))

		fileName := filepath.Base(zipFile.Name)
		subFile, err := zipFile.Open()
		tool.Assert(tool.IfError(err))
		defer subFile.Close()

		bytes, err := ioutil.ReadAll(subFile)
		tool.Assert(tool.IfError(err))

		if isJpg {
			imgBase64Str := base64.StdEncoding.EncodeToString(bytes)
			imgs[fileName] = imgBase64Str
		}

		if isPng {
			imgBase64Str := base64.StdEncoding.EncodeToString(bytes)
			imgs[fileName] = imgBase64Str
		}
		/*if isPng {
			png, _, err := image.Decode(subFile)
			tool.Assert(tool.IfError(err))
			imgBase64Str := string(tool.PngToBase64(png))
			imgs[fileName] = imgBase64Str
		}*/
	}

	model := map[string]interface{}{
		"id":                id,
		"fileName":          filepath.Base(file.Name),
		"game":              manifast.Game,
		"extensionName":     manifast.ExtensionName,
		"extensionDescribe": manifast.ExtensionDescribe,
		"imgs":              imgs,
		"infos":             manifast.CardInfo,
	}

	t, err := template.ParseFiles("github.com/HanYu1983/gomod/app/uploadcard/parseResult.html", "github.com/HanYu1983/gomod/app/uploadcard/header.html", "github.com/HanYu1983/gomod/app/uploadcard/htmlHeader.html")
	tool.Assert(tool.IfError(err))
	err = t.Execute(w, model)
	tool.Assert(tool.IfError(err))
}
