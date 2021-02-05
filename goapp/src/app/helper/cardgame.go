package helper

import (
	"fmt"
	"net/http"
	"strings"
)

func GetCardString(w http.ResponseWriter, r *http.Request) {
	txt := r.FormValue("txt")
	var notFound string
	if txt == notFound {
		fmt.Fprintf(w, "%s", "txt not found")
		return
	}
	tokens := strings.Split(txt, "|")
	var finalIds []string
	var times = 1
	for _, token := range tokens {
		if len(token) == 0 {
			times++
			continue
		}
		ids := strings.Split(token, ",")
		for i := 0; i < times; i++ {
			finalIds = append(finalIds, ids...)
		}
		times++
	}
	ret := "\"" + strings.Join(finalIds, "\",\"") + "\""
	fmt.Fprintf(w, "%s", ret)
}
