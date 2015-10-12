package auth

import (
  "appengine"
  "net/url"
  "net/http"
  . "lib/tool"
)

type User struct {
  Key string
  Name string
}

func (u *User) HasPermission( target string ) bool {
  if u.Key == "admin" {
    return true
  }
  if target == "" {
    return true
  }
  return u.Key == target
}

type BindUserFunc func( user User )http.HandlerFunc

func WrapFBAuth ( handler BindUserFunc ) http.HandlerFunc {
  return func( w http.ResponseWriter, r *http.Request ){
    defer Recover( func(err error){
      Output( w, nil, err.Error() )
    })
  
    ctx := appengine.NewContext( r )
  
    var form url.Values
    var err error
    
    if r.Method == "POST" { 
      form, err = ReadAjaxPost( r )
      Assert( IfError( err ) )
      
    } else {
      form = r.Form
      
    }
    Assert( ParameterIsNotExist( form, "FBID" ) ) 
    Assert( ParameterIsNotExist( form, "AccessToken" ) )
  
    fbid := form["FBID"][0]
    accessToken := form["AccessToken"][0]
    
    Assert( AssertFBIDIsInvalid( ctx, fbid, accessToken ))
    
    user := User{ fbid, "" }
    handler( user ) ( w, r )
  }
}