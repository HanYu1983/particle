package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
  "lib/db/file"
  "appengine"
  "encoding/json"
)

func Output(w http.ResponseWriter, info, err interface{}){
  ret := map[string]interface{}{
    "Info": info,
    "Error": err,
  }
  jsonstr, _ := json.Marshal( ret )
  fmt.Fprintf(w, "%s", string( jsonstr ))
}

var rootDir int64

func SetUserPosition(dir int64){
  rootDir = dir
}

func SaveToUser(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "AccessToken" ) )
  
  fbid := form["FBID"][0]
  accessToken := form["AccessToken"][0]
  _, err = tool.AuthFB( ctx, fbid, accessToken )
  tool.Assert( tool.IfError( err ) ) 
  
  tool.Assert( tool.ParameterIsNotExist( form, "FileName" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "Data" ) ) 
  
  files, _, err := dbfile.QueryKeys( ctx, rootDir, fbid )
  tool.Assert( tool.IfError( err ) ) 
  
  var userDir int64
  if len( files ) == 0 {
    userDir, err = dbfile.MakeDir( ctx, rootDir, fbid )
  } else {
    userDir = files[0].Key
  }
  
  fileName := form["FileName"][0]
  data := form["Data"][0]
  
  _, err = dbfile.MakeFile( ctx, userDir, fileName, []byte(data), true )
  tool.Assert( tool.IfError( err ) ) 
  
  Output( w, nil, nil )
}

func LoadFormUser(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( func(err error){
    Output( w, nil, err.Error() )
  })
  
  ctx := appengine.NewContext( r )
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "AccessToken" ) )
  
  fbid := form["FBID"][0]
  accessToken := form["AccessToken"][0]
  _, err = tool.AuthFB( ctx, fbid, accessToken )
  tool.Assert( tool.IfError( err ) ) 
  
  tool.Assert( tool.ParameterIsNotExist( form, "FileName" ) ) 
  
  files, _, err := dbfile.QueryKeys( ctx, rootDir, fbid )
  tool.Assert( tool.IfError( err ) ) 
  
  if len( files ) == 0 {
    fmt.Fprintf(w, "%s", "")
    return
  }
  
  userDir := files[0].Key
  fileName := form["FileName"][0]
  
  files, _, err = dbfile.QueryKeys( ctx, userDir, fileName )
  tool.Assert( tool.IfError( err ) ) 
  
  if len( files ) == 0 {
    fmt.Fprintf(w, "%s", "")
    return
  }
  
  fmt.Fprintf(w, "%s", string( files[0].Content ))
}

func Load(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( tool.WriteErrorJson(w) )
  ctx := appengine.NewContext( r )
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "AccessToken" ) )
  
  fbid := form["FBID"][0]
  accessToken := form["AccessToken"][0]
  _, err = tool.AuthFB( ctx, fbid, accessToken )
  tool.Assert( tool.IfError( err ) ) 
  
  tool.Assert( tool.ParameterIsNotExist( form, "Target" ) ) 
  target := form["Target"][0]
  
  files, _, err := dbfile.QueryKeys( ctx, 0, "root" )
  tool.Assert( tool.IfError( err ) ) 
  rootDir := files[0].Key
  
  files, _, err = dbfile.QueryKeys( ctx, rootDir, target )
  tool.Assert( tool.IfError( err ) ) 
  targetDir := files[0].Key
  
  files, _, err = dbfile.QueryKeys( ctx, targetDir, fbid )
  tool.Assert( tool.IfError( err ) ) 
  userDir := files[0].Key
  
  files, _, err = dbfile.QueryKeys( ctx, userDir, "save.json" )
  tool.Assert( tool.IfError( err ) ) 
  fmt.Fprintf(w, "%s", string( files[0].Content ))
}

func Save(w http.ResponseWriter, r *http.Request){
  defer tool.Recover( tool.WriteErrorJson(w) )
  ctx := appengine.NewContext( r )
  
  form, err := tool.ReadAjaxPost( r )
  tool.Assert( tool.IfError( err ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "FBID" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "AccessToken" ) )
  
  fbid := form["FBID"][0]
  accessToken := form["AccessToken"][0]
  _, err = tool.AuthFB( ctx, fbid, accessToken )
  tool.Assert( tool.IfError( err ) ) 
  
  tool.Assert( tool.ParameterIsNotExist( form, "Target" ) ) 
  tool.Assert( tool.ParameterIsNotExist( form, "Data" ) ) 
  target := form["Target"][0]
  
  data := form["Data"][0]
  
  files, _, err := dbfile.QueryKeys( ctx, 0, "root" )
  tool.Assert( tool.IfError( err ) ) 
  rootDir := files[0].Key
  
  files, _, err = dbfile.QueryKeys( ctx, rootDir, target )
  tool.Assert( tool.IfError( err ) ) 
  targetDir := files[0].Key
  
  // mkdir的error先忽略，因為會重覆建同名的dir
  userDir, _ := dbfile.MakeDir( ctx, targetDir, fbid )
  
  _, err = dbfile.MakeFile( ctx, userDir, "save.json", []byte(data), true )
  tool.Assert( tool.IfError( err ) ) 
  
  fmt.Fprintf(w, "%s", "{}")
}