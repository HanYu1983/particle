// 之後要使用compress/gzip的壓縮技術減少資料大小
package db2

import (
	"archive/zip"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"path/filepath"
	"strings"
	"time"

	"github.com/HanYu1983/gomod/lib/abstract"
	"github.com/HanYu1983/gomod/lib/tool"

	"google.golang.org/appengine"
	"google.golang.org/appengine/datastore"
)

type DBFile struct {
	Name    string
	Content []byte
	Owner   string
	Time    int64
}

const (
	Kind      = "dbfile2"
	AdminKind = "dbfile2-admin"
)

var (
	ErrFileExist = errors.New("db2: file exist!")
)

func AncestorKey(ctx context.Context) *datastore.Key {
	return datastore.NewKey(ctx, AdminKind, "han", 0, nil)
}

func GetFile(ctx context.Context, filename string) (*DBFile, error) {
	q := datastore.NewQuery(Kind).Ancestor(AncestorKey(ctx)).Filter("Name =", filename).KeysOnly()
	keys, err := q.GetAll(ctx, nil)
	if err != nil {
		return nil, err
	}
	if len(keys) > 1 {
		// ctx.Infof("length shouldn't more then 1")
	}
	if len(keys) == 0 {
		return nil, nil
	}
	var file DBFile
	err = datastore.Get(ctx, keys[0], &file)
	return &file, err
}

func GetFileList(ctx context.Context, filename string, filterLayer bool) ([]DBFile, error) {
	isAccept := func(file *DBFile) bool {
		accept := true
		if strings.Index(file.Name, filename) != 0 {
			accept = false
		}
		return accept
	}

	q := datastore.NewQuery(Kind).Ancestor(AncestorKey(ctx)).Order("-Time")

	var ret []DBFile
	t := q.Run(ctx)
	for {
		var file DBFile
		_, err := t.Next(&file)
		if err == datastore.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		accept := true
		if filterLayer {
			accept = isAccept(&file)
		}
		if accept {
			ret = append(ret, file)
		}
	}

	return ret, nil
}

func DeleteWithoutTransaction(ctx context.Context, filename string) error {
	q := datastore.NewQuery(Kind).Ancestor(AncestorKey(ctx)).Filter("Name =", filename).KeysOnly()
	keys, err := q.GetAll(ctx, nil)
	if err != nil {
		return err
	}
	if len(keys) > 1 {
		// ctx.Infof("length shouldn't more then 1")
	}
	if len(keys) == 0 {
		return nil
	}
	err = datastore.Delete(ctx, keys[0])
	if err != nil {
		return err
	}
	return nil
}

func Delete(ctx context.Context, filename string) error {
	err := tool.WithTransaction(ctx, 3, func(ctx context.Context) error {
		return DeleteWithoutTransaction(ctx, filename)
	})
	return err
}

func WriteFileWithoutTransaction(ctx context.Context, filename string, content []byte, owner string, override bool) error {
	// 取出若已存在的檔案
	q := datastore.NewQuery(Kind).Ancestor(AncestorKey(ctx)).Filter("Name =", filename)
	var list []DBFile
	keys, err := q.GetAll(ctx, &list)
	if err != nil {
		return err
	}

	// 處理檔案已存在
	if len(keys) > 0 {
		if override == false {
			return ErrFileExist
		}
	}

	// 若檔案已存在，取得原檔案
	var key *datastore.Key
	var file DBFile
	if len(keys) > 0 {
		key = keys[0]
		file = list[0]
	}

	file.Name = filename
	file.Content = content
	file.Owner = owner
	file.Time = time.Now().Unix()

	if key == nil {
		key = datastore.NewIncompleteKey(ctx, Kind, AncestorKey(ctx))
	}

	_, err = datastore.Put(ctx, key, &file)
	if err != nil {
		return err
	}
	return nil
}

func WriteFile(ctx context.Context, filename string, content []byte, owner string, override bool) error {
	err := tool.WithTransaction(ctx, 3, func(ctx context.Context) error {
		return WriteFileWithoutTransaction(ctx, filename, content, owner, override)
	})
	return err
}

func GetMemento(ctx context.Context) ([]byte, error) {
	list, err := GetFileList(ctx, "", false)
	if err != nil {
		return nil, err
	}
	jsonstr, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return jsonstr, nil
}

func SetMemento(ctx context.Context, memento []byte) error {
	var list []DBFile
	err := json.Unmarshal(memento, &list)
	if err != nil {
		return err
	}
	for _, file := range list {
		key := datastore.NewIncompleteKey(ctx, Kind, AncestorKey(ctx))
		_, err = datastore.Put(ctx, key, &file)
		if err != nil {
			return err
		}
	}
	return nil
}

func HandleMemento(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		w.Header().Set("Content-Type", "application/json; charset=utf8")
		defer tool.Recover(func(err error) {
			tool.Output(w, nil, err.Error())
		})
		ctx := appengine.NewContext(r)
		r.ParseForm()
		form := r.PostForm

		tool.Assert(tool.ParameterIsNotExist(form, "Data"))
		data := form["Data"][0]
		SetMemento(ctx, []byte(data))
		tool.Output(w, nil, nil)

	} else {
		w.Header().Set("Content-Type", "text/plane; charset=utf8")
		ctx := appengine.NewContext(r)
		data, err := GetMemento(ctx)
		if err != nil {
			panic(err)
		}
		fmt.Fprintf(w, string(data))
	}
}

