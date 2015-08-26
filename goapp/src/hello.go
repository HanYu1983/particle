package hello

import (
  "strings"
  "path/filepath"
  "strconv"
  "encoding/json"
  "fmt"
  "appengine"
  "net/http"
  "lib/tool"
  dbfile "lib/db/file"
)

func init(){
  http.HandleFunc("/", handler)
  http.HandleFunc("/proxy", tool.Proxy)
  http.HandleFunc("/dbfile/", DBFileSystem)
}

func handler(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello, world!")
}

func DBFileSystem(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( tool.WriteErrorJson(w) )
  ctx := appengine.NewContext( r )
  
  pathToken := strings.Split(r.URL.Path, "/")
  
  position, err := strconv.ParseInt( pathToken[len(pathToken)-1], 10, 0 )
  tool.Assert( tool.IfError( err ))
  
  WriteList := func( id int64){
    files, err := dbfile.FileList( ctx, id )
    tool.Assert( tool.IfError( err ))
  
    type Info struct {
      Key int64
      Name string
    }
    paths := []Info{}
    for _, file := range files {
      paths = append( paths, Info{ Key:file.Key, Name: file.Name } )
    }
    jsonstr, _ := json.Marshal( paths )
    w.Header().Set("Content-Type", "application/json; charset=utf8")
    fmt.Fprintf(w, "%s", jsonstr)
  }
  
  if position == 0 {
    WriteList( position )
    
    
  } else {
    
    file, err := dbfile.GetFile( ctx, position )
    tool.Assert( tool.IfError( err ))
  
    if file.IsDir {
      WriteList( position )
      
    } else {
      filetype := filepath.Ext( file.Name )[1:]  //delete first "."
      switch filetype {
      case "txt":
        w.Header().Set("Content-Type", "text/plain; charset=utf8")
        fmt.Fprintf(w, "%s", string( file.Content ))
        break;
      
      case "jpg", "jpeg":
        break;
      }
    
    }
  }
  
}