var particle = particle || {};

(function( module ){
	
	function pool( size ){
		var ary = []
		for( var i=0; i<size; ++i ){
			ary.push({
				id: i,
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
					if( k != 'id' ){
						delete obj.k
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
		obj.lifetime = info.lifetime != undefined ? info.lifetime : 5.0
		obj.mass = info.mass != undefined ? info.mass : 1.0
		obj.color = info.color != undefined ? info.color : '#33ddff'
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
			obj.emit.proto = info.emit.proto
		}
		if( info.formulaList ){
			obj.formulaList = info.formulaList
		}
		obj.timer = 0.0
		obj.emitTimes = 0
		obj.forceVel = [0, 0, 0]
		return obj
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
			var lifep = part.timer/ part.lifetime
			f( part, lifep )
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
		for( var i = parts.length-1; i>=0; --i ){
			var part = parts[i]
			stepParticle( part, delta )
			// emit
			if( part.emit ){
				var shouldTimes = Math.floor(part.timer/ part.emit.duration)
				var offsetTimes = shouldTimes - part.emitTimes
				if( offsetTimes > 0 ){
					
					for( var i in part.emit.proto ){
						var newp = part.emit.proto[i]
						var obj = pool.get()
						if( obj != null ){
							initParticle( obj, newp )
							
							obj.pos[0] = part.pos[0]
							obj.pos[0] = part.pos[0]
							obj.pos[0] = part.pos[0]
							
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
			
			// remove time > lifetime
			if( part.timer > part.lifetime ){
				pool.put( part )
				parts.splice( i, 1 )
			}
		}
	}
	
	module.pool = pool
	module.initParticle = initParticle
	module.stepParticles = stepParticles
	
}) ( particle )