package dbfile

import (
  "strings"
  "path/filepath"
  "strconv"
  "encoding/json"
  "fmt"
  "appengine"
  "net/http"
  "lib/tool"
)

func WriteFile(w http.ResponseWriter, r *http.Request){
  t := tool.TemplateWithFile("write", "lib/db/file/write.html")
  t.Execute( w, map[string]string{
    "Path": "dbfile/",
  } )
}

func DBFileSystem(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( tool.WriteErrorJson(w) )
  ctx := appengine.NewContext( r )
  
  if r.Method == "POST" {
    form, err := tool.ReadAjaxPost( r )
    tool.Assert( tool.IfError( err ) ) 
    
    if len( form["Delete"] ) > 0 {
      tool.Assert( tool.ParameterIsNotExist( form, "Key" ) )
      key, err := strconv.ParseInt( form["Key"][0], 10, 0 )
      tool.Assert( tool.IfError( err ) ) 
      DeleteFile( ctx, key )
      return
    }
    
    tool.Assert( tool.ParameterIsNotExist( form, "Parent" ) ) 
    tool.Assert( tool.ParameterIsNotExist( form, "Name" ) )
    
    parent, err := strconv.ParseInt( form["Parent"][0], 10, 0 )
    tool.Assert( tool.IfError( err ) ) 
    name := form["Name"][0]
    
    if parent != 0 {
      parentFile, err := GetFile( ctx, parent )
      tool.Assert( tool.IfError( err ) ) 
    
      if parentFile.IsDir == false {
        panic(fmt.Sprintf("%d is not dir", parent))
      }
    }
    
    if len( form["Content"] ) > 0 {
      content := form["Content"][0]
      _, err := MakeFile( ctx, parent, name, []byte(content) )
      tool.Assert( tool.IfError( err ) ) 
      
    } else {
      _, err := MakeDir( ctx, parent, name )
      tool.Assert( tool.IfError( err ) ) 
      
    }
    
    return
  }
  
  pathToken := strings.Split(r.URL.Path, "/")
  
  position, err := strconv.ParseInt( pathToken[len(pathToken)-1], 10, 0 )
  tool.Assert( tool.IfError( err ))
  
  WriteList := func( id int64){
    files, err := FileList( ctx, id )
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
    
    file, err := GetFile( ctx, position )
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