package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
)

func init(){
  http.HandleFunc("/", handler)
  http.HandleFunc("/proxy", tool.Proxy)
}

func handler(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello, world!")
}
