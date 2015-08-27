package dbfile

import (
  "errors"
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

func QueryKeys (ctx appengine.Context, position int64, name string) ([]DBFile, []*datastore.Key, error){
  q := db.NewQuery( Kind ).Filter("Position =", position).Filter("Name =", name)
  
  var entities []DBFile
  keys, err := q.GetAll(ctx, &entities)
  for idx, _ := range entities {
    entities[idx].Key = keys[idx].IntID()
  }
  return entities, keys, err
}

func MakeFile (ctx appengine.Context, position int64, name string, content []byte, override bool) (int64, error) {
  
  file := DBFile{
    Key: 0,
    Position: position,
    IsDir: false,
    Name: name,
    Content: content,
  }
  
  _, keys, err := QueryKeys( ctx, position, name )
  if err != nil {
    return 0, err
  }
  
  var key *datastore.Key
 
  if len( keys ) > 0 {
    if override == false {
      return 0, errors.New("file exists!")
      
    } else {
      key = keys[0]
      
    }
    
  } else {
    key = db.NewKey( ctx, Kind, nil )
    
  }
  
  nkey, err := datastore.Put(ctx, key, &file)
  return nkey.IntID(), err
}

func MakeDir (ctx appengine.Context, position int64, name string) (int64, error){
  file := DBFile{
    Position: position,
    IsDir: true,
    Name: name,
    Content: nil,
  }
  
  _, keys, err := QueryKeys( ctx, position, name )
  if err != nil {
    return 0, err
  }
  
  if len( keys ) > 0 {
    return 0, errors.New("file exists!")
  }
  
  key := db.NewKey( ctx, Kind, nil )
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

func DeleteFile (ctx appengine.Context, id int64) error {
  file, err := GetFile( ctx, id )
  if err != nil {
    return err
  }
  
  if file.IsDir {
    files, err := FileList( ctx, id )
    if err != nil {
      return err
    }
    
    for _, file := range files {
      err := DeleteFile( ctx, file.Key )
      if err != nil {
        return err
      }
    }
    
    key := db.GetKey( ctx, Kind, id, nil )
    err = datastore.Delete( ctx, key )
    if err != nil {
      return err
    }
    
  } else {
    key := db.GetKey( ctx, Kind, id, nil )
    err := datastore.Delete( ctx, key )
    if err != nil {
      return err
    }
    
  }
  
  return nil
  
}