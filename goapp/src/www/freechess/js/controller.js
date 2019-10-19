var controller = controller || {};
(function (module) {

    var myId = undefined;
    var ary_table = undefined;
    var bigUIContainer = undefined;
    var smallUIContainer = undefined;
    var btn_createRoom = undefined;
    var btn_refreshRoom = undefined;
    var combo_type = undefined;
    var gameObj = {};

    function showAllTable(show) {
        ary_table.each((id, dom) => {
            if (show) {
                $(dom).show();
            } else {
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
                ary_table.toArray(),
                smallUIContainer.toArray()), (map) => {
                    refreshSmallUI(ctx, map);
                });
    }

    function onOOXXTableClick(view, roomId, x, y) {
        putOOXXToTargetTable(view.id, x, y);
    }

    function putOOXXToTargetTable(id, x, y) {
        var view = gameObj[id];
        var roomId = view.id;
        api.quickPut(roomId, myId, [x, y], (err, info) => {
            if (err) {
                return;
            }
            log("下子", info);
            view.update(info);
        })
    }

    function checkGameColor(game, table){
        table.removeClass('notInTable').removeClass('inTable').removeClass('myTurnTable');

        var isInRoom = api.isInGame(game, myId);
        var isMyTurn = api.isMyTurn(game, myId);
        if (isInRoom) {
            if(isMyTurn){
                table.addClass('myTurnTable');
            }else{
                table.addClass("inTable");
            }
        } else {
            table.addClass('notInTable');
        }
    }

    function onTableUpdate(game, view) {
        var isInRoom = api.isInGame(game, myId);
        var isMyTurn = api.isMyTurn(game, myId);
        var tableId = view.tableId;
        var table = ary_table.eq(tableId);
        checkGameColor(game, table);
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

    function getBtnExit(ui) {
        return ui.find("a").eq(2);
    }

    function getBtnScale(ui) {
        return ui.find("a").eq(3);
    }

    function refreshSmallUI(data, doms) {

        var table = $(doms[0]);
        var btnLayer = $(doms[1]);

        var roomId = getGameIDBySmallUI(btnLayer);
        var btn_join = getBtnJoin(btnLayer);
        var btn_watch = getBtnWatch(btnLayer);
        var btn_exit = getBtnExit(btnLayer);
        var btn_scale = getBtnScale(btnLayer);

        btn_join.linkbutton('enable');
        btn_watch.linkbutton('enable');
        btn_scale.linkbutton('enable');
        btn_exit.linkbutton('enable');

        table.removeClass('notInTable').removeClass('inTable').removeClass('myTurnTable');
        
        if (!roomId) {
            btn_join.linkbutton('disable');
            btn_watch.linkbutton('disable');
            btn_scale.linkbutton('disable');
            btn_exit.linkbutton('disable');
            table.addClass('notInTable');
            return;
        }

        var game = api.getGameById(data, roomId);
        var canEnterGame = api.canEnterGame(game, myId);
        var canWatchGame = api.canWatchGame(game, myId);
        var isInRoom = api.isInGame(game, myId);
        var isMyTurn = api.isMyTurn(game, myId);

        checkGameColor(game, table);

        if (!isInRoom) {
            btn_exit.linkbutton('disable');
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

    function updateGameByData(game) {
        var view = getViewByModelId(game.id);
        view.update(game);
    }

    function handleMsg(msg) {
        log("接到指令", msg);
        if(msg.game){
            updateGameByData(msg.game);
            updateViewIsFirst(msg.game);
        }
    }

    function updateViewPlyer(gameId, playerInfo){
        var playerCount = Object.keys(playerInfo).length;

        var view = getViewByModelId(gameId);
        view.table.find(".playerCount").html("人數:" + playerCount);
    }

    function updateViewIsFirst(game){
        var isFirst = api.isFirstByPlayer(game, myId);

        var view = getViewByModelId(game.id);
        view.table.find(".isFirst").html( isFirst ? "先手" : "後手")
    }

    function handleAlive(alive){
        log("接到在線狀態", alive);
        for (var gameId in alive) {
            updateViewPlyer(gameId, alive[gameId]);
        }
    }

    function createGame() {
        selectType = combo_type.combobox('getValue');
        api.quickCreateGame(
            selectType, myId,
            msg => {
                handleMsg(msg);
            },
            alive => {
                handleAlive(alive);
            },
            (err, ctx, room) => {
                if (err) {
                    return;
                }
                log("創建方間", ctx);
                gameObj = refreshFourGame(ctx);
            });
    }

    function refreshGame() {
        api.context((err, data) => {
            if (err) {
                return;
            }
            if (data.games) {
                gameObj = refreshFourGame(data);
            }
        });
    }

    function onBtnCreateGameClick(e) {
        createGame();
    }

    function onBtnRefreshGameClick(e) {
        refreshGame();
    }

    function onBtnExitClick(e) {
        var btn_exit = $(e.currentTarget);
        var gameId = getGameIDBySmallUIButton(btn_exit);
        api.quickLeave(gameId, myId, (err, info) => {
            if (err) {
                return;
            }
            log("退房成功，重新整理", info);
            refreshGame();
        })
    }

    function onBtnJoinClick(e) {
        var btn_join = $(e.currentTarget);
        var gameId = getGameIDBySmallUIButton(btn_join);
        api.quickJoin(
            gameId,
            myId,
            false,
            msg => {
                handleMsg(msg);
            },
            alive => {
                handleAlive(alive);
            },
            (err, ctx) => {
                if (err) {
                    return;
                }
                log("加入對奕", ctx);
                refreshGame();
            })
    }

    function init(id, cb = undefined) {
        myId = id;
        ary_table = $("[gameContent]");
        bigUIContainer = $("#bigUIContainer");
        smallUIContainer = $("[tableSamllUiID]");
        btn_createRoom = $("#btn_createRoom");
        btn_refreshRoom = $("#btn_refreshRoom");
        combo_type = $("#combo_type");

        api.context((err, ctx) => {
            if (err) {
                return;
            }

            api.restoreListening(ctx,
                myId,
                msg => {
                    handleMsg(msg);
                },
                alive => {
                    handleAlive(alive);
                });

            gameObj = refreshFourGame(ctx);
            smallAllTable();

            smallUIContainer.each(function (id, dom) {
                var btn_join = getBtnJoin($(dom));
                var btn_watch = getBtnWatch($(dom));
                var btn_scale = getBtnScale($(dom));
                var btn_exit = getBtnExit($(dom));

                btn_join.click(onBtnJoinClick);
                btn_exit.click(onBtnExitClick);
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
                        alive => {
                            handleAlive(alive)
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

            if (cb) cb();
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

        btn_createRoom.click(onBtnCreateGameClick);
        btn_refreshRoom.click(onBtnRefreshGameClick);

        currentBigTable = undefined;

        btn_scaleSmall = $("#btn_scaleSmall");
        btn_scaleSmall.click(function (e) {
            if (currentBigTable) {
                smallTable(currentBigTable);
            }
        });
    }

    module.init = init;
    module.onBtnCreateGameClick = onBtnCreateGameClick;
    module.onBtnRefreshGameClick = onBtnRefreshGameClick;
    module.onBtnJoinClick = onBtnJoinClick;
    module.putOOXXToTargetTable = putOOXXToTargetTable;
})(controller);