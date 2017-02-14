/**
 * Created by hanyu on 2017/2/11.
 */
var model = model || {};

(function(module){
    var apiHost = 'http://localhost:8080/'

    function get(path, data, cb){
        $.ajax({
            url: apiHost+path,
            method: 'get',
            data: data,
            dataType: 'json',
            success: function(res){
                var err = res[0]
                var data = res[1]
                cb(err, data)
            },
            error: function(xhr, res, err){
                cb(err)
            }
        })
    }

    function post(path, data, cb){
        $.ajax({
            url: apiHost+path,
            method: 'post',
            data: data,
            dataType: 'json',
            success: function(res){
                var err = res[0]
                var data = res[1]
                cb(err, data)
            },
            error: function(xhr, res, err){
                cb(err)
            }
        })
    }
    var lobbyChannel

    /**
     加入大廳
     cbObj : {
    onopen: function(){},
    onmessage: function(path, option){
      path: {
        data: your message
      }
      option: ?
    },
    onerror: function(){},
    onclose: function(){}
  }
     */
    function joinLobby(user, cbObj){
        post('fn/sgs/room/lobby/join', {user: user}, function(err, res){
            if( err != null ){
                console.log(err)
                cbObj.onerror(err)
            } else {
                var token = res.Channel
                lobbyChannel = new goog.appengine.Channel(token)
                var socket = lobbyChannel.open()
                socket.onopen = cbObj.onopen
                socket.onmessage = cbObj.onmessage
                socket.onerror = cbObj.onerror
                socket.onclose = cbObj.onclose
            }
        })
    }

    function sendLobby(user, msg, cb){
        post('fn/sgs/room/lobby/message', {user: user, msg: msg}, cb)
    }

    function roomList(cb){
        get('fn/sgs/room', {}, cb)
    }

    function joinRoom(roomId, user, cb){
        post('fn/sgs/room/'+roomId+'/join', {user: user}, cb)
    }

    function newRoom(user, cb){
        post('fn/sgs/room', {user: user}, function(err, room){
            if( err != null ){
                cb(err)
            } else {
                cb(null, room)
            }
        })
    }

    function updateRoom(roomId, data, cb){
        post('fn/sgs/room/'+roomId, data, function(err, room){
            if( err != null ){
                cb(err)
            } else {
                cb(null, room)
            }
        })
    }

    function startGame(roomId, cb){
        post('fn/sgs/room/'+roomId+'/start', {}, cb)
    }

    function game(roomId, cb){
        get('/fn/sgs/room/'+roomId+'/game', {}, cb)
    }

    function collectCommand(roomId, user, cb){
        post('fn/sgs/room/'+roomId+'/game/collectCommand', {user: user}, cb)
    }

    function pushCommand(roomId, cmd, cb){
        post('fn/sgs/room/'+roomId+'/game/command', {commandBody: JSON.stringify(cmd)}, cb)
    }

    module.get = get
    module.post = post
    module.joinLobby = joinLobby
    module.roomList = roomList
    module.sendLobby = sendLobby
    module.joinRoom = joinRoom
    module.newRoom = newRoom
    module.startGame = startGame
    module.collectCommand = collectCommand
    module.pushCommand = pushCommand
    module.updateRoom = updateRoom
    module.game = game

}) ( model )