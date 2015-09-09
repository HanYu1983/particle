var api = api || {};

(function( pkg ){
	
	var cbid = 0
	var cbs = {}
	
	common.onModel.subscribe(function(param){
		var err = param[0]
		var data = param[1]
		var request = param[2]
		if( cbs[request.cbid] ){
			cbs[request.cbid]( err, data )
			delete cbs[request.cbid]
		}
	})

	common.onView.subscribe(function(data){
		//console.log( data )
	})
	
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
		common.onView.onNext(['edit-particle', particle])
	}
	
	/**
	改變畫布原點位置
	*/
	function changeCenterPos( id, x, y ){
		common.onView.onNext(['edit-centerPos', [id, x, y]])
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
		var param = {
			cbid: cbid++
		}
		cbs[param.cbid] = cb
		common.onView.onNext(['info', param])
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
		common.onModelEvent.subscribe( listener )
	}
	
	/**
	新增材質
	*/
	function addTexture( id, img ){
		common.onView.onNext(['add texture', [id, img]])
	}
	
	/**
	改變粒子數量上限
	*/
	function changeLimit( limit ){
		common.onView.onNext(['edit-limit', limit])
	}
	
	/**
	改變背景顏色
	*/
	function changeBgColor( r, g, b ){
		common.onView.onNext(['edit-bgColor', [r, g, b]])
	}
	
	/**
	清除所有粒子
	*/
	function clearParticle(){
		common.onView.onNext(['clear particle', null])
	}
	
	/**
	初使化，這必須在一開始呼叫
	*/
	function init( canvas ){
		common.onView.onNext(['init', canvas])
	}
	
	pkg.editParticle = editParticle
	pkg.changeCenterPos = changeCenterPos
	pkg.info = info
	pkg.addEventListener = addEventListener
	pkg.addTexture = addTexture
	pkg.changeLimit = changeLimit
	pkg.changeBgColor = changeBgColor
	pkg.clearParticle = clearParticle
	pkg.init = init
	
}) (api)