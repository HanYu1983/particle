package db2

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"errors"
	"fmt"
	"lib/tool"
	"net/http"
	"strings"
	"time"
)

type DBFile struct {
	Name    string
	Content string
	Owner   string
	Time    int64
}

const (
	Kind      = "dbfile2"
	AdminKind = "dbfile2-admin"
)

var (
	EmptyFile = DBFile{}
)

var (
	ErrFileExist = errors.New("db2: file exist!")
)

func AncestorKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, AdminKind, "han", 0, nil)
}

func GetFile(ctx appengine.Context, filename string) (DBFile, error) {
	q := datastore.NewQuery(Kind).Ancestor(AncestorKey(ctx)).Filter("Name =", filename)
	var list []DBFile
	keys, err := q.GetAll(ctx, &list)
	if err != nil {
		return EmptyFile, err
	}
	if len(keys) > 1 {
		ctx.Infof("length shouldn't more then 1")
	}
	if len(keys) == 0 {
		return EmptyFile, nil
	}
	return list[0], nil
}

func GetFileList(ctx appengine.Context, filename string) ([]DBFile, error) {
	q := datastore.NewQuery(Kind).Ancestor(AncestorKey(ctx))
	if len(filename) > 0 {
		q = q.Filter("Name >=", filename)
	}
	var list []DBFile
	_, err := q.GetAll(ctx, &list)
	if err != nil {
		return nil, err
	}
	var ret []DBFile
	for _, file := range list {
		// 由於Filter的>=不能當成Like使用，必需多加運算式來處理。將階層比較少的去除
		token1 := strings.Split(file.Name, "/")
		token2 := strings.Split(filename, "/")
		if len(token1) >= len(token2) {
			ret = append(ret, file)
		}
	}
	return ret, nil
}

func Delete(ctx appengine.Context, filename string) error {
	q := datastore.NewQuery(Kind).Ancestor(AncestorKey(ctx)).Filter("Name =", filename)
	var list []DBFile
	keys, err := q.GetAll(ctx, &list)
	if err != nil {
		return err
	}
	if len(keys) > 1 {
		ctx.Infof("length shouldn't more then 1")
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

func WriteFile(ctx appengine.Context, filename string, content string, owner string, override bool) error {
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

func GetMemento(ctx appengine.Context) ([]byte, error) {
	list, err := GetFileList(ctx, "")
	if err != nil {
		return nil, err
	}
	jsonstr, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return jsonstr, nil
}

func SetMemento(ctx appengine.Context, memento []byte) error {
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

type IUser interface {
	GetID() string
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

func Handler(user IUser) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json; charset=utf8")
		defer tool.Recover(func(err error) {
			tool.Output(w, nil, err.Error())
		})
		ctx := appengine.NewContext(r)
		r.ParseForm()

		if r.Method == "POST" {
			form := r.PostForm

			// 若有Delete參數，執行刪除
			if len(form["Delete"]) > 0 {
				tool.Assert(tool.ParameterIsNotExist(form, "Name"))
				name := form["Name"][0]

				err := Delete(ctx, name)
				tool.Assert(tool.IfError(err))
				tool.Output(w, nil, nil)

			} else {
				tool.Assert(tool.ParameterIsNotExist(form, "Name"))
				tool.Assert(tool.ParameterIsNotExist(form, "Content"))
				name := form["Name"][0]
				content := form["Content"][0]
				var override bool
				if len(form["Override"]) > 0 {
					override = true
				}
				err := WriteFile(ctx, name, content, user.GetID(), override)
				tool.Assert(tool.IfError(err))
				tool.Output(w, nil, nil)
			}

		} else {
			//去掉第一個空白和dbfile2
			filePathToken := strings.Split(r.URL.Path, "/")[2:]
			filename := strings.Join(filePathToken, "/")

			list, err := GetFileList(ctx, filename)
			tool.Assert(tool.IfError(err))

			infos := []map[string]interface{}{}
			for _, file := range list {
				infos = append(infos, map[string]interface{}{
					"Name":    file.Name,
					"Content": file.Content,
					"Time":    time.Unix(file.Time, 0),
				})
			}

			tool.Assert(tool.IfError(err))
			tool.Output(w, infos, nil)
		}
	}
}
