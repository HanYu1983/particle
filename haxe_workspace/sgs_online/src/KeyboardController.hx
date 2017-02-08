package;

import js.Browser;
import js.JQuery;
import js.html.Document;
import js.html.KeyboardEvent;

/**
 * ...
 * @author vic
 */
class KeyboardController extends BasicController
{
	public function start() {
		Browser.document.addEventListener( 'keyup', function( e ) {
			switch( e.keyCode ) {
				case KeyboardEvent.DOM_VK_F:
					mediator.onFUp();
				case KeyboardEvent.DOM_VK_A:
					mediator.onAUp();
				case KeyboardEvent.DOM_VK_D:
					mediator.onDUp();
			}
		});
	}
}