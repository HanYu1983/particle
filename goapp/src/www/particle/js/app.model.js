var app = app || {};
app.model = app.model || {};

(function( module ){
	var particles =  {  
		  "id":0,
		  "name":"發射器",
		  "lifetime":0,
		  "vel":[  
			 0,
			 0,
			 0
		  ],
		  "pos":[  
			 0,
			 0,
			 0
		  ],
		  "mass":1,
		  "color":[  
			 1,
			 1,
			 1,
			 1
		  ],
		  "size":[  
			 40,
			 40
		  ],
		  "formulaList":[],
		  "tex":"glow_128_128",
		  "blending":"add",
		  "emit":{  
			 "prototype":[  
				{  
				   "id":"1",
				   "name":"粒子",
				   "lifetime":2,
				   "vel":[  
					  0,
					  0,
					  0
				   ],
				   "pos":[  
					  0,
					  0,
					  0
				   ],
				   "mass":1,
				   "color":[  
					  1,
					  1,
					  1,
					  1
				   ],
				   "size":[  
					  40,
					  40
				   ],
				   "tex":'glow_128_128',
				   "blending":"add",
				   "formulaList":[ 
						
				   ]
				}
			 ],
			 "count":1,
			 "duration":0.05,
			 "angle":0,
			 "range":0,
			 "force":0
		  }
	   }
	   
	   var event = $('<div></div>' );
	
	var ary_elapsedTime = [];
	api.addEventListener( function ( info ) {
		switch( info[0] ) {
			case 'tick':
				var elapsedTime = info[1];
				if ( ary_elapsedTime.length > 20 ) {
					ary_elapsedTime.shift();
				}
				ary_elapsedTime.push( elapsedTime );
				
				var sum = _.reduce( ary_elapsedTime, function( t, curr ) {
					return curr + t;
				}, 0 );
				
				var fps = Math.ceil( 1 / ( sum / ary_elapsedTime.length ));
				
				api.info( function( err, data ) {
					if ( err == null ) {
						event.trigger( 'onInfoChange', {count:data.count, fps:fps} );
					}
				});
		}
	});
	
	
	function getParticles(){
		return particles;
	}
	
	function createParticle( id, name ){
		return { 
			"id":id,
			"name":name,
			"lifetime":1,
			"vel":[  
			 0,
			 0,
			 0
			],
			"pos":[  
			 0,
			 0,
			 0
			],
			"mass":1,
			"color":[  
			 1,
			 1,
			 1,
			 1
			],
			"size":[  
			 40,
			 40
			],
			"formulaList":[],
			"tex":"glow_128_128",
			"blending":"add"
		}
	}
	
	module.getParticles = getParticles;
	module.createParticle = createParticle;
	module.event = event;
})( app.model );
