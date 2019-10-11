var view = view || {};
view.ooxx = view.ooxx || {};
(function(module){
    function setGame( table, game ){
        var dom = $("#tmpl_ooxxContent").tmpl();
        table.empty();
		table.append(dom);

        var land = table.find("#table");
        var selection = table.find("#selection");
        var oo = table.find(".oo");
        var xx = table.find(".xx");

        hideAllChess();

        function hideAllChess(){
            oo.each(function(i, o){
                $(o).hide();
            });

            xx.each(function(i, x){
                $(x).hide();
            })
        }

        land.load(function(){
            function putChess(chess, x, y){
                // global position 
                var globalX = (x * gridSize) + gridSize / 2 - (landWidth / 2) + parseInt(land.parent().css('left'));
                var globalY = (y * gridSize) + gridSize / 2 - (landHeight / 2) + parseInt(land.parent().css('top'));
                
                chess.css({
                    left:globalX + 'px',
                    top:globalY + 'px'
                });
            }

            function updateChess(tokens){
                log("更新盤面", tokens);

                hideAllChess();

                var oid = 0;
                var xid = 0;
                _.each(tokens, (t)=>{
                    isFirst = api.isFirst(game, t);
                    var x = t.position.x;
                    var y = t.position.y;
                    if(isFirst){
                        ochess = oo.eq(oid);
                        ochess.show();
                        putChess(ochess, x, y);
                        oid++;
                    }else{
                        xchess = xx.eq(oid);
                        xchess.show();
                        putChess(xchess, x, y);
                        xid++;
                    }
                });
            }
            var landWidth = land.width();
            var landHeight = land.height();
            var gridSize = landWidth / 3;

            updateChess(game.tokens);

            land.click(function(e){

                // grid id position
                var x = Math.floor(e.offsetX / (landWidth / 3));
                var y = Math.floor(e.offsetY / (landHeight / 3));

                var roomId = table.attr("roomId");
                api.put(roomId, myId, [x, y], (err, data) => {
                    console.log(err);
                    if (err) {
                        return;
                    }
                    log("下子", data);
                    updateChess(data.tokens);
                });
            });

            land.on("mousemove", function(e){

                // grid id position
                var x = Math.floor(e.offsetX / (landWidth / 3));
                var y = Math.floor(e.offsetY / (landHeight / 3));
                
                // global position 
                putChess(selection, x, y);
            });
        })

        return {
            type:'ooxx',
            update:function( data ){
                log("更新遊戲", data);
                updateChess(data.tokens);
            }, 
            clear:function(){
                land.off("mousemove");
                land.off("click");
                table.empty();
            }
        }
    }

    module.setGame = setGame;
})(view.ooxx)