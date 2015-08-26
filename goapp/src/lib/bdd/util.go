package bdd

import (
  "fmt"
  "testing"
  "lib/tool"
  "appengine"
)

type ItFn func( msg string, fn func(c appengine.Context) )

func GenIt( ctx appengine.Context, t *testing.T ) ItFn {
  return func( msg string, fn func(c appengine.Context) ){
    defer tool.Recover( func( err error ){
      t.Fatal( fmt.Sprintf("[%s]%s", msg, err.Error()) )
    })
    fn( ctx )
  }
}