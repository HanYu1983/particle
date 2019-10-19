var view = view || {};
view.ooxx = view.ooxx || {};
(function (module) {
    function setGame(table, game, myId, evts) {
        var dom = $("#tmpl_ooxxContent").tmpl();
        table.find("#canvas").empty();
        table.find("#canvas").append(dom);

        var land = table.find("#table");
        var selection = table.find("#selection");
        var oo = table.find(".oo");
        var xx = table.find(".xx");

        hideAllChess();

        function hideAllChess() {
            oo.each(function (i, o) {
                $(o).hide();
            });

            xx.each(function (i, x) {
                $(x).hide();
            })
        }

        function putChess(chess, x, y) {
            // global position 
            var globalX = (x * gridSize) + gridSize / 2 - (landWidth / 2) + parseInt(land.parent().css('left'));
            var globalY = (y * gridSize) + gridSize / 2 - (landHeight / 2) + parseInt(land.parent().css('top'));

            chess.css({
                left: globalX + 'px',
                top: globalY + 'px'
            });
        }

        function updateChess(_game) {
            log("更新盤面", _game.tokens);

            hideAllChess();

            var oid = 0;
            var xid = 0;
            _.each(_game.tokens, (t) => {
                isFirst = api.isFirst(_game, t);
                var x = t.position.x;
                var y = t.position.y;
                if (isFirst) {
                    ochess = oo.eq(oid);
                    ochess.show();
                    putChess(ochess, x, y);
                    oid++;
                } else {
                    xchess = xx.eq(xid);
                    xchess.show();
                    putChess(xchess, x, y);
                    xid++;
                }
            });

            if(evts.onUpdate) evts.onUpdate(_game, view);
        }

        var landWidth = undefined;
        var landHeight = undefined;
        var gridSize = undefined;

        land.load(function () {

            landWidth = land.width();
            landHeight = land.height();
            gridSize = landWidth / 3;

            updateChess(game);

            land.click(function (e) {

                // grid id position
                var x = Math.floor(e.offsetX / (landWidth / 3));
                var y = Math.floor(e.offsetY / (landHeight / 3));

                var roomId = table.attr("roomId");
                if (evts.onTableClick) {
                    evts.onTableClick(view, roomId, x, y);
                }
            });

            land.on("mousemove", function (e) {

                // grid id position
                var x = Math.floor(e.offsetX / (landWidth / 3));
                var y = Math.floor(e.offsetY / (landHeight / 3));

                // global position 
                putChess(selection, x, y);
            });
        })

        var view = {
            id: game.id,
            game: game,
            table: table,
            tableId: table.attr("gameContent"),
            type: 'ooxx',
            update: function (data) {
                log("更新遊戲", data);
                updateChess(data);
            },
            clear: function () {
                land.off("mousemove");
                land.off("click");
                table.empty();
            }
        }

        return view;
    }

    module.setGame = setGame;
})(view.ooxx)