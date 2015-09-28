var api = api || {};

(function( pkg ){
	
	function drawer( elem ){	
		var useWebgl = true
		var w = elem.width()
		var h = elem.height()
		var scene = new THREE.Scene
		var camera = new THREE.OrthographicCamera( w/-2, w/2, h/2, h/-2, -500, 1000 )
		camera.position.set( w/2, -h/2, 200 )

		var renderer = useWebgl ? new THREE.WebGLRenderer({antialias: true}) : new THREE.CanvasRenderer({antialias: true})
	
		renderer.setSize( w, h )
	
		$(renderer.domElement).appendTo( elem )
	
		var objs = {}
	
		function createObject( scene, key ){
			var obj = objs[key]
		
			if( obj == null ){
			
				var material = new THREE.MeshBasicMaterial( { map:null, color: 0x33aa55 } );
				// 加上transparent:true才會有png的透明效果, 也才有blending效果
				material.transparent = true;
			
				obj = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), material)
				objs[key] = obj
			}
		
			scene.add( obj )
			
			return obj
		}
	
		function removeObject( key ){
			var obj = objs[key]
			if( obj != null ){
				scene.remove( obj )
				//不必刪除，用來重用
				//delete objs[key]
			}
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
				var obj = createObject( scene, part.poolId )
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
				obj.position.set( part.pos[0], -part.pos[1], 0 )
				obj.rotation.z = part.pos[2]

				obj.scale.set( part.size[0], part.size[1], 1 )
				nowlife[part.poolId] = true
			}
			compareAndReset( nowlife, function(key){
				removeObject(key)
			})
			var bgColor = (ctx.bgColor[0]*255<<16) || (ctx.bgColor[1]*255<<8) || (ctx.bgColor[2]*255)
			renderer.setClearColor( bgColor, 1 );
			renderer.render( scene, camera )
		}
	}
	
	
	var pool = particle.pool( 5000 )
	var first = particle.initParticle( pool.get(), { 
		id: 'root',
		lifetime: 0,
		vel: [1, 1, 1],
		emit: {
			duration: 0.1,
			force: 100,
			range: 0,
			prototype: [
				{
					color: [0, 1, 1, 1],
					vel: [0, 0, 1],
					emit: {
						duration: 0.1,
						prototype:[
							{
								vel: [0, -100, 1]
							}
						]
					}
				},
				{
					lifetime: 10,
					color: [0, 0, 1, 1],
					vel: [0, 200, 5],
					emit: {
						lifetime: 5,
						duration: 0.05,
						prototype:[
							{
								vel: [0, -100, 0]
							},
							{
								vel: [100, 0, 0]
							}
						]
					}
				}
			]
		},
		formulaList: [
			function(part, lifep){
				
			}
		]
	})
	
	var ctx = {
		parts: [],
		textures: {},
		bgColor: [0, 0, 0],
		fps: 60,
	}
	
	var callback
	
	function startParticleStep( dom ){
		var countElem = $('#count')
		var draw = drawer($(dom))
		var last = new Date().getTime()
		setTimeout( function(){
			var now = new Date().getTime()
			var elap = (now - last)/ 1000.0
			last = now
			particle.stepParticles( pool, ctx.parts, elap )
			draw( ctx )
			setTimeout( arguments.callee, 1000.0/ctx.fps )
			if (callback){
				callback(["tick", elap])
			}
		}, 0)
		/*
		setTimeout( function(){
			var obj = pool.get()
			if( obj ){
				var input = {
					"poolId":1,
					"using":true,
					"id":"22bb721e-016c-4a40-ab21-18ddc7ce2b72",
					"lifetime":0,
					"mass":1,
					"color":[1,1,1,1],
					"size":[40,40],
					"pos":[216.67830823198068,264.9950804124453,0],
					"vel":[0,0,0],
					"tex":"d0e9b66e-b99a-42cf-b693-35e674ccc557",
					"blending":"add",
					"timer":1.433,
					"emitTimes":28,
					"forceVel":[0,0,0],
					"name":"粒子",
					"emit":{
						"prototype":[
							{
								"id":"b8b483cf-3557-42bd-b2d6-18cbcfae9427",
								"name":"粒子",
								"lifetime":5,
								"vel":[0,0,0],
								"pos":[216.47288528997586,264.74385051555663,0],
								"mass":1,
								"color":[1,1,1,1],
								"size":[40,40],
								"tex":"d0e9b66e-b99a-42cf-b693-35e674ccc557",
								"blending":"add",
								"formulaList":[["scale-x","linear",20,0,0,0,0,"4ffe2b0a-e0cb-417e-b730-3cad11207920"],["scale-y","linear",20,0,0,0,0,"9bfc43e6-6a1a-448e-8a71-08360f1bcb4f"]]
							}],
						"count":0.5,
						"duration":2,
						"angle":0,
						"range":6.28,
						"force":30
					}}
				particle.formatFormula( input )
				var np = particle.initParticle( obj, input )
				ctx.parts.push( np )
			}
			
		}, 1000)
		*/
	}
	
	
	/**
	建立、編輯粒子
	particle: { 
		id:0, 
		lifetime:5,
		mass:3,
		color:'#33ddff',
		size:[10, 10],
		pos:[300, 300, 0], 
		vel:[0, 0, 0],
		tex: "texture id",
		blending: nil | "normal" | "add"
		emit: { 
			count:1,
			duration:.5,
			angle:0,
			range:0,
			force:100,
			prototype:[ 
				{
					id:1, 
					lifetime:2,
					mass:3,
					color:'#33ddff',
					size:[10, 10],
					pos:[0, 0, 0], 
					vel:[0,0,0]
				}
			]
		},
		formulaList: [
			[
				target: 
					"x" | "y" | "rot" | "vx" | "vy" | "vr" | 
					"scale-x" | "scale-y" | "r" | "g" | "b" | "a" |
					"emit-angle" | "emit-range" | "emit-count" | "emit-force" | "emit-duration",
	
				type:
					"const" | "constAdd" | "linear" | "linearAdd" | "randStartAdd"
	
				p1:int,
				p2:int,
				p3:int,
				p4:int,
				p5:int
			]
		]
	}
	*/
	function editParticle( inpart ){
		copy = JSON.parse( JSON.stringify( inpart ) )
		particle.formatFormula( copy )
		
		var i = 0
		for(;i< ctx.parts.length; ++i){
			var part = ctx.parts[i]
			if( part.id == copy.id ){
				for( var k in copy ){
					part[k] = copy[k]
				}
				break
			}
		}
		if( i == ctx.parts.length ){
			var obj = pool.get()
			var np = particle.initParticle( obj, copy )
			ctx.parts.push( np )
		}
	}
	
	/**
	取得資訊
	cb: function( err, data ){
		data: {
			count: Int //粒子數量,
			bgColor: [r: float, g:float, b:float]
		}
	}
	*/
	function info( cb ){
		cb( null,
			{
				count: ctx.parts.length,
				bgColor: ctx.bgColor
			}
		)
	}
	
	
	/**
	監聽Model事件
	listener: function( info ){
		info:
			["tick", elapsedTime: float] |
			["other", null]
	}
	*/
	function addEventListener( listener ){
		callback = listener
	}
	
	/**
	新增材質
	*/
	function addTexture( id, img ){
		var tex = new THREE.Texture(img)
		tex.needsUpdate = true
		ctx.textures[id] = tex
	}
	
	/**
	改變粒子數量上限
	*/
	function changeLimit( limit ){
		
	}
	
	/**
	改變背景顏色
	*/
	function changeBgColor( r, g, b ){
		ctx.bgColor = [r, g, b]
	}
	
	/**
	清除所有粒子
	*/
	function clearParticle(){
		for( var i in ctx.parts ){
			var obj = ctx.parts[i]
			pool.put( obj )
		}
		ctx.parts.length = 0
	}
	
	/**
	初使化，這必須在一開始呼叫
	*/
	function init( dom ){
		startParticleStep( dom )
	}
	
	pkg.editParticle = editParticle
	pkg.info = info
	pkg.addEventListener = addEventListener
	pkg.addTexture = addTexture
	pkg.changeLimit = changeLimit
	pkg.changeBgColor = changeBgColor
	pkg.clearParticle = clearParticle
	pkg.init = init
	
}) (api)