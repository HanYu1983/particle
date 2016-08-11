package app

import (
	"appengine"
	"encoding/json"
	"lib/db2"
	"lib/tool"
	"net/http"
	"strings"
)

const (
	userDir = "root/user/"
)

func ReadPublicCardSuit(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})
	ctx := appengine.NewContext(r)
	list, err := db2.GetFileList(ctx, userDir, true)
	tool.Assert(tool.IfError(err))

	jsoninfo := map[string]interface{}{}
	pubs := []interface{}{}

	for _, file := range list {
		filepath := file.Name
		filePathToken := strings.Split(filepath, "/")
		filename := filePathToken[len(filePathToken)-1]
		if filename != "cardSuit.json" {
			continue
		}
		username := filePathToken[len(filePathToken)-2]
		cardSuit, err := db2.GetFile(ctx, filepath)
		tool.Assert(tool.IfError(err))
		err = json.Unmarshal(cardSuit.Content, &jsoninfo)
		tool.Assert(tool.IfError(err))
		for _, subsuit := range jsoninfo["cardSuit"].([]interface{}) {
			subsuitinfo := subsuit.(map[string]interface{})
			subsuitinfo["username"] = username
			isPublic, hasPublic := subsuitinfo["public"].(bool)
			if hasPublic && isPublic {
				pubs = append(pubs, subsuitinfo)
			}
		}
	}

	tool.Output(w, pubs, nil)
}
