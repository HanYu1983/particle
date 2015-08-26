package bdd

import (
  "fmt"
  "testing"
  "appengine"
  "appengine/aetest"
  "lib/bdd"
  _ "appengine/datastore"
  dbfile "lib/db/file"
  _ "lib/db"
)

func TestSuit(t *testing.T){
  c, err := aetest.NewContext(nil)
  if err != nil { t.Fatal(err) }
  defer c.Close()
  
  It := bdd.GenIt( c, t )
  
  DBFileSystem( It )
}

func DBFileSystem ( It bdd.ItFn ){
  
  var keyId int64
  
  It( "create file to root", func( ctx appengine.Context ){
    
    var err error
    keyId, err = dbfile.MakeFile( ctx, 0, "test.txt", []byte("ahaha"))
    
    if err != nil {
      panic( err )
    }
    
    // 不get以前，是無法GetAll的，非常奇怪
    file, err := dbfile.GetFile( ctx, keyId )
    if err != nil {
      panic( err )
    }
    
    if file.Name != "test.txt" {
      panic( fmt.Sprintf("wrong name: %s", file.Name))
    }
    
    files, err := dbfile.FileList( ctx, 0 )
    
    if err != nil {
      panic( err )
    }
    
    if len( files ) != 1 {
      panic( fmt.Sprintf("file count not right %d", len(files) ) )
    }
    
    if files[0].Name != "test.txt" {
      panic( fmt.Sprintf("wrong name: %s", files[0].Name))
    }
    
  })
  
  It( "make dir and save to dir", func(ctx appengine.Context){
    
    dirPosition, err := dbfile.MakeDir( ctx, 0, "dir" )
    
    if err != nil {
      panic( err )
    }
    
    if file, _ := dbfile.GetFile( ctx, dirPosition ); file.IsDir == false {
      panic( "should be dir" )
    }
    
    k1, err := dbfile.MakeFile( ctx, dirPosition, "wow.txt", []byte("ahaha") )
    k2, err := dbfile.MakeFile( ctx, dirPosition, "wow2.txt", []byte("ahaha") )
    
    dbfile.GetFile( ctx, k1 )
    dbfile.GetFile( ctx, k2 )
    
    files, err := dbfile.FileList( ctx, dirPosition )
    if len( files ) != 2 {
      panic( fmt.Sprintf("file count not right %d", len(files) ) )
    }
    
    if files[0].Name != "wow2.txt" {
      panic( fmt.Sprintf("wrong name: %s", files[0].Name))
    }
    
    if files[1].Name != "wow.txt" {
      panic( fmt.Sprintf("wrong name: %s", files[1].Name))
    }
    
  })
  
}