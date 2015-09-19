package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
  "lib/db/file"
  "appengine"
  auth "lib/hack/go-http-auth"
  "lib/game"
)

func Secret(user, realm string) string {
  if user == "hanvicadmin" {
    // password is "91281121"
    return "afd9c0fa03da5ef7f24a4833e0fff439"
  }
  return ""
}

func init(){
  authenticator := auth.NewDigestAuthenticator("dbpublic", Secret)
  dbfileHandler := authenticator.JustCheck(dbfile.DBFileSystem)
  
  game.InitContext( GameContextPosition )
  
  http.HandleFunc("/", handler)
  http.HandleFunc("/proxy", tool.Proxy)
  http.HandleFunc("/dbfile/", dbfileHandler)
  http.HandleFunc("/write", dbfile.WriteFile)
  http.HandleFunc("/simple/save", Save)
  http.HandleFunc("/simple/load", Load)
  http.HandleFunc("/fn/card/user/", game.CreateUser)
  http.HandleFunc("/fn/card/room/", game.CreateRoom)
  http.HandleFunc("/fn/card/enterRoom/", game.EnterRoom)
  http.HandleFunc("/fn/card/message/", game.LeaveMessage)
  http.HandleFunc("/fn/card/clear", game.Clear)
  http.HandleFunc("/fn/card/longPollingTargetMessage", game.LongPollingTargetMessage)
  http.HandleFunc("/fn/card/state", game.State)
  http.HandleFunc("/fn/cardInfo/addCard", AddCard)
  http.HandleFunc("/fn/cardInfo/deleteCard", DeleteCard)
  http.HandleFunc("/fn/cardInfo/cardList", CardList)
  
}

func handler(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello, world!")
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