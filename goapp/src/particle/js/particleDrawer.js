var particleDrawer = particleDrawer || {};

(function( module ){
	
	function basic( callback ){	

		var objs = {}
	
		function needObject( key, ctx ){
			var obj = objs[key]
		
			if( obj == null ){
				obj = callback.onCreate( key, ctx )
				objs[key] = obj
			}
		
			return obj
		}
		
		function apply( obj, part, ctx ){
			callback.onUpdate( obj, part, ctx )
		}
	
		function removeObject( key, ctx ){
			var obj = objs[key]
			if( obj != null ){
				callback.onRemove( obj, ctx )
				//不必刪除，用來重用
				//delete objs[key]
			}
		}
		
		function render( ctx ){
			callback.onRender( ctx )
		}
	
		var life = {}
		function compareAndReset( nowlife, fn ){
			for(var k in nowlife){
				delete life[k]
			}
			for( var k in life ){
				fn(k)
			}
			life = nowlife
		}
	
		return function( ctx ){
			var nowlife = {}
			var parts = ctx.parts
			for( var idx in parts ){
				var part = parts[idx]
				var obj = needObject( part.poolId, ctx )
				apply( obj, part, ctx )
				nowlife[part.poolId] = true
			}
			compareAndReset( nowlife, function(key){
				removeObject(key, ctx)
			})
			render( ctx )
		}
	}
	
	
	function three( w, h, scene, renderer ){
		var camera = new THREE.OrthographicCamera( w/-2, w/2, h/2, h/-2, -500, 1000 )
		camera.position.set( w/2, -h/2, 200 )
		
		return basic({
			onCreate: function( key, ctx ){
				var material = new THREE.MeshBasicMaterial( { map:null, color: 0x33aa55 } );
				// 加上transparent:true才會有png的透明效果, 也才有blending效果
				material.transparent = true;
			
				var obj = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), material)
				scene.add( obj )
				return obj
			},
			onUpdate: function( obj, part, ctx ){
				var tex = ctx.texture( 'three', part.tex )
				if( tex ){
					obj.material.map = tex
				}
			
				var material = obj.material
				material.blending = THREE[ 'CustomBlending' ];
				switch( part.blending ){
				case 'normal':
					//var blendings = [ "NoBlending", "NormalBlending", "AdditiveBlending", "SubtractiveBlending", "MultiplyBlending", "AdditiveAlphaBlending" ];
					material.blending = THREE[ 'NormalBlending' ];
					break;
				case 'add':
					material.blending = THREE[ 'AdditiveBlending' ];
					break;
				default:
					material.blending = THREE[ 'NoBlending' ];
				}
			
				obj.material.color.setRGB( part.color[0], part.color[1], part.color[2] )
				obj.material.opacity = part.color[3]
				obj.position.set( part.pos[0], -part.pos[1], 0 )
				obj.rotation.z = part.pos[2]
				obj.scale.set( part.size[0], part.size[1], 1 )
			},
			onRemove: function( obj, ctx ){
				scene.remove( obj )
			},
			onRender: function( ctx ){
				var bgColor = (ctx.bgColor[0]*255<<16) | (ctx.bgColor[1]*255<<8) | (ctx.bgColor[2]*255)
				renderer.setClearColor( bgColor, 1 );
				renderer.render( scene, camera )
			}
		})
	}
	
	function three2( w, h, scene, renderer ){	
		var camera = new THREE.OrthographicCamera( w/-2, w/2, h/2, h/-2, -500, 1000 )
		camera.position.set( w/2, -h/2, 200 )

		var objs = {}
	
		function createObject( key, ctx ){
			var obj = objs[key]
		
			if( obj == null ){
			
				var material = new THREE.MeshBasicMaterial( { map:null, color: 0x33aa55 } );
				// 加上transparent:true才會有png的透明效果, 也才有blending效果
				material.transparent = true;
			
				obj = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), material)
				objs[key] = obj
			}
		
			return obj
		}
		
		function addObject( obj, part, ctx ){
			if( ctx.textures[ part.tex ] ){
				obj.material.map = ctx.textures[ part.tex ]
			}
			
			var material = obj.material
			material.blending = THREE[ 'CustomBlending' ];
			switch( part.blending ){
			case 'normal':
				//var blendings = [ "NoBlending", "NormalBlending", "AdditiveBlending", "SubtractiveBlending", "MultiplyBlending", "AdditiveAlphaBlending" ];
				material.blending = THREE[ 'NormalBlending' ];
				break;
			case 'add':
				material.blending = THREE[ 'AdditiveBlending' ];
				break;
			default:
				material.blending = THREE[ 'NoBlending' ];
			}
			
			obj.material.color.setRGB( part.color[0], part.color[1], part.color[2] )
			obj.material.opacity = part.color[3]
			obj.position.set( part.pos[0], -part.pos[1], 0 )
			obj.rotation.z = part.pos[2]
			obj.scale.set( part.size[0], part.size[1], 1 )
			scene.add( obj )
		}
	
		function removeObject( key, ctx ){
			var obj = objs[key]
			if( obj != null ){
				scene.remove( obj )
				//不必刪除，用來重用
				//delete objs[key]
			}
		}
		
		function render( ctx ){
			var bgColor = (ctx.bgColor[0]*255<<16) | (ctx.bgColor[1]*255<<8) | (ctx.bgColor[2]*255)
			renderer.setClearColor( bgColor, 1 );
			renderer.render( scene, camera )
		}
	
		var life = {}
		function compareAndReset( nowlife, fn ){
			for(var k in nowlife){
				delete life[k]
			}
			for( var k in life ){
				fn(k)
			}
			life = nowlife
		}
	
		return function( ctx ){
			var nowlife = {}
			var parts = ctx.parts
			for( var idx in parts ){
				var part = parts[idx]
				var obj = createObject( part.poolId, ctx )
				addObject( obj, part, ctx )
				nowlife[part.poolId] = true
			}
			compareAndReset( nowlife, function(key){
				removeObject(key, ctx)
			})
			render( ctx )
		}
	}
	
	module.basic = basic
	module.three = three
	
	
}) ( particleDrawer )