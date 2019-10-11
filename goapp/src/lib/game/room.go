package game

import (
  "time"
)

type Message struct {
  Time time.Time
  FromUser string
  ToUser string
  ToRoom string
  Content string
}

type ByTime []Message
func (a ByTime) Len() int           { return len(a) }
func (a ByTime) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByTime) Less(i, j int) bool { return a[i].Time.Before( a[j].Time ) }

type Room struct{
  Key string
  Name string
}

type User struct{
  Key string
  Name string
  Room string
}

type Context struct{
  Rooms []Room
  Users []User
  Messages []Message
}

var (
  EmptyUser User
  EmptyRoom Room
  EmptyMessage Message
)

func (ctx *Context) Room (key string) Room {
  for _, room := range ctx.Rooms {
    if room.Key == key {
      return room
    }
  }
  room := EmptyRoom
  room.Key = key
  ctx.Rooms = append( ctx.Rooms, room )
  return room
}

func (ctx *Context) UsersInRoom (targetRoom Room) []User {
  var users []User
  for _, user := range ctx.Users {
    if user.Room == targetRoom.Key {
      users = append( users, user )
    }
  }
  return users
}

func (ctx *Context) DeleteRoomIfNoUser () {
  var rooms []Room
  for _, room := range ctx.Rooms {
    if len( ctx.UsersInRoom( room ) ) != 0 {
      rooms = append( rooms, room )
    }
  }
  ctx.Rooms = rooms
}

func (ctx *Context) FindUser ( key string ) User {
  for _, user := range ctx.Users {
    if user.Key == key {
      return user
    }
  }
  return EmptyUser
}

func (ctx *Context) User (key string) User {
  findUser := ctx.FindUser( key )
  if findUser != EmptyUser {
    return findUser
  }
  user := findUser
  user.Key = key
  ctx.Users = append( ctx.Users, user )
  return user
}

func (ctx *Context) EditUser (target User) {
  for i, user := range ctx.Users {
    if user.Key == target.Key {
      ctx.Users[i] = target
    }
  }
}

func (ctx *Context) EditRoom (target Room) {
  for i, room := range ctx.Rooms {
    if room.Key == target.Key {
      ctx.Rooms[i] = target
    }
  }
}

func (ctx *Context) LeaveMessage (msg Message){
  ctx.Messages = append( ctx.Messages, msg )
}

func (ctx *Context) MessagesInRoom (room Room) []Message{
  var msgs []Message
  for _, msg := range ctx.Messages {
    if msg.ToRoom == room.Key {
      msgs = append( msgs, msg )
    }
  }
  return msgs
}

func (ctx *Context) MessagesToUser (user User) []Message{
  var msgs []Message
  for _, msg := range ctx.Messages {
    if msg.ToUser == user.Key {
      msgs = append( msgs, msg )
    }
  }
  return msgs
}

func (ctx *Context) DeleteMessage (dmsgs []Message){
  var msgs []Message
  for _, msg := range ctx.Messages {
    var shouldDelete bool
    for _, dmsg := range dmsgs {
      if msg == dmsg {
        shouldDelete = true
        break
      }
    }
    if shouldDelete == false {
      msgs = append( msgs, msg )
    }
  }
  ctx.Messages = msgs
}