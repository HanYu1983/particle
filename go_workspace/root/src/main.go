package main

import (
  "particle"
  "github.com/gopherjs/gopherjs/js"
)

type Item struct {
  id int32
}

type People struct {
  name string
  item Item
}

func part ( info *js.Object ){
  println( info.Get("name") )
}

func main (){
  var p People
  p.name = "han"
  
  js.Global.Get("channel").Call("go", p)
  js.Global.Get("channel").Call("go", [2]int{2, 3})
  
  js.Global.Set("app", map[string]interface{}{
    "particle": part,
  })
  
  println(p)
  particle.Main()
  
  
  p2 := p
  p2.name = "vic"
  println(p)
  println(p2)
  println(p == p2)
}