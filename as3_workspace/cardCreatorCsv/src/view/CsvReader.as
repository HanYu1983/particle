package view 
{
	/**
	 * ...
	 * @author vic
	 */
	public class CsvReader 
	{
		var _csvLines:Array;
		
		public function CsvReader( string:String ) 
		{
			parser(string);
		}
		
		public function getItem():Array {
			return _csvLines;
		}
		
		private function parser( s:String ):void {
			_csvLines = [];
			var ls:Array = s.split('\n');
			for ( var i:int = 0; i < ls.length; ++i ) {
				_csvLines.push( ls[i].split('\t' ));
			}
			
		}
		
	}

}