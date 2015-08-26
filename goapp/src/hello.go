package hello

import (
  "fmt"
  "net/http"
  "lib/tool"
  "lib/db/file"
)

func init(){
  http.HandleFunc("/", handler)
  http.HandleFunc("/proxy", tool.Proxy)
  http.HandleFunc("/dbfile/", dbfile.DBFileSystem)
  http.HandleFunc("/write", dbfile.WriteFile)
}

func handler(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello, world!")
}

