package app

import (
	"appengine"
	"appengine/datastore"
	"archive/zip"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"lib/db/file"
	"lib/db2"
	"net/http"
)

func TestZip(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	ctx.Infof("start", "")

	buf := &bytes.Buffer{}
	zw := zip.NewWriter(buf)

	var files = []struct {
		Name, Body string
	}{
		{"readme.txt", "This archive contains some text files."},
		{"gopher.txt", "Gopher names:\nGeorge\nGeoffrey\nGonzo"},
		{"todo.txt", "Get animal handling licence.\nWrite more examples."},
	}
	for _, file := range files {
		f, err := zw.Create(file.Name)
		if err != nil {
			fmt.Fprintf(w, "err: %s!", err.Error())
		}
		_, err = f.Write([]byte(file.Body))
		if err != nil {
			fmt.Fprintf(w, "err: %s!", err.Error())
		}
	}
	// Make sure to check the error on Close.
	err := zw.Close()
	if err != nil {
		fmt.Fprintf(w, `err: %s!`, err.Error())
	}

	ctx.Infof("header")

	w.Header().Set("Content-Disposition", "attachment; filename=Wiki.zip")
	w.Header().Set("Content-Type", "application/zip")
	w.Header().Set("Content-Length", fmt.Sprintf("%d", buf.Len()))

	ctx.Infof("write")

	io.Copy(w, buf)
	ctx.Infof("end")
}

func TestReadFile(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadFile("snapshot.json")
	if err != nil {
		fmt.Fprintf(w, `err: %s!`, err.Error())
	}
	fmt.Fprintf(w, `data: %s!`, string(data))
}

func Memento(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	data, err := dbfile.GetMemento(ctx)
	if err != nil {
		fmt.Fprintf(w, `err: %s!`, err.Error())
	}
	fmt.Fprintf(w, "data: %s", string(data))
}

func TestWriteSnaphot(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)

	data2, err := ioutil.ReadFile("snapshot.json")
	var fileList []dbfile.DBFile
	err = json.Unmarshal(data2, &fileList)
	if err != nil {
		fmt.Fprintf(w, `err: %s!`, err.Error())
	}

	//fmt.Fprintf(w, "list:%#v", string(fileList[0].Content))

	ak := datastore.NewKey(ctx, "dbfile-admin", "han", 0, nil)
	q := datastore.NewQuery(dbfile.Kind).Ancestor(ak)
	var entities []dbfile.DBFile
	keys, err := q.GetAll(ctx, &entities)
	if err != nil {
		fmt.Fprintf(w, `err: %s!`, err.Error())
	}
	for _, key := range keys {
		err = datastore.Delete(ctx, key)
		if err != nil {
			fmt.Fprintf(w, `err: %s!`, err.Error())
		}
	}

	mapping := map[int64]int64{}

	findParent := func(file dbfile.DBFile) *dbfile.DBFile {
		var parentFile *dbfile.DBFile
		for i, currFile := range fileList {
			if currFile.Key == file.Position {
				parentFile = &fileList[i]
				break
			}
		}
		return parentFile
	}

	var writeFile func(file dbfile.DBFile) (int64, error)
	writeFile = func(file dbfile.DBFile) (int64, error) {
		filekey := file.Key
		origin := mapping[filekey]
		if origin == 0 {
			// 如果有父層，就遞迴寫入父層
			if file.Position > 0 {
				parentFile := findParent(file)
				if parentFile != nil {
					parentKey, err := writeFile(*parentFile)
					if err != nil {
						return 0, err
					}
					// 將位置更新為新寫入的Key
					file.Position = parentKey
				}
			}
			// 存入
			key := datastore.NewIncompleteKey(ctx, dbfile.Kind, ak)
			nkey, err := datastore.Put(ctx, key, &file)
			if err != nil {
				return 0, err
			}

			// 更新Key, 讓子層可以正確的得到父層的Key. 其它沒有作用，Key會在取得資料時重設
			file.Key = nkey.IntID()
			mapping[filekey] = nkey.IntID()
			return nkey.IntID(), err
		}
		return origin, nil
	}

	for _, file := range fileList {
		_, err := writeFile(file)
		if err != nil {
			fmt.Fprintf(w, `err: %s!`, err.Error())
		}
	}
}

func TestWriteSnaphot2(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)

	data2, err := ioutil.ReadFile("snapshot.json")
	var fileList []dbfile.DBFile
	err = json.Unmarshal(data2, &fileList)
	if err != nil {
		fmt.Fprintf(w, `err: %s!`, err.Error())
	}

	ak2 := db2.AncestorKey(ctx)
	q := datastore.NewQuery(db2.Kind).Ancestor(ak2)
	var entities []db2.DBFile
	keys, err := q.GetAll(ctx, &entities)
	if err != nil {
		fmt.Fprintf(w, `err: %s!`, err.Error())
	}
	for _, key := range keys {
		err = datastore.Delete(ctx, key)
		if err != nil {
			fmt.Fprintf(w, `err: %s!`, err.Error())
		}
	}

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
			fmt.Fprintf(w, `err: %s!`, err.Error())
		}
	}
}
