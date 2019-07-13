package uploadcard

import (
	"archive/zip"
	"bytes"
	"encoding/base64"
	"fmt"
	"image"
	"io/ioutil"
	"net/http"
	"path/filepath"
	"strings"
	"text/template"

	"lib/db2"
	tool "lib/tool"

	"errors"

	"strconv"

	uuid "github.com/google/uuid"

	"appengine"
)

type ManifastInfo struct {
	Game              string
	ExtensionName     string
	ExtensionDescribe string
	CardInfo          [][]string
}

func VerifyZip(ctx appengine.Context, zipReader *zip.Reader) (ManifastInfo, error) {
	hasManifast := false
	for _, zipFile := range zipReader.File {
		isMatch, err := filepath.Match("*/manifast.txt", zipFile.Name)
		if err != nil {
			return ManifastInfo{}, err
		}
		if isMatch {
			hasManifast = true
			break
		}
	}

	if hasManifast == false {
		return ManifastInfo{}, errors.New("no manifast")
	}

	var imgNames = map[string]int{}
	for _, zipFile := range zipReader.File {
		isMatchJpg, err := filepath.Match("*/*.jpg", zipFile.Name)
		if err != nil {
			return ManifastInfo{}, err
		}
		isMatchPng, err := filepath.Match("*/*.png", zipFile.Name)
		if err != nil {
			return ManifastInfo{}, err
		}
		if isMatchJpg || isMatchPng {
			imgNames[filepath.Base(zipFile.Name)] = 0
		}
	}

	var game, extensionName, extensionDescribe string
	var cardInfos [][]string

	for _, zipFile := range zipReader.File {
		isMatch, err := filepath.Match("*/manifast.txt", zipFile.Name)
		if err != nil {
			return ManifastInfo{}, err
		}
		if isMatch == false {
			continue
		}
		subFile, err := zipFile.Open()
		if err != nil {
			return ManifastInfo{}, err
		}
		defer subFile.Close()

		bytes, err := ioutil.ReadAll(subFile)
		if err != nil {
			return ManifastInfo{}, err
		}

		content := string(bytes)
		content = strings.Replace(content, "\r", "", -1)
		group := strings.Split(content, "===\n")
		info := strings.Split(group[0], "\n")
		field := strings.Split(group[1], "\n")
		cards := group[2:]
		if len(info) < 3 {
			return ManifastInfo{}, errors.New("header格式錯誤")
		}
		game = info[0]
		extensionName = info[1]
		extensionDescribe = info[2]
		cardFieldCount := len(field)

		for _, card := range cards {
			cardInfo := strings.Split(card, "\n")
			// 記得文件最後要多空一行(換行符號), 不然欄位數量會解錯
			if len(cardInfo) != cardFieldCount {
				return ManifastInfo{}, errors.New("卡片欄位數量錯誤")
			}

			imgName := cardInfo[0]
			_, isExist := imgNames[imgName]
			if isExist == false {
				return ManifastInfo{}, fmt.Errorf("沒有找到圖片:%s", imgName)
			}

			cardInfos = append(cardInfos, cardInfo)
		}
	}

	return ManifastInfo{
		Game:              game,
		ExtensionName:     extensionName,
		ExtensionDescribe: extensionDescribe,
		CardInfo:          cardInfos,
	}, nil
}

func WriteToDb(ctx appengine.Context, manifast ManifastInfo, override bool, zipReader *zip.Reader) error {
	for _, zipFile := range zipReader.File {
		isManifast, err := filepath.Match("*/manifast.txt", zipFile.Name)
		if err != nil {
			return err
		}
		isJpg, err := filepath.Match("*/*.jpg", zipFile.Name)
		if err != nil {
			return err
		}
		isPng, err := filepath.Match("*/*.png", zipFile.Name)
		if err != nil {
			return err
		}
		fileName := filepath.Base(zipFile.Name)
		subFile, err := zipFile.Open()
		if err != nil {
			return err
		}
		defer subFile.Close()
		bytes, err := ioutil.ReadAll(subFile)
		if err != nil {
			return err
		}

		if isManifast {
			err = db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/%s", manifast.Game, manifast.ExtensionName, fileName), bytes, "tcg", override)
			if err == db2.ErrFileExist {
				return fmt.Errorf("沒有override，必須無法寫入檔案:%s", fileName)
			}
			if err != nil {
				return err
			}
		}

		if isJpg {
			imgBase64Str := base64.StdEncoding.EncodeToString(bytes)
			err = db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/imgs/%s", manifast.Game, manifast.ExtensionName, fileName), []byte(imgBase64Str), "tcg", override)
			if err == db2.ErrFileExist {
				return fmt.Errorf("沒有override，必須無法寫入檔案:%s", fileName)
			}
			if err != nil {
				return err
			}
		}

		if isPng {
			png, _, err := image.Decode(subFile)
			if err != nil {
				return err
			}
			imgBase64Str := tool.PngToBase64(png)
			err = db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/imgs/%s", manifast.Game, manifast.ExtensionName, fileName), imgBase64Str, "tcg", override)
			if err == db2.ErrFileExist {
				return fmt.Errorf("沒有override，必須無法寫入檔案:%s", fileName)
			}
			if err != nil {
				return err
			}
		}
	}
	return nil
}

