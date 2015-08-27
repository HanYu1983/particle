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
  
  // post的話，執行新增檔案或新增資料夾
  if r.Method == "POST" {
    form, err := tool.ReadAjaxPost( r )
    tool.Assert( tool.IfError( err ) ) 
    
    // 若有Delete參數，執行刪除
    if len( form["Delete"] ) > 0 {
      tool.Assert( tool.ParameterIsNotExist( form, "Key" ) )
      key, err := strconv.ParseInt( form["Key"][0], 10, 0 )
      tool.Assert( tool.IfError( err ) ) 
      DeleteFile( ctx, key )
      return
    }
    
    // 執行新增
    tool.Assert( tool.ParameterIsNotExist( form, "Parent" ) ) 
    tool.Assert( tool.ParameterIsNotExist( form, "Name" ) )
    
    parent, err := strconv.ParseInt( form["Parent"][0], 10, 0 )
    tool.Assert( tool.IfError( err ) ) 
    name := form["Name"][0]
    
    // 0代表最頂層，所以不必判斷
    // 非0的話則判斷該資料夾在不在
    if parent != 0 {
      parentFile, err := GetFile( ctx, parent )
      tool.Assert( tool.IfError( err ) ) 
    
      if parentFile.IsDir == false {
        panic(fmt.Sprintf("%d is not dir", parent))
      }
    }
    
    // 有Content參數代表要建檔案，不然為建資料夾
    if len( form["Content"] ) > 0 {
      tool.Assert( tool.ParameterIsNotExist( form, "Override" ) ) 
      content := form["Content"][0]
      var override bool
      if form["Override"][0] == "on" {
        override = true
      } else {
        override = false
      }
      _, err := MakeFile( ctx, parent, name, []byte(content), override )
      tool.Assert( tool.IfError( err ) ) 
      
    } else {
      _, err := MakeDir( ctx, parent, name )
      tool.Assert( tool.IfError( err ) ) 
      
    }
    
    return
  }
  
  // get為顯示資料
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
      case "txt", "json":
        w.Header().Set("Content-Type", "text/plain; charset=utf8")
        fmt.Fprintf(w, "%s", string( file.Content ))
        break;
      
      case "jpg", "jpeg":
        break;
      }
    
    }
  }
  
}