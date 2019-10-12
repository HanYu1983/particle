var api = api || {};
(function (module) {

    /////////////////////////////////////////////
    // GAE Service
    /////////////////////////////////////////////

    const serviceInfo = {
        callbacks: []
    }

    function insertServiceCallback(cb){
        serviceInfo.callbacks.push(cb)
    }

    function get(url, cb) {
        return $.ajax({
            url: url,
            method: "get",
            dataType: "json",
            success: data => {
                const ignore = serviceInfo.callbacks.filter(cb=>{
                    if (data.Error) {
                        cb(data.Error)
                    } else {
                        cb(null, data.Info)
                    }
                })
                if (data.Error) {
                    cb(data.Error)
                } else {
                    cb(null, data.Info)
                }
            },
            error: function (xhr, textStatus, err) {
                const ignore = serviceInfo.callbacks.filter(cb=>{
                    cb(err)
                })
                cb(err)
            }
        })
    }

    function context(cb) {
        return get(`../fn/freechess`, cb)
    }

    function game(gameID, cb){
        return get(`../fn/freechess/game/${gameID}`, cb)
    }

    function createGame(type, player, cb) {
        return get(`../fn/freechess/create/${type}/${player}`, (err, data) => {
            if (err) {
                return cb(err)
            }
            cb(null, data[0], data[1])
        })
    }

    function joinGame(gameID, player, cb) {
        return get(`../fn/freechess/game/${gameID}/player/${player}/join`, cb)
    }

    function visitGame(gameID, player, cb) {
        return get(`../fn/freechess/game/${gameID}/player/${player}/join?visitor=1`, cb)
    }

    function leaveGame(gameID, player, cb) {
        return get(`../fn/freechess/game/${gameID}/player/${player}/leave`, cb)
    }

    function put(gameID, player, [x, y], cb) {
        return get(`../fn/freechess/game/${gameID}/player/${player}/chess/${x}/${y}/put`, cb)
    }

    /////////////////////////////////////////////
    // Socket
    /////////////////////////////////////////////

    function openSocket(gameID, cb) {
        var address = `app/freechess/game/${gameID}`
        var database = firebase.database();
        var channelRef = database.ref(address);
        channelRef.on("value", cb)
    }

    function closeSocket(gameID, cb) {
        var address = `app/freechess/game/${gameID}`
        var database = firebase.database();
        var channelRef = database.ref(address);
        channelRef.off("value", cb)
    }


    /////////////////////////////////////////////
    // Chat
    /////////////////////////////////////////////

    const listenInfo = {
        callbacks: [],
        basicCallback: {}
    }

    function registerHandler(cb) {
        listenInfo.callbacks.push(cb)
    }

    function handleBasicChannel(player, onmessage) {
        return function (snapshot) {
            if (snapshot == null) {
                return
            }
            const value = snapshot.val()
            if (value == null) {
                return
            }
            const info = JSON.parse(value)
            const isHandled = listenInfo.callbacks.filter(i => i(info)).length > 0
            if (isHandled == false) {
                if (info.sender == player) {
                    return
                }
                onmessage(info)
            }
        }
    }

    function openBasicChannel(gameID, player, onmessage) {
        closeBasicChannel(gameID)
        listenInfo.basicCallback[gameID] = handleBasicChannel(player, onmessage)
        openSocket(gameID, listenInfo.basicCallback[gameID])
    }

    function closeBasicChannel(gameID) {
        if (listenInfo.basicCallback[gameID]) {
            closeSocket(gameID, basicCallback[gameID])
            delete listenInfo.basicCallback[gameID]
        }
    }

    /**
     * 傳送即時訊息
     * @param {*} gameID 
     * @param {json object} info 
     */
    function sendMessageToGame(gameID, info) {
        // 送到指定的信箱
        var address = `app/freechess/game/${gameID}`
        var database = firebase.database();
        var testRef = database.ref(address);
        testRef.set(JSON.stringify(info))
    }

    /////////////////////////////////////////////
    // Socket Heartbeat
    /////////////////////////////////////////////

    const heartbeatInfo = {
        callbackPool: {},
        seq: 0,
        timeout: 1000 * 3,
        duration: 1000 * 10,
        id: {},
        player: null
    }

    registerHandler(listenHeartbeatFromGame)
    registerHandler(listenReplyHeartbeatFromGame)

    function openGameHeartbeat(gameID, player, cb) {
        heartbeatInfo.player = player
        closeGameHeartbeat(gameID)
        sendGameHeartbeat(gameID, player, (isSuccess, info) => {
            cb(isSuccess, info)
            heartbeatInfo.id[gameID] = setTimeout(() => {
                openGameHeartbeat(gameID, player, cb)
            }, heartbeatInfo.duration)
        })
    }

    function closeGameHeartbeat(gameID) {
        if (heartbeatInfo.id[gameID] != null) {
            clearTimeout(heartbeatInfo.id[gameID])
            heartbeatInfo.id[gameID] = null
        }
    }

    function sendGameHeartbeat(gameID, player, cb) {
        const seq = heartbeatInfo.seq++
        heartbeatInfo.callbackPool[seq] = cb
        const info = { type: "heartbeat", seq: seq, gameID: gameID, sender: player }
        setTimeout(() => {
            if (heartbeatInfo.callbackPool[seq]) {
                heartbeatInfo.callbackPool[seq](false, info)
                delete heartbeatInfo.callbackPool[seq]
            }
        }, heartbeatInfo.timeout)
        sendMessageToGame(gameID, info)
    }

    function listenReplyHeartbeatFromGame(info) {
        if (info.type != "replyHeartbeat") {
            return false
        }
        const { seq } = info;
        if (heartbeatInfo.callbackPool[seq]) {
            heartbeatInfo.callbackPool[seq](true, info)
            delete heartbeatInfo.callbackPool[seq]
        }
        return true
    }

    function listenHeartbeatFromGame(info) {
        if (info.type != "heartbeat") {
            return false
        }
        if (info.sender == heartbeatInfo.player) {
            return true
        }
        info.type = "replyHeartbeat"
        sendMessageToGame(info.gameID, info)
        return true
    }

    /////////////////////////////////////////////
    // Helper
    /////////////////////////////////////////////

    function getUUID() {
        return uuid();
    }

    let myId = null

    function getMyId(){
        if(myId == null){
            if(localStorage){
                if(localStorage.getItem("myId") != null){
                    myId = localStorage.getItem("myId")
                    return myId
                }
                myId = getUUID();
                localStorage.setItem("myId", myId)
            } else {
                myId = getUUID();
            }
        }
        return myId
    }

    /**
     * 取得隨機四間房，以自己有進的房優先
     * @param {所有資料} ctx 
     */
    function getRandomFourRoom(ctx, player) {
        const isEnter = g => {
            return g.players.indexOf(player) != -1 || g.visitors.indexOf(player) != -1
        }
        const not = fn => {
            return g => {
                return !fn(g)
            }
        }
        const lockGames = ctx.games.filter(isEnter)
        if (lockGames.length >= 4) {
            return lockGames
        }
        const remainSize = 4 - lockGames.length;
        const unlockGames = ctx.games.filter(not(isEnter))
        unlockGames.sort(() => Math.random() - 0.5)
        return [...lockGames, ...unlockGames.slice(0, Math.min(remainSize, unlockGames.length))]
    }

    function isMyTurn(game, player) {
        const orderIdx = game.playerOrder.indexOf(game.currOrderIdx);
        return game.players[orderIdx] == player
    }
    /**
     * 
     * @param {*} game 
     * @param {*} param1 
     */
    function isFirst(game, { type }) {
        return type == 0
    }

    /**
     * 是否已進入指定房間
     * @param {*} game 
     * @param {*} player 
     */
    function isInGame(game, player){
        return game.players.indexOf(player) != -1 || game.visitors.indexOf(player) != -1
    }

    /**
     * 是否能進指定房間
     */
    function canEnterGame(game, player) {
        if(isInGame(game, player)){
            return false
        }
        return game.players.length < 2
    }
    /**
     * 是否已觀戰指定房間
     */
    function canWatchGame(game, player) {
        return game.visitors.indexOf(player) == -1
    }
    /**
     * 
     * @param {*} gameID 
     * @param {*} player 
     * @param {*} isVisitor 
     * @param {*} onmessage 
     * @param {*} onheartbeat 
     * @param {*} cb 
     */
    function quickCreateGame(type, player, onmessage, onheartbeat, cb) {
        createGame(type, player, (err, info, game) => {
            if (err) {
                return cb(err)
            }
            cb(null, info, game)
            openBasicChannel(game.id, player, onmessage)
            openGameHeartbeat(game.id, player, onheartbeat)
        })
    }
    /**
     * 加入房間
     * @param {*} gameID 
     * @param {*} player 
     * @param {是不是旁觀者} isVisitor 
     * @param {即時訊息} onmessage 
     * @param {心跳} onheartbeat 
     * @param {*} cb 
     */
    function quickJoin(gameID, player, isVisitor, onmessage, onheartbeat, cb) {
        const enterFn = isVisitor ? visitGame : joinGame
        enterFn(gameID, player, (err, info) => {
            if (err) {
                return cb(err)
            }
            cb(null, info)
            openBasicChannel(gameID, player, onmessage)
            openGameHeartbeat(gameID, player, onheartbeat)
        })
    }
    /**
     * 離開房間
     * @param {*} gameID 
     * @param {*} player 
     * @param {*} cb 
     */
    function quickLeave(gameID, player, cb) {
        leaveGame(gameID, player, (err, info) => {
            if (err) {
                return cb(err)
            }
            cb(null, info)
            closeBasicChannel(gameID)
            closeGameHeartbeat(gameID)
        })
    }

    function quickPut(gameID, player, [x, y], cb) {
        put(gameID, player, [x, y], (err, info) => {
            if (err) {
                return cb(err)
            }
            cb(null, info)
            sendMessageToGame(gameID, { type: "update", sender: player, gameID: gameID })
        })
    }

    function getGameById(ctx, gameId) {
        console.log(ctx);
        const ret = ctx.games.filter(({ id }) => id == gameId)
        if (ret.length == 0) {
            throw new Error(`${gameId} not found by getGameById`)
        }
        return ret[0]
    }

    module.context = context
    module.game = game
    module.createGame = createGame
    module.joinGame = joinGame
    module.visitGame = visitGame
    module.leaveGame = leaveGame
    module.put = put
    module.sendMessageToGame = sendMessageToGame
    module.getUUID = getUUID
    module.getRandomFourRoom = getRandomFourRoom
    module.isMyTurn = isMyTurn
    module.isFirst = isFirst
    module.canEnterGame = canEnterGame
    module.canWatchGame = canWatchGame
    module.isInGame = isInGame
    module.quickCreateGame = quickCreateGame
    module.quickJoin = quickJoin
    module.quickLeave = quickLeave
    module.quickPut = quickPut
    module.getMyId = getMyId
    module.getGameById = getGameById
    module.insertServiceCallback = insertServiceCallback
})(api);