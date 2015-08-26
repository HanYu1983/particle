package tool

import (
  "net/http"
  "appengine"
  "fmt"
)

func Proxy(w http.ResponseWriter, r *http.Request){
  defer Recover(WriteErrorJson(w))

  ctx := appengine.NewContext(r)

  r.ParseForm()

  Assert( ParameterIsNotExist( r.Form, "url" ) )

  url := r.Form["url"][0]

  req, err := GetRequest( url, nil )
  Assert( ifError( err ) )

  res, err := DoRequest( req, ctx )
  Assert( ifError( err ) )

  body, err := ReadAll( res )
  Assert( ifError( err ) )

  w.Header().Set("Cache-Control", fmt.Sprintf("max-age=%d, public", 60* 60* 24))
  fmt.Fprint(w, string(body[:]))
}
