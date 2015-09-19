package view 
{
	import flash.events.Event;
	
	/**
	 * ...
	 * @author vic
	 */
	public class VicEvent extends Event 
	{
		public var data:Object;
		
		public function VicEvent(type:String, data:Object, bubbles:Boolean=false, cancelable:Boolean=false) 
		{
			super(type, bubbles, cancelable);
			
			this.data = data;
			
		}
		
	}

}