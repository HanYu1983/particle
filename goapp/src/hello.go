package hello

import (
	"fmt"
	"net/http"
)

func init(){
	http.HandleFunc("/", handler)
	http.HandleFunc("/proxy", Proxy)
}

func handler(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello, world!")
}
