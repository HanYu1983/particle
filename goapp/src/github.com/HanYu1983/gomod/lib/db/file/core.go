package dbfile

import (
	"context"
	"encoding/json"
	"errors"
	"time"

	db "github.com/HanYu1983/gomod/lib/db"

	"google.golang.org/appengine/datastore"
)

// Kind不能使用__xxx__雙底線！！！是保留字。正式機會存取不到db
const Kind = "dbfile"

type DBFile struct {
	Key      int64
	Position int64
	IsDir    bool
	Name     string
	Content  []byte
	Owner    string
	Time     int64
}

func AncestorKey(ctx context.Context) *datastore.Key {
	return datastore.NewKey(ctx, "dbfile-admin", "han", 0, nil)
}

func QueryKeys(ctx context.Context, position int64, name string) ([]DBFile, []*datastore.Key, error) {
	akey := datastore.NewKey(ctx, "dbfile-admin", "han", 0, nil)
	q := db.NewQuery(Kind).Ancestor(akey).Filter("Position =", position).Filter("Name =", name)

	var entities []DBFile
	keys, err := q.GetAll(ctx, &entities)
	for idx, _ := range entities {
		entities[idx].Key = keys[idx].IntID()
	}
	return entities, keys, err
}

func MakeFile(ctx context.Context, position int64, name string, content []byte, override bool, owner string) (int64, error) {

	// 0 代表為桌面，不必檢查
	if position != 0 {
		_, err := GetFile(ctx, position)
		if err != nil {
			return 0, err
		}
	}

	file := DBFile{
		Key:      0,
		Position: position,
		IsDir:    false,
		Name:     name,
		Content:  content,
		Owner:    owner,
		Time:     time.Now().Unix(),
	}

	_, keys, err := QueryKeys(ctx, position, name)
	if err != nil {
		return 0, err
	}

	var key *datastore.Key

	if len(keys) > 0 {
		if override == false {
			return keys[0].IntID(), errors.New("file exists!")

		} else {
			key = keys[0]

		}

	} else {
		akey := datastore.NewKey(ctx, "dbfile-admin", "han", 0, nil)
		key = db.NewKey(ctx, Kind, akey)

	}

	nkey, err := datastore.Put(ctx, key, &file)
	return nkey.IntID(), err
}

func MakeDir(ctx context.Context, position int64, name string, owner string) (int64, error) {

	// 0 代表為桌面，不必檢查
	if position != 0 {
		_, err := GetFile(ctx, position)
		if err != nil {
			return 0, err
		}
	}

	file := DBFile{
		Position: position,
		IsDir:    true,
		Name:     name,
		Content:  nil,
		Owner:    owner,
		Time:     time.Now().Unix(),
	}

	_, keys, err := QueryKeys(ctx, position, name)
	if err != nil {
		return 0, err
	}

	if len(keys) > 0 {
		return keys[0].IntID(), errors.New("file exists!")
	}

	akey := datastore.NewKey(ctx, "dbfile-admin", "han", 0, nil)
	key := db.NewKey(ctx, Kind, akey)
	nkey, err := datastore.Put(ctx, key, &file)
	return nkey.IntID(), err
}

func FileList(ctx context.Context, position int64) ([]DBFile, error) {
	akey := datastore.NewKey(ctx, "dbfile-admin", "han", 0, nil)
	q := db.NewQuery(Kind).Ancestor(akey)
	if position > -1 {
		q = q.Filter("Position =", position)
	}
	var entities []DBFile
	keys, err := q.GetAll(ctx, &entities)
	for idx, _ := range entities {
		entities[idx].Key = keys[idx].IntID()
	}

	return entities, err
}

func GetFile(ctx context.Context, id int64) (DBFile, error) {
	var file DBFile
	akey := datastore.NewKey(ctx, "dbfile-admin", "han", 0, nil)
	key := db.GetKey(ctx, Kind, id, akey)
	err := datastore.Get(ctx, key, &file)
	return file, err
}

func DeleteFile(ctx context.Context, id int64) error {
	file, err := GetFile(ctx, id)
	if err != nil {
		return err
	}
	akey := datastore.NewKey(ctx, "dbfile-admin", "han", 0, nil)

	if file.IsDir {
		files, err := FileList(ctx, id)
		if err != nil {
			return err
		}

		for _, file := range files {
			err := DeleteFile(ctx, file.Key)
			if err != nil {
				return err
			}
		}

		key := db.GetKey(ctx, Kind, id, akey)
		err = datastore.Delete(ctx, key)
		if err != nil {
			return err
		}

	} else {
		key := db.GetKey(ctx, Kind, id, akey)
		err := datastore.Delete(ctx, key)
		if err != nil {
			return err
		}

	}

	return nil

}

func GetMemento(ctx context.Context) ([]byte, error) {
	fileList, err := FileList(ctx, -1)
	if err != nil {
		return nil, err
	}
	var ret []map[string]interface{}
	for _, file := range fileList {
		info := map[string]interface{}{
			"Key":      file.Key,
			"Position": file.Position,
			"IsDir":    file.IsDir,
			"Name":     file.Name,
			"Content":  file.Content,
			"Owner":    file.Owner,
			"Time":     file.Time,
		}
		ret = append(ret, info)
	}
	jsonstr, err := json.Marshal(ret)
	if err != nil {
		return nil, err
	}
	return jsonstr, nil
}

func SetMemento(ctx context.Context, memento []byte) error {
	var fileList []DBFile
	err := json.Unmarshal(memento, &fileList)
	if err != nil {
		return err
	}
	for _, file := range fileList {
		ak := AncestorKey(ctx)
		key := datastore.NewIncompleteKey(ctx, Kind, ak)
		nkey, err := datastore.Put(ctx, key, &file)
		var _, _ = nkey, err
	}
	return nil
}
