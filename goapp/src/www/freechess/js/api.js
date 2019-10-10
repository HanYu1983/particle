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

    function createGame(type, cb){
        return get(`../fn/freechess/create/${type}`, cb)
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
    module.context = context
    module.createGame = createGame
    module.joinGame = joinGame
    module.leaveGame = leaveGame
    module.put = put
})(api);