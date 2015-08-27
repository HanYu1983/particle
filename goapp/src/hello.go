package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
  "lib/db/file"
  "appengine"
)

func init(){
  http.HandleFunc("/", handler)
  http.HandleFunc("/proxy", tool.Proxy)
  http.HandleFunc("/dbfile/", dbfile.DBFileSystem)
  http.HandleFunc("/write", dbfile.WriteFile)
  http.HandleFunc("/simple/save", Save)
  http.HandleFunc("/simple/load", Load)
}

func handler(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello, world!")
}

func Load(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( tool.WriteErrorJson(w) )
  ctx := appengine.NewContext( r )
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) ) 
  
  tool.Assert( tool.ParameterIsNotExist( form, "Target" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  
  target := form["Target"][0]
  fbid := form["FBID"][0]
  
  files, _, _ := dbfile.QueryKeys( ctx, 0, "root" )
  rootDir := files[0].Key
  
  files, _, _ = dbfile.QueryKeys( ctx, rootDir, target )
  targetDir := files[0].Key
  
  files, _, _ = dbfile.QueryKeys( ctx, targetDir, fbid )
  userDir := files[0].Key
  
  files, _, _ = dbfile.QueryKeys( ctx, userDir, "save.json" )
  fmt.Fprintf(w, "%s", string( files[0].Content ))
}

func Save(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( tool.WriteErrorJson(w) )
  ctx := appengine.NewContext( r )
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) ) 
  
  tool.Assert( tool.ParameterIsNotExist( form, "Target" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "Data" ) ) 
  
  target := form["Target"][0]
  fbid := form["FBID"][0]
  data := form["Data"][0]
  
  files, _, _ := dbfile.QueryKeys( ctx, 0, "root" )
  rootDir := files[0].Key
  
  files, _, _ = dbfile.QueryKeys( ctx, rootDir, target )
  targetDir := files[0].Key
  
  userDir, _ := dbfile.MakeDir( ctx, targetDir, fbid )
  dbfile.MakeFile( ctx, userDir, "save.json", []byte(data), true )
}