package uploadcard

import (
	"archive/zip"
	"context"
	"encoding/base64"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"path/filepath"
	"strings"
	"text/template"

	"github.com/HanYu1983/gomod/lib/db2"
)

func OutputModel(w http.ResponseWriter, r *http.Request, page string, model interface{}) error {
	t, err := template.ParseFiles(page, "github.com/HanYu1983/gomod/app/uploadcard/header.html", "github.com/HanYu1983/gomod/app/uploadcard/htmlHeader.html")
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
	t, err := template.ParseFiles("github.com/HanYu1983/gomod/app/uploadcard/message.html", "github.com/HanYu1983/gomod/app/uploadcard/header.html", "github.com/HanYu1983/gomod/app/uploadcard/htmlHeader.html")
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

func VerifyZip(ctx context.Context, zipReader *zip.Reader) (ManifastInfo, error) {
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
				return ManifastInfo{}, errors.New("卡片欄位數量錯誤. 記得文件最後要多空一行(換行符號), 不然欄位數量會解錯")
			}

			imgName := cardInfo[0]
			if filepath.Ext(imgName) == ".png" {
				return ManifastInfo{}, errors.New(fmt.Sprintf("不能使用png, 請使用jpg: %s", imgName))
			}
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

func WriteToDb(ctx context.Context, id string, manifast ManifastInfo, override bool, zipReader *zip.Reader) error {
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
			imgBase64Str := base64.StdEncoding.EncodeToString(bytes)
			err = db2.WriteFileWithoutTransaction(ctx, fmt.Sprintf("root/tcg/extension/%s/%s/imgs/%s", manifast.Game, id, fileName), []byte(imgBase64Str), "tcg", override)
			if err == db2.ErrFileExist {
				return fmt.Errorf("沒有override，必須無法寫入檔案:%s", fileName)
			}
			if err != nil {
				return err
			}
		}

		/*if isPng {
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
		}*/
	}
	return nil
}
