var controller = controller || {};
(function (module) {

    var myId = undefined;
    var ary_table = undefined;
    var ary_game = undefined;
    var bigUIContainer = undefined;
    var smallUIContainer = undefined;
    var inroomContainer = undefined;
    var isMyTurnContainer = undefined;
    var btn_createRoom = undefined;
    var btn_refreshRoom = undefined;
    var combo_type = undefined;

    function showAllTable( show ){
        ary_table.each((id, dom)=>{
            if(show){
                $(dom).show();
            }else{
                $(dom).hide();
            }
        });
    }

    function smallTable(table) {
        bigUIContainer.hide();
        smallUIContainer.show();
        table.removeClass("scaleBig").addClass("scaleSmall");
        showAllTable(true);
    }

    function bigTable(table) {
        bigUIContainer.show();
        smallUIContainer.hide();
        showAllTable(false);
        table.show();
        table.removeClass("scaleSmall").addClass("scaleBig");

        currentBigTable = table;
    }

    function smallAllTable() {
        ary_table.each((id, dom) => {
            smallTable($(dom))
        });
        bigUIContainer.hide();
    }

    function refreshFourGameSmallUI(ctx) {
        _.each(
            _.zip(
                inroomContainer.toArray(),
                smallUIContainer.toArray(),
                isMyTurnContainer.toArray()), (map) => {
                    refreshSmallUI(ctx, map);
                });
    }

    function onOOXXTableClick(view, roomId, x, y) {
        api.quickPut(roomId, myId, [x, y], (err, info) => {
            if (err) {
                return;
            }
            log("下子", info);
            view.update(info);
        })
    }

    function onTableUpdate(game, view) {
        var isMyTurn = api.isMyTurn(game, myId);
        var tableId = view.table.attr('gameContent');

        if (isMyTurn) {
            isMyTurnContainer.eq(tableId).show();
        } else {
            isMyTurnContainer.eq(tableId).hide();
        }
    }

    function refreshFourGame(ctx) {
        if (!ctx.games) {
            return {};
        }
        var retGames = {};
        var randomList = api.getRandomFourRoom(ctx, myId);

        log("更新四間房", randomList);
        var tid = 0;
        _.each(randomList, (room) => {
            table = ary_table.eq(tid);
            table.attr('roomId', room.id);
            retGames[room.id] = view.ooxx.setGame(table, room, myId, { onTableClick: onOOXXTableClick, onUpdate: onTableUpdate });
            tid++;
        });
        refreshFourGameSmallUI(ctx);
        return retGames;
    }

    function getGameIDBySmallUIButton(ui) {
        return getGameIDBySmallUI(ui.parent().parent());
    }

    function getGameIDBySmallUI(uidom) {
        id = uidom.attr("tableSamllUiID");
        return $("[gameContent='" + id + "']").attr("roomId");
    }

    function getBtnJoin(ui) {
        return ui.find("a").eq(0);
    }

    function getBtnWatch(ui) {
        return ui.find("a").eq(1);
    }

    function getBtnScale(ui) {
        return ui.find("a").eq(2);
    }

    function refreshSmallUI(data, doms) {

        var inroomLayer = $(doms[0]);
        var btnLayer = $(doms[1]);
        var isMyTurnLayer = $(doms[2]);

        var roomId = getGameIDBySmallUI(btnLayer);
        var btn_join = getBtnJoin(btnLayer);
        var btn_watch = getBtnWatch(btnLayer);
        var btn_scale = getBtnScale(btnLayer);

        btn_join.linkbutton('enable');
        btn_watch.linkbutton('enable');
        btn_scale.linkbutton('enable');
        inroomLayer.hide();
        isMyTurnLayer.hide();

        if (!roomId) {
            btn_join.linkbutton('disable');
            btn_watch.linkbutton('disable');
            btn_scale.linkbutton('disable');
            return;
        }

        var game = api.getGameById(data, roomId);
        var canEnterGame = api.canEnterGame(game, myId);
        var canWatchGame = api.canWatchGame(game, myId);
        var isInRoom = api.isInGame(game, myId);
        var isMyTurn = api.isMyTurn(game, myId);

        if (isInRoom) {
            inroomLayer.show();
        }

        if (isMyTurn) {
            isMyTurnLayer.show();
        }

        if (!canEnterGame) {
            btn_join.linkbutton('disable');
        }

        if (!canWatchGame) {
            btn_watch.linkbutton('disable');
        }
    }

    function getViewByModelId(id) {
        var views = _.filter(gameObj, (g) => {
            if (g.id == id) {
                return g;
            }
        });
        if (views.length == 0) {
            throw Error("應該要有房間,id:" + id);
        }
        return views[0];
    }

    function updateGameByData(gameId) {
        api.game(gameId, (err, game) => {
            var view = getViewByModelId(game.id);
            view.update(game);

            // var isMyTurn = api.isMyTurn(game, myId);
            // var tableId = view.table.attr('gameContent');

            // console.log("tableId: " + tableId);

            // if(isMyTurn){
            // 	isMyTurnContainer.eq(tableId).show();
            // }else{
            // 	isMyTurnContainer.eq(tableId).hide();
            // }
        });
    }

    function handleMsg(msg) {
        log("接到指令", msg);
        switch (msg.type) {
            case 'update':
                updateGameByData(msg.gameID);
        }
    }

    function init() {
        //myId = api.getMyId();
        myId = api.getUUID();
        ary_table = $("[gameContent]");
        ary_game = [$("#tmpl_ooxxContent")];
        bigUIContainer = $("#bigUIContainer");
        smallUIContainer = $("[tableSamllUiID]");
        inroomContainer = $("[inroom]");
        isMyTurnContainer = $("[isMyTurn]");
        btn_createRoom = $("#btn_createRoom");
        btn_refreshRoom = $("#btn_refreshRoom");
        combo_type = $("#combo_type");

        var gameObj = undefined;
        api.context((err, ctx) => {
            if (err) {
                return;
            }
            gameObj = refreshFourGame(ctx);
            smallAllTable();

            smallUIContainer.each(function (id, dom) {
                var btn_join = getBtnJoin($(dom));
                var btn_watch = getBtnWatch($(dom));
                var btn_scale = getBtnScale($(dom));

                btn_join.click(function (e) {
                    var ui = $(e.currentTarget);
                    var gameId = getGameIDBySmallUIButton(ui);
                    api.quickJoin(
                        gameId,
                        myId,
                        false,
                        msg => {
                            handleMsg(msg);
                        },
                        (isSuccess, info) => {
                            console.log("target alive ", isSuccess, info)
                        },
                        (err, ctx) => {
                            if (err) {
                                return;
                            }
                            log("加入對奕", ctx);
                            btn_join.linkbutton('disable');
                        })
                });

                btn_watch.click(function (e) {
                    var ui = $(e.currentTarget);
                    var gameId = getGameIDBySmallUIButton(ui);
                    api.quickJoin(
                        gameId,
                        myId,
                        true,
                        msg => {
                            handleMsg(msg);
                        },
                        (isSuccess, info) => {
                            console.log("target alive ", isSuccess, info)
                        },
                        (err, ctx) => {
                            if (err) {
                                return;
                            }
                            log("加入觀戰", ctx);
                            btn_watch.linkbutton('disable');
                        })
                });

                btn_scale.click(function () {
                    bigTable(ary_table.eq(id))
                });
            });
        });

        api.insertServiceCallback((err, data) => {
            if (err) {
                $.messager.show({
                    title: '提示',
                    msg: err,
                    timeout: 5000,
                    showType: 'slide'
                });
            }
        })

        btn_createRoom.click(() => {
            selectType = combo_type.combobox('getValue');
            api.quickCreateGame(
                selectType, myId,
                msg => {
                    handleMsg(msg);
                },
                (isSuccess, info) => {
                    console.log("target alive ", isSuccess, info)
                },
                (err, ctx, room) => {
                    if (err) {
                        return;
                    }
                    log("創建方間", ctx);
                    gameObj = refreshFourGame(ctx);
                });
        });

        btn_refreshRoom.click(() => {
            api.context((err, data) => {
                if (err) {
                    return;
                }
                if (data.games) {
                    gameObj = refreshFourGame(data);
                }
            });
        });

        currentBigTable = undefined;

        btn_scaleSmall = $("#btn_scaleSmall");
        btn_scaleSmall.click(function (e) {
            if (currentBigTable) {
                smallTable(currentBigTable);
            }
        });
    }

    module.init = init;
})(controller);