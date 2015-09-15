package hello
/*
import (
    "html/template"
    "net/http"

    "appengine"
    "appengine/datastore"
    "appengine/taskqueue"
)


type Counter struct {
    Name  string
    Count int
}

func TestQueue(w http.ResponseWriter, r *http.Request) {
    c := appengine.NewContext(r)
    if name := r.FormValue("name"); name != "" {
        c.Infof("name:%v", name)
        t := taskqueue.NewPOSTTask("/fn/worker", map[string][]string{"name": {name}})
        if _, err := taskqueue.Add(c, t, ""); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
    }
    q := datastore.NewQuery("Counter")
    var counters []Counter
    if _, err := q.GetAll(c, &counters); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    if err := handlerTemplate.Execute(w, counters); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    // OK
}

func worker(w http.ResponseWriter, r *http.Request) {
  
    c := appengine.NewContext(r)
    name := r.FormValue("name")
    
    key := datastore.NewKey(c, "Counter", name, 0, nil)
    var counter Counter
    if err := datastore.Get(c, key, &counter); err == datastore.ErrNoSuchEntity {
        counter.Name = name
    } else if err != nil {
        c.Errorf("%v", err)
        return
    }
    counter.Name = name
    counter.Count++
    
    if _, err := datastore.Put(c, key, &counter); err != nil {
        c.Errorf("%v", err)
    }
}

var handlerTemplate = template.Must(template.New("xx").Parse(handlerHTML))

const handlerHTML = `
{{range .}}
<p>{{.Name}}: {{.Count}}</p>
{{end}}
<p>Start a new counter:</p>
<form action="/fn/test/TestQueue" method="POST">
<input type="text" name="name">
<input type="submit" value="Add">
</form>
`
*/