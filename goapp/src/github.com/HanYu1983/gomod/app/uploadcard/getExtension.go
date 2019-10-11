package uploadcard

import (
	"fmt"
	"net/http"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/HanYu1983/gomod/lib/db2"
	tool "github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
)

func Serve_GetExtension(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	var _ = ctx

	r.ParseForm()

	tool.Assert(tool.ParameterIsNotExist(r.Form, "game"))
	//tool.Assert(tool.ParameterIsNotExist(r.Form, "extensionId"))

	game := r.Form["game"][0]
	//extensionId := r.Form["extensionId"][0]

	list, err := db2.GetFileList(ctx, fmt.Sprintf("root/tcg/extension/%s/", game), true)
	if err != nil {
		tool.Assert(tool.IfError(err))
	}

	output := []interface{}{}

	for _, file := range list {
		fileName := filepath.Base(file.Name)
		if fileName != "manifast.txt" {
			continue
		}
		extensionId := filepath.Base(filepath.Dir(file.Name))

		content := string(file.Content)
		content = strings.Replace(content, "\r", "", -1)
		group := strings.Split(content, "===\n")
		cards := group[2:]

		for _, card := range cards {
			cardInfo := strings.Split(card, "\n")
			imgUrl := fmt.Sprintf("%s/%s/imgs/%s", game, extensionId, cardInfo[0])

			var json interface{}
			if game == "sengoku" {
				cost1, err := strconv.Atoi(cardInfo[7])
				if err != nil {
					cost1 = 0
				}
				cost2, err := strconv.Atoi(cardInfo[8])
				if err != nil {
					cost2 = 0
				}
				json = map[string]interface{}{
					"imgUrl":  imgUrl,
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

			if game == "sangoWar" {

				cost1, err := strconv.Atoi(cardInfo[6])
				if err != nil {
					cost1 = 0
				}
				cost2, err := strconv.Atoi(cardInfo[7])
				if err != nil {
					cost2 = 0
				}

				json = []interface{}{
					cardInfo[1],
					cardInfo[2],
					cardInfo[3],
					cardInfo[4],
					cardInfo[5],
					[]interface{}{
						cost1,
						cost2,
						cardInfo[8],
					},
					cardInfo[9],
					cardInfo[10],
					cardInfo[11],
					cardInfo[12],
					cardInfo[13],
					imgUrl,
				}
			}
			output = append(output, json)
		}
	}

	tool.Output(w, output, nil)
}
