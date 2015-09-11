package hello

type Room struct{
  Key string
}

type User struct{
  Key string
  Room Room
}

type Context struct{
  Rooms []Room
  Users []User
}

var EmptyUser User
var EmptyRoom Room

func (ctx *Context) Room (key string) Room {
  for _, room := range ctx.Rooms {
    if room.Key == key {
      return room
    }
  }
  room := Room{key}
  ctx.Rooms = append( ctx.Rooms, room )
  return room
}

func (ctx *Context) UsersInRoom (targetRoom Room) []User {
  var users []User
  for _, user := range ctx.Users {
    if user.Room == targetRoom {
      users = append( users, user )
    }
  }
  return users
}

func (ctx *Context) DeleteRoomIfNoUsers () {
  var rooms []Room
  for _, room := range ctx.Rooms {
    if len( ctx.UsersInRoom( room ) ) != 0 {
      rooms = append( rooms, room )
    }
  }
  ctx.Rooms = rooms
}

func (ctx *Context) User (key string) User {
  for _, user := range ctx.Users {
    if user.Key == key {
      return user
    }
  }
  user := User{key, EmptyRoom}
  ctx.Users = append( ctx.Users, user )
  return user
}

func (ctx *Context) EditUser (target User) {
  for i, user := range ctx.Users {
    if user.Key == target.Key {
      ctx.Users[i] = user
    }
  }
}
