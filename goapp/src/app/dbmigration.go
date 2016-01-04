package app

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"lib/db/file"
	"lib/db2"
	"lib/tool"
	"net/http"
)

func Dbtodb2(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)

	r.ParseForm()
	data2 := r.PostForm["Data"][0]
	var fileList []dbfile.DBFile
	err := json.Unmarshal([]byte(data2), &fileList)
	if err != nil {
		Output(w, nil, err.Error())
	}

	ak2 := db2.AncestorKey(ctx)

	var getFileName func(file dbfile.DBFile) string
	getFileName = func(file dbfile.DBFile) string {
		for _, currFile := range fileList {
			if currFile.Key == file.Position {
				return getFileName(currFile) + "/" + file.Name
			}
		}
		return file.Name
	}

	for _, file := range fileList {
		file2 := db2.DBFile{
			Name:    getFileName(file),
			Content: file.Content,
			Time:    file.Time,
			Owner:   file.Owner,
		}
		key := datastore.NewIncompleteKey(ctx, db2.Kind, ak2)
		_, err := datastore.Put(ctx, key, &file2)
		if err != nil {
			Output(w, nil, err.Error())
			return
		}
	}
	Output(w, nil, nil)
}
