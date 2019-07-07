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

	"lib/db2"
	tool "lib/tool"

	"errors"

	"strconv"

	"appengine"
)

type ManifastInfo struct {
	Game              string
	ExtensionName     string
	ExtensionDescribe string
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
	var cardFieldCount int
	var cards []string

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
		cards = group[2:]
		if len(info) < 3 {
			return ManifastInfo{}, errors.New("header格式錯誤")
		}
		game = info[0]
		extensionName = info[1]
		extensionDescribe = info[2]
		cardFieldCount = len(field)

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
		}
	}

	return ManifastInfo{
		Game:              game,
		ExtensionName:     extensionName,
		ExtensionDescribe: extensionDescribe,
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
			output = append(output,
				map[string]interface{}{
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
				},
			)
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
