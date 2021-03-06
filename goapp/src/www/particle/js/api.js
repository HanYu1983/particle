var api = api || {};

(function( pkg ){
	
	var pool = particle.pool( 2000 )
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
		fps: 30,
		texture: function( type, key ){
			return this.textures[key]
		}
	}
	
	var callback
	var renderer
	
	function startParticleStep( dom ){
		var jdom = $(dom)
		var w = jdom.width()
		var h = jdom.height()
		var countElem = $('#count')
		
		var useWebgl = true
		// 設定preserveDrawingBuffer為true是為了要能toDataUrl
		renderer = useWebgl ? new THREE.WebGLRenderer({preserveDrawingBuffer:true}) : new THREE.CanvasRenderer({preserveDrawingBuffer: true})
		renderer.setSize( w, h )
		$(renderer.domElement).appendTo( jdom )
		var scene = new THREE.Scene
		var draw = particleDrawer.three(w, h, scene, renderer)
		
		var last = new Date().getTime()
		setTimeout( function(){
			var now = new Date().getTime()
			var elap = (now - last)/ 1000.0
			last = now
			particle.stepParticles( pool, ctx.parts, elap )
			// 刪除超過螢幕的
			ctx.parts = _.filter( ctx.parts, function(item){
				// 函數式的函式中增加了副作用，還在可以接受的範圍
				var shouldRemove = item.pos[0] < 0 || item.pos[0] > w || item.pos[1] < 0 || item.pos[1] > h
				if( shouldRemove ){
					pool.put( item )
				}
				return shouldRemove == false
			})
			draw( ctx )
			setTimeout( arguments.callee, 1000.0/ctx.fps )
			if (callback){
				callback(["tick", elap])
			}
		}, 0)
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
					"x" | "y" | "rot" | "vx" | "vy" | "vr" | "fvx" | "fvy" | "fvr"
					"scale-x" | "scale-y" | "r" | "g" | "b" | "a" |
					"emit-angle" | "emit-range" | "emit-count" | "emit-force" | "emit-duration",
	
				type:
					"const" | "constAdd" | "constMul" |
					"linear" | "linearAdd" | "linearMul" |
					"rand" | "randAdd" | "randStartAdd" |
					"custom" | "customAdd" | "customMul"
	
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
				// 必須將發射次數重設，發射粒子的次數才不會算錯
				part.emitTimes = Math.floor( part.timer/ part.emit.duration )
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

	/**
	取得粒子畫面快照
	*/
	function snapshot( w, h, delay, cb ){
		var tid = 0
		tid = setTimeout( function(){
			var secondClip = $( '<canvas width="'+w+'" height="'+h+'"></canvas>' );
			secondClip[0].getContext( '2d' ).drawImage( renderer.domElement, 0, 0 );
			cb( null, secondClip[0] )
			clearTimeout( tid );
		}, delay );
	}
	
	/**
	記錄到server
	*/
	function saveToServer( name, img, part, override, cb ){
		var path = db2path.sf( db2path.oneParticleInfo, [name] )
		var imagePath = db2path.sf( db2path.oneParticleImage, [name] )
		async.parallel([
			_.partial( db2.pwritefile, '../particledbfile2/' + path, {
				Content: JSON.stringify( part )
			}),
			_.partial( db2.pwritefile, '../particledbfile2/' + imagePath, {
				Content: img.toDataURL().split( ',' )[1]
			}),
		], cb)
	}
	
	function loadParticleList( offset, cnt, cb ){
		db2.pfilelist('../particledbfile2/root/particle/list', null, function(err, ret){
			if( err ){
				cb( err )
			} else {
				var map = {}
				for( var i in ret ){
					var file = ret[i]
					var token = file.Name.split('/')
					var filename = token[token.length-1]
					var key = filename.split('.')[0]
					var ext = filename.split('.')[1]
					if( map[key] == undefined ){
						map[key] = {}
					}
					if( ext == 'jpg' ){
						map[key].img = '../particledbfile2/' + file.Name
					} else if (ext == 'json'){
						map[key].key = key
						map[key].time = file.Time
					}
				}
				var list = []
				for( var k in map ){
					var obj = map[k]
					if( obj.img == undefined || obj.key == undefined ){
						continue
					}
					list.push( obj )
				}
				list.sort(function(a, b){return b.time-a.time});
				cb( null, list )
			}
		} )
	}
	
	function loadParticle(id, cb){
		db2.pfile('../particledbfile2/root/particle/list/'+id+'.json', null, 'json', cb)
	}
	
	
	pkg.editParticle = editParticle
	pkg.info = info
	pkg.addEventListener = addEventListener
	pkg.addTexture = addTexture
	pkg.changeLimit = changeLimit
	pkg.changeBgColor = changeBgColor
	pkg.clearParticle = clearParticle
	pkg.init = init
	pkg.snapshot = snapshot
	pkg.saveToServer = saveToServer
	pkg.loadParticleList = loadParticleList
	pkg.loadParticle = loadParticle
	
}) (api)