// 用來整合db到db2的過渡資料
// 之後可以刪除
package app

import (
	"encoding/json"
	"net/http"

	dbfile "github.com/HanYu1983/gomod/lib/db/file"
	"github.com/HanYu1983/gomod/lib/db2"
	"github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
	"google.golang.org/appengine/datastore"
)

func Dbtodb2(w http.ResponseWriter, r *http.Request) {
	defer tool.Recover(func(err error) {
		tool.Output(w, nil, err.Error())
	})

	ctx := appengine.NewContext(r)

	r.ParseForm()
	data2 := r.PostForm["Data"][0]
	var fileList []dbfile.DBFile
	err := json.Unmarshal([]byte(data2), &fileList)
	if err != nil {
		tool.Output(w, nil, err.Error())
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
			tool.Output(w, nil, err.Error())
			return
		}
	}
	tool.Output(w, nil, nil)
}
