var api = api || {};
(function(module){

    function get(url, cb){
        return $.ajax({
            url: url,
            method: "get",
            dataType: "json",
            success: data=>{
                if(data.Error){
                    cb(data.Error)
                } else {
                    cb(null, data.Info)
                }
            },
            error: function(){
                cb(arguments)
            }
        })
    }

    function context(cb){
        return get(`../fn/freechess`, cb)
    }

    function createGame(type, player, cb){
        return get(`../fn/freechess/create/${type}/${player}`, (err, data)=>{
            if(err){
                return cb(err)
            }
            cb(null, data[0], data[1])
        })
    }

    function joinGame(game, player, cb){
        return get(`../fn/freechess/game/${game}/player/${player}/join`, cb)
    }

    function leaveGame(game, player, cb){
        return get(`../fn/freechess/game/${game}/player/${player}/leave`, cb)
    }

    function put(game, player, [x, y], cb){
        return get(`../fn/freechess/game/${game}/player/${player}/chess/${x}/${y}/put`, cb)
    }

    function getUUID(){
        return uuid();
    }

    function getRandomFourRoom(ctx){
        const games = ctx.games.slice()
        games.sort(() => Math.random() - 0.5)
        return games.slice(0, Math.min(4, games.length))
    }

    function isMyTurn(game, player){
        const orderIdx = game.playerOrder.indexOf(game.currOrderIdx);
        return game.players[orderIdx] == player
    }

    function isFirst(game, { type }){
        return type == 0
    }

    module.context = context
    module.createGame = createGame
    module.joinGame = joinGame
    module.leaveGame = leaveGame
    module.put = put
    module.getUUID = getUUID
    module.getRandomFourRoom = getRandomFourRoom
    module.isMyTurn = isMyTurn
    module.isFirst = isFirst
})(api);