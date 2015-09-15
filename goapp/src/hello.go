package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
  "lib/db/file"
  "appengine"
  auth "lib/hack/go-http-auth"
  "lib/game"
  "appengine/datastore"
)

type Counter struct {
    Count int
}

func TestTransaction(w http.ResponseWriter, r *http.Request) {
    c := appengine.NewContext(r)

    key := datastore.NewKey(c, "Counter", "mycounter", 0, nil)
    var _ = key
    count := new(Counter)
    var _ = count
    
    //key2 := datastore.NewKey(c, dbfile.Kind, "", 5629499534213120, nil)
    //var file dbfile.DBFile
    
    var option datastore.TransactionOptions
    option.XG = true
    
    err := datastore.RunInTransaction(c, func(c appengine.Context) error {
      /*
      gameCtx, err := game.LoadGameContext( c )
      c.Infof("====:%+v", gameCtx)
      if err != nil {
        return err
      }
      msg := game.Message{FromUser: "fbid", ToUser: "targetUser", Content: "content" }
      gameCtx.LeaveMessage( msg )
  
      err = game.SaveGameContext( c, gameCtx )
      c.Infof(">>>>:%+v", gameCtx)
      return err
      */
      /*
      files, _, err3 := dbfile.QueryKeys( c, 0, "root" )
      if err3 != nil {
        return err3
      }
      c.Infof("%v", files)
      */
      /*
      if len( files ) == 0 {
        return Context{}, errors.New("root dir isn't exist")
      }
  
      rootDir := files[0].Key
  
      files, _, err = dbfile.QueryKeys( ctx, rootDir, "card" )
      if err != nil {
        return Context{}, err
      }
      */
      gameCtx, err4 := game.LoadGameContext( c )
      c.Infof("====:%+v", gameCtx)
      if err4 != nil {
        return err4
      }
      /*
        file, err2 := dbfile.GetFile( c, 6192449487634432 )
        c.Infof("%v", string(file.Content))
        if err2 != nil {
          return err2
        }*/
        
        err := datastore.Get(c, key, count)
        c.Infof("====:%+v", count)
        if err != nil && err != datastore.ErrNoSuchEntity {
            return err
        }
        count.Count++
        _, err = datastore.Put(c, key, count)
        c.Infof(">>>>:%+v", count)
        return err
        
    }, &option)
    if err != nil {
        c.Errorf("Transaction failed: %v", err)
        TestTransaction(w, r)
        //http.Error(w, "Internal Server Error", 500)
        return
    }

    fmt.Fprintf(w, "Current count: %d", count.Count)
}

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
  
  http.HandleFunc("/fn/test/TestTransaction", TestTransaction)
  //http.HandleFunc("/fn/test/TestQueue", TestQueue)
  //http.HandleFunc("/fn/worker", TestQueue)
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