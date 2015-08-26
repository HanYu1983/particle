package hello

import (
  "appengine"
  "appengine/datastore"
)

type GetFn func(ctx appengine.Context, keys []*datastore.Key)(ret []interface{}, err error)
type GetAllFn func(ctx appengine.Context, q *datastore.Query)(ret []interface{}, keys []*datastore.Key, err error ) 

func NewKey(ctx appengine.Context, kind string, parent *datastore.Key) *datastore.Key {
  return datastore.NewIncompleteKey(ctx, kind, parent) 
}

func GetKey(ctx appengine.Context, kind string, key int64, parent *datastore.Key) *datastore.Key{
  return datastore.NewKey(ctx, kind, "", key, parent) 
}

func NewQuery(kind string) *datastore.Query {
  return datastore.NewQuery(kind)
}

func Create(ctx appengine.Context, key *datastore.Key, po interface{}) *datastore.Key {
  retkey, err := datastore.Put(ctx, key, &po)
  if err != nil {
    panic(err.Error())
  }
  return retkey
}

func Update(ctx appengine.Context, key *datastore.Key, po interface{}) *datastore.Key{
  return Create( ctx, key, po )
}

func Read(ctx appengine.Context, key *datastore.Key, fn GetFn) interface{}{
  ret := ReadMulti(ctx, []*datastore.Key{key}, fn)
  if len(ret) > 0{
    return ret[0]
  }else{
    return nil
  }
}

func ReadMulti(ctx appengine.Context, keys []*datastore.Key, fn GetFn) []interface{}{
  ret, err := fn(ctx, keys)
  if err != nil {
    panic(err.Error())
  }
  return ret
}

func Delete(ctx appengine.Context, key *datastore.Key){
  err := datastore.Delete(ctx, key)
  if err != nil {
    panic(err.Error())
  }
}

func ReadAll(ctx appengine.Context, query *datastore.Query, fn GetAllFn) []interface{}{
  pos, _, err := fn( ctx, query )
  if err != nil {
    panic( err.Error() )
  }
  return pos
}