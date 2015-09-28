var particle = particle || {};

(function( module ){
	
	function pool( size ){
		var ary = []
		for( var i=0; i<size; ++i ){
			ary.push({
				poolId: i,
				using: false
			})
		}
		var searchLast = 0
		return {
			get: function(){
				for( var i=0; i<ary.length; ++i ){
					var idx = (searchLast + i) % ary.length
					var obj = ary[idx]
					if( obj.using == false ){
						searchLast = idx
						obj.using = true
						return obj
					}
				}
				return null
			},
			put: function( obj ){
				for( var k in obj ){
					if( k != 'poolId' ){
						delete obj[k]
					}
				}
				obj.using = false
			},
			getAll: function(){
				return ary
			}
		}
	}
	
	function initParticle( obj, info ){
		obj.id = info.id != undefined ? info.id : null
		obj.lifetime = info.lifetime != undefined ? info.lifetime : 1.0
		obj.mass = info.mass != undefined ? info.mass : 1.0
		obj.color = info.color != undefined ? info.color : [0.2, 0.2, 0.2, 1]
		obj.size = info.size != undefined ? info.size : [50, 50]
		obj.pos = info.pos != undefined ? info.pos : [0,0,0]
		obj.vel = info.vel != undefined ? info.vel : [0,0,0]
		obj.tex = info.tex != undefined ? info.tex : null
		obj.blending = info.blending != undefined ? info.blending : null
		if( info.emit ){
			obj.emit = {}
			obj.emit.count = info.emit.count != undefined ? info.emit.count : 1
			obj.emit.duration = info.emit.duration != undefined ? info.emit.duration : 1
			obj.emit.angle = info.emit.angle != undefined ? info.emit.angle : 0
			obj.emit.range = info.emit.range != undefined ? info.emit.range : 0
			obj.emit.force = info.emit.force != undefined ? info.emit.force : 0
			obj.emit.prototype = info.emit.prototype
		}
		if( info.formulaList ){
			obj.formulaList = info.formulaList
		}
		obj.timer = 0.0
		obj.emitTimes = 0
		obj.forceVel = [0, 0, 0]
		return obj
	}
	
	/**
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
	*/
	function formatParticle( obj, inpart ){
		initParticle( obj, inpart )
		if( part.formulaList ){
			var newf = []
			for( var i in part.formulaList ){
				var f = part.formulaList[i]
				var target = f[0]
				var type = f[1]
				var p1 = f[2]
				var p2 = f[3]
				var p3 = f[4]
				var p4 = f[5]
				var p5 = f[6]
				f.push( formula[type].bind( target, params ) )
			}
			part.formulaList = newf
		}
		return obj
	}
	
	var formula = {
		"const": function( target, params, part, lifep ){
			updateFormulaTarget( target, part, params[0] )
		},
		"linear": function( target, params, part, lifep ){
			updateFormulaTarget( target, part, params[0] )
		}
	}
	
	function updateFormulaTarget( target, part, v ){
		switch( target ){
		case 'x':
			part.pos[0] = v
		}
	}
	
	function stepParticle( part, delta ){
		// update position
		part.pos[0] += part.vel[0]* delta
		part.pos[1] += part.vel[1]* delta
		part.pos[2] += part.vel[2]* delta
		part.pos[0] += part.forceVel[0]* delta
		part.pos[1] += part.forceVel[1]* delta
		part.pos[2] += part.forceVel[2]* delta
		// update formula
		for( var i in part.formulaList ){
			var f = part.formulaList[i]
			if( part.lifetime <= 0 ){
				//f( part, 0 )
			} else {
				var lifep = part.timer/ part.lifetime
				//f( part, lifep )
			}
		}
		// update timer
		part.timer += delta
	}
	
	function forceParticle( part, force ){
		part.forceVel[0] += force[0]/ part.mass
		part.forceVel[1] += force[1]/ part.mass
		part.forceVel[2] += force[2]/ part.mass
	}
	
	function stepParticles( pool, parts, delta ){
		
		var tmp = parts.slice()
		parts.length = 0
			
		for(var i in tmp){
			var part = tmp[i]
			// remove time > lifetime
			if( part.lifetime > 0 ){
				if( part.timer > part.lifetime ){
					pool.put( part )
					continue
				}
			}
			
			stepParticle( part, delta )
			// emit
			if( part.emit ){
				var shouldTimes = Math.floor(part.timer/ part.emit.duration)
				var offsetTimes = shouldTimes - part.emitTimes
				if( offsetTimes > 0 ){
					
					for( var i in part.emit.prototype ){
						var newp = part.emit.prototype[i]
						var obj = pool.get()
						if( obj != null ){
							initParticle( obj, newp )
							obj.pos[0] = part.pos[0]
							obj.pos[1] = part.pos[1]
							obj.pos[2] = part.pos[2]
							
							var angle = part.pos[2]
							angle += part.emit.angle
							angle += Math.random()* part.emit.range - part.emit.range/2
							forceParticle( obj, [
								Math.cos( angle )* part.emit.force,
								Math.sin( angle )* part.emit.force,
								0
							])
							parts.push( obj )
							
						} else {
							console.log('no more idle obj in pool')
						}
					}
					part.emitTimes = shouldTimes
				}
			}
			parts.push( part )
		}
	}
	
	module.pool = pool
	module.initParticle = initParticle
	module.stepParticles = stepParticles
	
}) ( particle )