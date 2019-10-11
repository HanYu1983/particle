var api = api || {};
(function (module) {

    /////////////////////////////////////////////
    // GAE Service
    /////////////////////////////////////////////

    function get(url, cb) {
        return $.ajax({
            url: url,
            method: "get",
            dataType: "json",
            success: data => {
                if (data.Error) {
                    cb(data.Error)
                } else {
                    cb(null, data.Info)
                }
            },
            error: function () {
                cb(arguments)
            }
        })
    }

    function context(cb) {
        return get(`../fn/freechess`, cb)
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
        basicCallback: null
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
        listenInfo.basicCallback = handleBasicChannel(player, onmessage)
        openSocket(gameID, listenInfo.basicCallback)
    }

    function closeBasicChannel(gameID){
        if(listenInfo.basicCallback){
            closeSocket(gameID, listenInfo.basicCallback)
            listenInfo.basicCallback = null
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

    function closeGameHeartbeat(gameID){
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

    /**
     * 取得隨機四間房，以自己有進的房優先
     * @param {所有資料} ctx 
     */
    function getRandomFourRoom(ctx, player) {
        const isEnter = g=>{
            return g.players.indexOf(player) != -1 || g.visitors.indexOf(player) != -1
        }
        const not = fn =>{
            return g=>{
                return !fn(g)
            }
        }
        const lockGames = ctx.games.filter(isEnter)
        if(lockGames.length >= 4){
            return lockGames
        }
        const remainSize = 4 - lockGames.length;
        const unlockGames = ctx.games.filter(not(isEnter))
        unlockGames.sort(() => Math.random() - 0.5)
        return [...lockGames,  ...unlockGames.slice(0, Math.min(remainSize, unlockGames.length))]
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
     * 是否已進指定房間
     */
    function canEnterRoom(game, player) {
        if(game.players.indexOf(player) != -1){
            return false;
        }
        return game.players.length < 2
    }
    /**
     * 是否已觀戰指定房間
     */
    function canWatchRoom(game, player) {
        return game.visitors.indexOf(player) == -1
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
    function quickLeave(gameID, player, cb){
        leaveGame(gameID, player, (err, info)=>{
            if(err){
                return cb(err)
            }
            cb(null, info)
            closeBasicChannel(gameID)
            closeGameHeartbeat(gameID)
        })
    }

    function quickPut(gameID, player, [x, y], cb){
        put(gameID, player, [x, y], (err, info)=>{
            if(err){
                return cb(err)
            }
            cb( null, info)
            sendMessageToGame(gameID, {type: "update", position: [x, y], sender: player})
        })
    }

    module.context = context
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
    module.canEnterRoom = canEnterRoom
    module.canWatchRoom = canWatchRoom
    module.quickJoin = quickJoin
    module.quickLeave = quickLeave
    module.quickPut = quickPut
})(api);