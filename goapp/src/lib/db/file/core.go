package file

import (
  "appengine"
  "appengine/datastore"
  db "lib/db"
)

const Kind = "__dbfile__"

type DBFile struct {
  Key int64
  Position int64
  IsDir bool
  Name string
  Content []byte
}

func MakeFile (ctx appengine.Context, position int64, name string, content []byte) (int64, error) {
  key := db.NewKey( ctx, Kind, nil )
  
  file := DBFile{
    Key: 0,
    Position: position,
    IsDir: false,
    Name: name,
    Content: content,
  }
  
  nkey, err := datastore.Put(ctx, key, &file)
  return nkey.IntID(), err
}

func MakeDir (ctx appengine.Context, position int64, name string) (int64, error){
  key := db.NewKey( ctx, Kind, nil )
  
  file := DBFile{
    Position: position,
    IsDir: true,
    Name: name,
    Content: nil,
  }
  
  nkey, err := datastore.Put(ctx, key, &file)
  return nkey.IntID(), err
}

func FileList (ctx appengine.Context, position int64) ([]DBFile, error) {
  q := db.NewQuery( Kind ).Filter("Position =", position)
  
  var entities []DBFile
  keys, err := q.GetAll(ctx, &entities)
  for idx, _ := range entities {
    entities[idx].Key = keys[idx].IntID()
  }
  
  return entities, err
}

func GetFile (ctx appengine.Context, id int64) (DBFile, error) {
  var file DBFile
  key := db.GetKey( ctx, Kind, id, nil )
  err := datastore.Get(ctx, key, &file)
  return file, err
}