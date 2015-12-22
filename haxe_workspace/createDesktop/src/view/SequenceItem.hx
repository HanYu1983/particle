package view;
import haxe.Timer;

/**
 * ...
 * @author vic
 */
class SequenceItem extends BasicItem
{

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function action( value:Dynamic ):Void 
	{
		var mc_seqs:Dynamic = viewComponent.find( '#mc_seqs' );
		var count = mc_seqs.children().length;
		
		function showTarget( index:Int ) {
			mc_seqs.find( 'img' ).hide();
			mc_seqs.children().eq( index ).show();
		}
		
		trace( value.sequence,viewComponent.attr( 'action' )  );
		
		if ( viewComponent.attr( 'action' ) == null || viewComponent.attr( 'action' ) != value.sequence ) {
			for ( i in 0...30 ) {
				Timer.delay( function() {
					if ( i == 29 ) {
						showTarget( Math.floor( value.sequence * count) );
					}else {
						showTarget( Math.floor( Math.random() * count) );
					}
				}, i * 10 );
			}
			viewComponent.attr( 'action', value.sequence );
		}
	}
	
}