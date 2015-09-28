var api = api || {};

(function( pkg ){
	
	
	var countElem = $('#count')
	
	function drawer( elem ){
		var logo = $('#logo')[0]
		var tex = new THREE.Texture(logo)
		// 需要這行，不然畫不出材質
		tex.needsUpdate = true
		
		var useWebgl = true
		var w = 1200.0
		var h = 627.0
		var scene = new THREE.Scene
		var camera = new THREE.OrthographicCamera( w/-2, w/2, h/2, h/-2, -500, 1000 )
		camera.position.set( 0, 0, 200 )

		var renderer = useWebgl ? new THREE.WebGLRenderer({antialias: true}) : new THREE.CanvasRenderer({antialias: true})
		
		renderer.setSize( w, h )
		renderer.setClearColor( 0, 1 );
		
		$(renderer.domElement).appendTo( elem )
		
		var objs = {}
		
		function createObject( scene, key ){
			var obj = objs[key]
			
			if( obj == null ){
				
				var material = new THREE.MeshBasicMaterial( { map:null, color: 0x33aa55 } );
				// 加上transparent:true才會有png的透明效果, 也才有blending效果
				material.transparent = true;
				
				material.blending = THREE[ 'CustomBlending' ];

				material.blendSrc = THREE[ 'OneFactor' ];
				material.blendDst = THREE[ 'OneFactor' ];
				material.blendEquation = THREE.AddEquation;

				material.blendSrcAlpha = THREE[ 'OneFactor' ];
				material.blendDstAlpha = THREE[ 'OneFactor' ];
				material.blendEquationAlpha = THREE.AddEquation;
				
				obj = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), material)
				objs[key] = obj
				scene.add( obj )
			}
			
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
				var obj = createObject( scene, part.id )
				obj.material.map = tex
				obj.material.color.setHex(parseInt( part.color.substr(1), 16 ))
				obj.position.set( part.pos[0], part.pos[1], 0 )
				obj.rotation.z = part.pos[2]
				obj.scale.set( part.size[0], part.size[1], 1 )
				nowlife[idx] = true
			}
			compareAndReset( nowlife, function(key){
				removeObject(key)
			})
			renderer.render( scene, camera )
		}
	}
	
	var draw = drawer($('#webgl'))
	var pool = particle.pool( 5000 )
	var first = particle.initParticle( pool.get(), { 
		lifetime: 0,
		vel: [1, 1, 1],
		emit: {
			duration: 0.1,
			force: 100,
			range: 0,
			proto: [
				{
					color: '#aabb44',
					vel: [0, 0, 1],
					emit: {
						duration: 0.1,
						proto:[
							{
								vel: [0, -100, 1]
							}
						]
					}
				},
				{
					lifetime: 10,
					color: '#ff0000',
					vel: [0, 200, 5],
					emit: {
						lifetime: 5,
						duration: 0.05,
						proto:[
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
		parts: [first]
	}
	var last = new Date().getTime()
	/*
	setTimeout( function(){
		var now = new Date().getTime()
		var elap = now - last
		last = now
		particle.stepParticles( pool, ctx.parts, elap/ 1000.0 )
		draw( ctx )
		countElem.html( ctx.parts.length )
		setTimeout( arguments.callee, 50 )
	}, 1000)
	*/
	
	
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
	function editParticle( particle ){
		
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
		
	}
	
	/**
	新增材質
	*/
	function addTexture( id, img ){
		
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
		
	}
	
	/**
	清除所有粒子
	*/
	function clearParticle(){
		
	}
	
	/**
	初使化，這必須在一開始呼叫
	info:{
		dom: htmlDiv
	}
	*/
	function init( info ){
		
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