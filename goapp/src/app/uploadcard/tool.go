package uploadcard

import (
	"archive/zip"
	"encoding/base64"
	"errors"
	"fmt"
	"image"
	"io/ioutil"
	"lib/db2"
	tool "lib/tool"
	"net/http"
	"path/filepath"
	"strings"
	"text/template"

	"appengine"
)

func OutputModel(w http.ResponseWriter, r *http.Request, page string, model interface{}) error {
	t, err := template.ParseFiles(page, "app/uploadcard/header.html", "app/uploadcard/htmlHeader.html")
	if err != nil {
		return err
	}
	err = t.Execute(w, model)
	if err != nil {
		return err
	}
	return nil
}

func OutputMessage(w http.ResponseWriter, message string) error {
	t, err := template.ParseFiles("app/uploadcard/message.html", "app/uploadcard/header.html", "app/uploadcard/htmlHeader.html")
	if err != nil {
		return err
	}
	err = t.Execute(w, map[string]string{
		"message": message,
	})
	if err != nil {
		return err
	}
	return nil
}

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

func WriteToDb(ctx appengine.Context, id string, manifast ManifastInfo, override bool, zipReader *zip.Reader) error {
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
			err = db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/%s", manifast.Game, id, fileName), bytes, "tcg", override)
			if err == db2.ErrFileExist {
				return fmt.Errorf("沒有override，必須無法寫入檔案:%s", fileName)
			}
			if err != nil {
				return err
			}
		}

		if isJpg {
			imgBase64Str := base64.StdEncoding.EncodeToString(bytes)
			err = db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/imgs/%s", manifast.Game, id, fileName), []byte(imgBase64Str), "tcg", override)
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
			err = db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/imgs/%s", manifast.Game, id, fileName), imgBase64Str, "tcg", override)
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
