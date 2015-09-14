package bdd

import (
  "lib/bdd"
  "lib/game"
  "appengine"
  "fmt"
)

var _ = fmt.Printf

func Room (It bdd.ItFn) {
  var gameCtx game.Context
  
  It( "create room", func( ctx appengine.Context ){
    gameCtx.Room("room1")
    gameCtx.Room("room2")
    gameCtx.Room("room1")
    
    if len(gameCtx.Rooms) != 2 {
      panic( "room's count should be 2" )
    }
  })
  
  It( "create user", func( ctx appengine.Context ){
    gameCtx.User("han")
    gameCtx.User("vic")
    gameCtx.User("han")
    
    if len(gameCtx.Users) != 2 {
      panic( "user's count should be 2" )
    }
  })
  
  It( "user in room", func( ctx appengine.Context ){
    han := gameCtx.User("han")
    room := gameCtx.Room("room1")
    han.Room = room.Key
    gameCtx.EditUser( han )
    
    users := gameCtx.UsersInRoom( room )
    if len( users ) != 1 {
      panic( "user's count in room1 should be 1" )
    }
    
    if users[0] != gameCtx.User("han") {
      panic( "user in room should be han" )
    }
  })
  
  It( "leave room", func( ctx appengine.Context ){
    han := gameCtx.User("han")
    vic := gameCtx.User("vic")
    room := gameCtx.Room("room1")
    han.Room = room.Key
    vic.Room = room.Key
    
    gameCtx.EditUser( han )
    gameCtx.EditUser( vic )
    
    users := gameCtx.UsersInRoom( room )
    if len( users ) != 2 {
      panic( "user's count in room1 should be 2" )
    }
    
    han.Room = ""
    gameCtx.EditUser( han )
    
    users = gameCtx.UsersInRoom( room )
    if len( users ) != 1 {
      panic( "user's count in room1 should be 1" )
    }
    
    if users[0] != gameCtx.User("vic") {
      panic( "user in room should be vic")
    }
    
    vic.Room = ""
    gameCtx.EditUser( vic )
    
    users = gameCtx.UsersInRoom( room )
    if len( users ) != 0 {
      panic( "user's count in room1 should be 1" )
    }
    
  })
  
  It( "message", func( ctx appengine.Context ){
    
    room1 := gameCtx.Room("room1")
    room2 := gameCtx.Room("room2")
    han := gameCtx.User("han")
    
    gameCtx.LeaveMessage( game.Message{Content: "hello", FromUser: han.Key, ToRoom: room1.Key } )
    
    msgs := gameCtx.MessagesInRoom( room1 )
    if len( msgs ) != 1 {
      panic( "msg's count should be 1" )
    }
    
    vic := gameCtx.User("vic")
    gameCtx.LeaveMessage( game.Message{Content: "hello2", FromUser: vic.Key, ToRoom: room1.Key } )
    
    msgs = gameCtx.MessagesInRoom( room1 )
    if len( msgs ) != 2 {
      panic( "msg's count should be 2" )
    }
    
    msgs = gameCtx.MessagesInRoom( room2 )
    if len( msgs ) != 0 {
      panic( "msg's count should be 0" )
    }
    
    gameCtx.Messages = []game.Message{}
  })
  
  It( "message 2", func( ctx appengine.Context ){
    
    han := gameCtx.User("han")
    vic := gameCtx.User("vic")
    var msgs []game.Message
    
    msgs = gameCtx.MessagesToUser( vic )
    if len( msgs ) != 0 {
      panic( "msg's count should be 0" )
    }
    
    gameCtx.LeaveMessage( game.Message{FromUser: han.Key, ToUser: vic.Key, Content: "han" } )
    
    msgs = gameCtx.MessagesToUser( vic )
    if len( msgs ) != 1 {
      panic( "msg's count to vic should be 1" )
    }
    
    gameCtx.LeaveMessage( game.Message{FromUser: vic.Key, ToUser: han.Key, Content: "vic" } )
    
    msgs = gameCtx.MessagesToUser( vic )
    if len( msgs ) != 1 {
      panic( "msg's count to vic should be 1" )
    }
    
    msgs = gameCtx.MessagesToUser( han )
    if len( msgs ) != 1 {
      panic( "msg's count to han should be 1" )
    }
    
    gameCtx.LeaveMessage( game.Message{FromUser: vic.Key, ToUser: han.Key, Content: "vic" } )
    
    if len( gameCtx.Messages ) != 3 {
      panic( "msg's count to han should be 3" )
    }
    
    msgs = gameCtx.MessagesToUser( han )
    if len( msgs ) != 2 {
      panic( "msg's count to han should be 2" )
    }
    
    lastestMessage := msgs[len(msgs)-1]
    // handle the message
    _ = lastestMessage
    
    gameCtx.DeleteMessage( msgs )
    if len( gameCtx.Messages ) != 1 {
      panic( "msg's count to han should be 1" )
    }
    
    msgs = gameCtx.MessagesToUser( vic )
    lastestMessage = msgs[len(msgs)-1]
    // handle the message
    _ = lastestMessage
    
    gameCtx.DeleteMessage( msgs )
    if len( gameCtx.Messages ) != 0 {
      panic( "msg's count to han should be 0" )
    }
    
  })
  
  It( "delete room", func( ctx appengine.Context ){
    
    gameCtx.DeleteRoomIfNoUser()
    if len( gameCtx.Rooms ) != 0 {
      panic( "room's count should be 0" )
    }
    
  })
}