package db2

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"errors"
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
		q = q.Filter("Name >", filename)
	}
	var list []DBFile
	_, err := q.GetAll(ctx, &list)
	if err != nil {
		return nil, err
	}
	return list, nil
}

func WriteFile(ctx appengine.Context, filename string, content string, owner string, override bool) error {
	originFile, err := GetFile(ctx, filename)
	if err != nil {
		return err
	}
	if originFile != EmptyFile {
		if override == false {
			return ErrFileExist
		}
	}
	file := DBFile{
		Name:    filename,
		Content: content,
		Owner:   owner,
		Time:    time.Now().Unix(),
	}
	key := datastore.NewIncompleteKey(ctx, Kind, AncestorKey(ctx))
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