func HandleClearDataAndDownloadArchive(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	ctx := appengine.NewContext(r)

	buf := &bytes.Buffer{}
	zw := zip.NewWriter(buf)
	data, err := GetMemento(ctx)
	if err != nil {
		fmt.Fprintf(w, "err: %v", err.Error())
		return
	}

	var files = []struct {
		Name, Body string
	}{
		{"data.json", string(data)},
	}

	for _, file := range files {
		f, err := zw.Create(file.Name)
		if err != nil {
			fmt.Fprintf(w, "err: %s!", err.Error())
			return
		}
		_, err = f.Write([]byte(file.Body))
		if err != nil {
			fmt.Fprintf(w, "err: %s!", err.Error())
			return
		}
	}
	// Make sure to check the error on Close.
	err = zw.Close()
	if err != nil {
		fmt.Fprintf(w, "err: %v", err.Error())
		return
	}

	w.Header().Set("Content-Disposition", "attachment; filename=db2.zip")
	w.Header().Set("Content-Type", "application/zip")
	w.Header().Set("Content-Length", fmt.Sprintf("%d", buf.Len()))
	io.Copy(w, buf)

	isClear := len(r.PostForm["Clear"]) > 0

	if isClear {
		q := datastore.NewQuery(Kind).Ancestor(AncestorKey(ctx)).KeysOnly()
		keys, err := q.GetAll(ctx, nil)
		if err != nil {
			// ctx.Infof(err.Error())
		}
		for _, key := range keys {
			err = datastore.Delete(ctx, key)
			if err != nil {
				// tx.Infof(err.Error())
			}
		}
	}
}

func Handler(user abstract.IUser) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json; charset=utf8")
		defer tool.Recover(func(err error) {
			tool.Output(w, nil, err.Error())
		})
		ctx := appengine.NewContext(r)
		r.ParseForm()

		if r.Method == "POST" {
			form := r.PostForm

			//去掉第一個空白和dbfile2
			filePathToken := strings.Split(r.URL.Path, "/")[2:]
			filename := strings.Join(filePathToken, "/")

			//tool.Assert(tool.ParameterIsNotExist(form, "Name"))
			//name := form["Name"][0]

			originFile, err := GetFile(ctx, filename)
			tool.Assert(tool.IfError(err))

			// 判斷權限
			if originFile != nil {
				if user.HasPermission(*originFile) == false {
					tool.Output(w, nil, "you are not owner!")
					return
				}
			}

			// 若有Delete參數，執行刪除
			if len(form["Delete"]) > 0 {

				err := Delete(ctx, filename)
				tool.Assert(tool.IfError(err))
				tool.Output(w, nil, nil)

			} else {
				tool.Assert(tool.ParameterIsNotExist(form, "Content"))

				content := form["Content"][0]
				var override bool
				if len(form["Override"]) > 0 {
					override = true
				}

				err = WriteFile(ctx, filename, []byte(content), user.GetID(), override)
				tool.Assert(tool.IfError(err))
				tool.Output(w, nil, nil)
			}

		} else {
			fns := map[string]func(DBFile){
				"json": func(file DBFile) {
					fmt.Fprintf(w, "%s", string(file.Content))
				},
				"txt": func(file DBFile) {
					w.Header().Set("Content-Type", "text/plain; charset=utf8")
					fmt.Fprintf(w, "%s", string(file.Content))
				},
				"jpg": func(file DBFile) {
					w.Header().Set("Content-Type", "image/jpeg; charset=utf8")
					img := tool.DecodeBase64ToImage(string(file.Content))
					tool.WriteJpg(w, img)
				},
				"png": func(file DBFile) {
					w.Header().Set("Content-Type", "image/png; charset=utf8")
					img := tool.DecodeBase64ToImage(string(file.Content))
					tool.WriteJpg(w, img)
				},
				"zip": func(file DBFile) {
					body := file.Content
					w.Header().Set("Content-Disposition", fmt.Sprintf("attachment; filename=%s", filepath.Base(file.Name)))
					w.Header().Set("Content-Type", "application/zip")
					w.Header().Set("Content-Length", fmt.Sprintf("%d", len(body)))
					io.Copy(w, bytes.NewBuffer(body))
				},
			}

			form := r.Form
			//去掉第一個空白和dbfile2
			filePathToken := strings.Split(r.URL.Path, "/")[2:]
			filename := strings.Join(filePathToken, "/")
			var filetype string
			if len(filepath.Ext(filename)) > 1 {
				filetype = filepath.Ext(filename)[1:] //delete first "."
			}
			outputFn, isSingle := fns[filetype]

			if isSingle {
				file, err := GetFile(ctx, filename)
				tool.Assert(tool.IfError(err))
				if file == nil {
					fmt.Fprintf(w, "file not found")
				} else {
					if user.HasPermission(*file) == false {
						fmt.Fprintf(w, "you are not owner!")
						return
					}
					outputFn(*file)
				}

			} else {
				isDetail := len(form["Detail"]) > 0

				list, err := GetFileList(ctx, filename, true)
				tool.Assert(tool.IfError(err))

				infos := []map[string]interface{}{}
				for _, file := range list {
					if user.HasPermission(file) == false {
						continue
					}
					info := map[string]interface{}{
						"Name": file.Name,
						"Time": time.Unix(file.Time, 0),
					}
					if isDetail {
						info["Content"] = string(file.Content)
					}
					infos = append(infos, info)
				}
				tool.Output(w, infos, nil)
			}
		}
	}
}
