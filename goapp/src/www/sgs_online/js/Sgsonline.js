/**
 * ...
 * @author vic
 */
var Main = (function () {
    function Main() {
        console.log(window['vic']);
        window['vic']['tools']['loadDAE']('asset/scene.dae', function (dae) {
            console.log(dae);
        });
    }
    Main.main = function () {
        new Main();
    };
    return Main;
}());