var (
	director = map[string]map[string]string{
		"addExtensionZip": map[string]string{
			"showParseResult": "app/uploadcard/parseResult.html",
		},
	}
)

func FrontController(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	values := r.URL.Query()
	tool.Assert(tool.ParameterIsNotExist(values, "action"))
	action := values["action"][0]
	result := ""
	if len(values["result"]) > 0 {
		result = values["result"][0]
	}

	if len(result) > 0 {
		page, isExist := director[action][result]
		if isExist == false {
			panic("no page")
		}
		var _ = page
	}

	model := map[string]interface{}{}
	tmpl := director[action][result]
	var _, _ = model, tmpl
}

func Serve_ShowParseResult(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	r.ParseForm()
	tool.Assert(tool.ParameterIsNotExist(r.Form, "id"))

	id := r.Form["id"][0]
	path := fmt.Sprintf("root/tcg/extensionZip/%s", id)
	fileList, err := db2.GetFileList(ctx, path, true)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	if len(fileList) == 0 {
		panic("no file")
	}
	file := fileList[0]

	zipReader, err := zip.NewReader(bytes.NewReader(file.Content), int64(len(file.Content)))
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	manifast, err := VerifyZip(ctx, zipReader)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	var _ = manifast
	imgs := map[string]string{}

	for _, zipFile := range zipReader.File {
		isJpg, err := filepath.Match("*/*.jpg", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		isPng, err := filepath.Match("*/*.png", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		fileName := filepath.Base(zipFile.Name)
		subFile, err := zipFile.Open()
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		defer subFile.Close()
		bytes, err := ioutil.ReadAll(subFile)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}

		if isJpg {
			imgBase64Str := base64.StdEncoding.EncodeToString(bytes)
			imgs[fileName] = imgBase64Str
		}

		if isPng {
			png, _, err := image.Decode(subFile)
			if err != nil {
				tool.Assert(tool.IfError(err))
			}
			imgBase64Str := string(tool.PngToBase64(png))
			imgs[fileName] = imgBase64Str
		}
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

	t, err := template.ParseFiles("app/uploadcard/parseResult.html", "app/uploadcard/header.html", "app/uploadcard/htmlHeader.html")
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	err = t.Execute(w, model)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

}

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

func Serve_DeleteExtensionZip(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
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
	for _, file := range fileList {
		db2.Delete(ctx, file.Name)
	}
	http.Redirect(w, r, "/fn/tcg/extensionZipList", http.StatusMovedPermanently)
}

func Serve_AddExtensionZip(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	var _ = ctx

	if err := r.ParseMultipartForm(32 << 20); err != nil {
		tool.Assert(tool.IfError(err))
	}
	f, h, err := r.FormFile("file")
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	var _ = h
	body, err := ioutil.ReadAll(f)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	zipReader, err := zip.NewReader(bytes.NewReader(body), int64(len(body)))
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	manifast, err := VerifyZip(ctx, zipReader)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	var _ = manifast

	uuid := uuid.New()

	err = tool.WithTransaction(ctx, 3, func(ctx appengine.Context) error {
		err2 := db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extensionZip/%s/%s", uuid, h.Filename), body, "tcg", true)
		if err2 == db2.ErrFileExist {
			return fmt.Errorf("沒有override，必須無法寫入檔案:%s", h.Filename)
		}
		return err2
	})
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	http.Redirect(w, r, fmt.Sprintf("./showResult?id=%s", uuid), http.StatusMovedPermanently)
}

func Serve_AddExtension(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	var _ = ctx

	if err := r.ParseMultipartForm(32 << 20); err != nil {
		tool.Assert(tool.IfError(err))
	}
	f, h, err := r.FormFile("file")
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	var _ = h
	body, err := ioutil.ReadAll(f)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	zipReader, err := zip.NewReader(bytes.NewReader(body), int64(len(body)))
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	manifastInfo, err := VerifyZip(ctx, zipReader)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	err = tool.WithTransaction(ctx, 3, func(ctx appengine.Context) error {
		err2 := WriteToDb(ctx, manifastInfo, true, zipReader)
		return err2
	})
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	tool.Output(w, true, nil)
}

func Serve_GetExtension(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	queryTable := r.URL.Query()

	tool.Assert(tool.ParameterIsNotExist(queryTable, "game"))
	//tool.Assert(tool.ParameterIsNotExist(queryTable, "extensionName"))

	game := queryTable["game"][0]
	//extensionName := queryTable["extensionName"][0]

	var _ = ctx
	var _ = game
	//var _ = extensionName

	list, err := db2.GetFileList(ctx, fmt.Sprintf("root/tcg/extension/%s", game), false)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	output := []map[string]interface{}{}

	for _, file := range list {
		fileName := filepath.Base(file.Name)
		if fileName != "manifast.txt" {
			continue
		}
		content := string(file.Content)
		content = strings.Replace(content, "\r", "", -1)
		group := strings.Split(content, "===\n")
		cards := group[2:]

		info := strings.Split(group[0], "\n")
		extensionName := info[1]

		for _, card := range cards {
			cardInfo := strings.Split(card, "\n")
			cost1, err := strconv.Atoi(cardInfo[7])
			if err != nil {
				tool.Assert(tool.IfError(err))
			}
			cost2, err := strconv.Atoi(cardInfo[8])
			if err != nil {
				tool.Assert(tool.IfError(err))
			}

			var json map[string]interface{}
			if game == "sangoku" {
				json = map[string]interface{}{
					"imgUrl":  fmt.Sprintf("root/tcg/extension/%s/%s/imgs/%s", game, extensionName, cardInfo[0]),
					"id":      cardInfo[1],
					"cid":     cardInfo[1],
					"cname":   cardInfo[2],
					"set":     cardInfo[3],
					"color":   cardInfo[4],
					"atype":   cardInfo[5],
					"atype2":  cardInfo[6],
					"cost":    []interface{}{cost1, cost2},
					"ability": cardInfo[9],
					"power":   cardInfo[10],
					"city":    cardInfo[11],
					"symbol":  cardInfo[12],
					"rarity":  cardInfo[13],
					"content": cardInfo[14],
					"counter": cardInfo[15],
				}
			}
			output = append(output, json)
		}
	}

	tool.Output(w, output, nil)
}

func TestFile(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)

	w.Header().Add("Content-Type", "text/html; charset=utf-8")
	if err := r.ParseMultipartForm(32 << 20); err != nil {
		tool.Assert(tool.IfError(err))
	}
	f, h, err := r.FormFile("file")
	if err != nil {
		tool.Assert(tool.IfError(err))
	}
	var _ = h
	body, err := ioutil.ReadAll(f)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	zipReader, err := zip.NewReader(bytes.NewReader(body), int64(len(body)))
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	hasManifast := false
	for _, zipFile := range zipReader.File {
		ctx.Infof("Reading path: %s", zipFile.Name)
		isMatch, err := filepath.Match("*/manifast.txt", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		if isMatch {
			hasManifast = true
			break
		}
	}

	if hasManifast == false {
		panic("no manifast")
	}

	var imgNames = map[string]int{}
	for _, zipFile := range zipReader.File {
		ctx.Infof("Reading path: %s", zipFile.Name)
		isMatchJpg, err := filepath.Match("*/*.jpg", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		isMatchPng, err := filepath.Match("*/*.png", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		if isMatchJpg || isMatchPng {
			imgNames[filepath.Base(zipFile.Name)] = 0
		}
	}
	ctx.Infof("imgNames %v", imgNames)

	var game, extensionName, extensionDescribe string
	var cardFieldCount int
	var cards []string

	for _, zipFile := range zipReader.File {
		isMatch, err := filepath.Match("*/manifast.txt", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		if isMatch == false {
			continue
		}
		subFile, err := zipFile.Open()
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		defer subFile.Close()

		bytes, err := ioutil.ReadAll(subFile)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}

		//fmt.Fprintf(w, "%s", string(bytes))
		content := string(bytes)
		content = strings.Replace(content, "\r", "", -1)
		group := strings.Split(content, "===\n")
		info := strings.Split(group[0], "\n")
		field := strings.Split(group[1], "\n")
		cards = group[2:]
		if len(info) < 3 {
			panic("header格式錯誤")
		}
		game = info[0]
		extensionName = info[1]
		extensionDescribe = info[2]
		cardFieldCount = len(field)

		/*for i, info := range field {
			fmt.Fprintf(w, "%d [%s]<br>", i, info)
		}*/

		for _, card := range cards {
			//fmt.Fprintf(w, "%d [%s]<br>", i, card)

			cardInfo := strings.Split(card, "\n")
			/*
				for i, info := range cardInfo {
					fmt.Fprintf(w, "%d [%s]<br>", i, info)
				}
				ctx.Infof("%d %d", cardFieldCount, len(cardInfo))
			*/
			// 記得文件最後要多空一行(換行符號), 不然欄位數量會解錯
			if len(cardInfo) != cardFieldCount {
				panic("卡片欄位數量錯誤")
			}

			imgName := cardInfo[0]
			ctx.Infof("%s", imgName)
			_, isExist := imgNames[imgName]
			if isExist == false {
				panic(fmt.Sprintf("沒有找到圖片:%s", imgName))
			}
		}
	}
	var _ = game
	var _ = extensionName
	var _ = extensionDescribe
	var _ = cardFieldCount

	for _, zipFile := range zipReader.File {
		isManifast, err := filepath.Match("*/manifast.txt", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		isJpg, err := filepath.Match("*/*.jpg", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		isPng, err := filepath.Match("*/*.png", zipFile.Name)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		fileName := filepath.Base(zipFile.Name)
		subFile, err := zipFile.Open()
		if err != nil {
			tool.Assert(tool.IfError(err))
		}
		defer subFile.Close()
		bytes, err := ioutil.ReadAll(subFile)
		if err != nil {
			tool.Assert(tool.IfError(err))
		}

		if isManifast {
			err = db2.WriteFile(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/%s", game, extensionName, fileName), bytes, "admin", false)
			if err != db2.ErrFileExist {
				panic(fmt.Sprintf("沒有override，必須無法寫入檔案:%s", fileName))
			}
		}

		if isJpg {
			imgBase64Str := base64.StdEncoding.EncodeToString(bytes)
			err = db2.WriteFile(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/imgs/%s", game, extensionName, fileName), []byte(imgBase64Str), "admin", false)
			if err != db2.ErrFileExist {
				panic(fmt.Sprintf("沒有override，必須無法寫入檔案:%s", fileName))
			}
		}

		if isPng {
			png, _, err := image.Decode(subFile)
			if err != nil {
				tool.Assert(tool.IfError(err))
			}
			imgBase64Str := tool.PngToBase64(png)
			err = db2.WriteFile(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/imgs/%s", game, extensionName, fileName), imgBase64Str, "admin", false)
			if err != db2.ErrFileExist {
				panic(fmt.Sprintf("沒有override，必須無法寫入檔案:%s", fileName))
			}
		}
	}

	// Read all the files from zip archive
	for _, zipFile := range zipReader.File {

		fileExt := filepath.Ext(zipFile.Name)

		if fileExt == ".jpg" {
			subFile, err := zipFile.Open()
			if err != nil {
				ctx.Infof("Error accessing file: %s", err)
			}
			defer subFile.Close()
			/*
				image, _, err := image.Decode(subFile)
				if err != nil {
					ctx.Infof("Error accessing file: %s", err)
				}

				w.Header().Set("Content-Type", "image/jpeg; charset=utf8")
				err = jpeg.Encode(w, image, nil)
				if err != nil {
					ctx.Infof("Error accessing file: %s", err)
				}*/

			bytes, err := ioutil.ReadAll(subFile)
			if err != nil {
				ctx.Infof("Error accessing file: %s", err)
			}
			imgBase64Str := base64.StdEncoding.EncodeToString(bytes)

			// Embed into an html without PNG file
			img2html := "<html><body><img src=\"data:image/png;base64," + imgBase64Str + "\" /></body></html>"

			var _ = img2html

			//w.Write([]byte(fmt.Sprintf(img2html)))
		}
	}

	//str := string(body)
	//fmt.Fprintf(w, "%s", str)
	defer f.Close()
}
