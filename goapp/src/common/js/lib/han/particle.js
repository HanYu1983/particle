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
		obj.color = info.color != undefined ? info.color.slice() : [0.2, 0.2, 0.2, 1]
		obj.size = info.size != undefined ? info.size.slice() : [50, 50]
		obj.pos = info.pos != undefined ? info.pos.slice() : [0,0,0]
		obj.vel = info.vel != undefined ? info.vel.slice() : [0,0,0]
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
			obj.formulaList = info.formulaList.slice()
		}
		obj.timer = 0.0
		obj.emitTimes = 0
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
	function formatFormula( inpart ){
		if( inpart.formulaList ){
			var newf = []
			for( var i in inpart.formulaList ){
				var f = inpart.formulaList[i]
				var target = f[0]
				var type = f[1]
				var p1 = f[2]
				var p2 = f[3]
				var p3 = f[4]
				var p4 = f[5]
				var p5 = f[6]
				var ff = _.partial( formula[type], target, [p1, p2, p3, p4, p5] )
				newf.push( ff )
			}
			inpart.formulaList = newf
		}
		
		if( inpart.emit ){
			if( inpart.emit.prototype ){
				for( var i in inpart.emit.prototype ){
					var sub = inpart.emit.prototype[i]
					formatFormula( sub )
				}
			}
		}
	}
	
	var formula = {
		"const": function( target, p, part, lifep, delta ){
			setFormulaTarget( target, part, p[0] )
		},
		"constAdd": function( target, p, part, lifep, delta ){
			var ori = getFormulaTarget( target, part )
			setFormulaTarget( target, part, ori + p[0] )
		},
		"constMul": function( target, p, part, lifep, delta ){
			var ori = getFormulaTarget( target, part )
			setFormulaTarget( target, part, ori * p[0] )
		},
		"linear": function( target, p, part, lifep, delta ){
			var offset = p[1] - p[0]
			var adj = p[0] + offset* lifep 
			setFormulaTarget( target, part, adj )
		},
		"linearAdd": function( target, p, part, lifep, delta ){
			var ori = getFormulaTarget( target, part )
			var offset = p[1] - p[0]
			var adj = p[0] + offset* lifep 
			setFormulaTarget( target, part, ori + adj )
		},
		"linearMul": function( target, p, part, lifep, delta ){
			var ori = getFormulaTarget( target, part )
			var offset = p[1] - p[0]
			var adj = p[0] + offset* lifep 
			setFormulaTarget( target, part, ori * adj )
		},
		"rand": function( target, p, part, lifep, delta ){
			var adj = p[0]*Math.random() - p[0]/2
			setFormulaTarget( target, part, adj )
		},
		"randAdd": function( target, p, part, lifep, delta ){
			var ori = getFormulaTarget( target, part )
			var adj = p[0]*Math.random() - p[0]/2
			setFormulaTarget( target, part, ori + adj )
		},
		"randStartAdd": function( target, p, part, lifep, delta ){
			if( lifep == 0.0 ){
				var ori = getFormulaTarget( target, part )
				var adj = p[0]*Math.random() - p[0]/2
				setFormulaTarget( target, part, ori + adj )
			}
		},
		"custom": function( target, p, part, lifep, delta ){
			if( lifep == 0.0 ){
				setFormulaTarget( target, part, p[0] )
			} else if( lifep < 0.25 ){
				var adj = p[0] + (p[1]-p[0]) * lifep / 0.25
				setFormulaTarget( target, part, adj )
			} else if( lifep < 0.5 ){
				var adj = p[1] + (p[2]-p[1]) * (lifep - 0.25) / 0.25
				setFormulaTarget( target, part, adj )
			} else if( lifep < 0.75 ){
				var adj = p[2] + (p[3]-p[2]) * (lifep - 0.5) / 0.25
				setFormulaTarget( target, part, adj )
			} else if( lifep < 1 ){
				var adj = p[3] + (p[4]-p[3]) * (lifep - 0.75) / 0.25
				setFormulaTarget( target, part, adj )
			} else {
				setFormulaTarget( target, part, p[4] )
			}
		},
		"customAdd": function( target, p, part, lifep, delta ){
			var ori = getFormulaTarget( target, part )
			if( lifep == 0.0 ){
				setFormulaTarget( target, part, ori + p[0] )
			} else if( lifep < 0.25 ){
				var adj = p[0] + (p[1]-p[0]) * lifep / 0.25
				setFormulaTarget( target, part, ori + adj )
			} else if( lifep < 0.5 ){
				var adj = p[1] + (p[2]-p[1]) * (lifep - 0.25) / 0.25
				setFormulaTarget( target, part, ori + adj )
			} else if( lifep < 0.75 ){
				var adj = p[2] + (p[3]-p[2]) * (lifep - 0.5) / 0.25
				setFormulaTarget( target, part, ori + adj )
			} else if( lifep < 1 ){
				var adj = p[3] + (p[4]-p[3]) * (lifep - 0.75) / 0.25
				setFormulaTarget( target, part, ori + adj )
			} else {
				setFormulaTarget( target, part, ori + p[4] )
			}
		},
		"customMul": function( target, p, part, lifep, delta ){
			var ori = getFormulaTarget( target, part )
			if( lifep == 0.0 ){
				setFormulaTarget( target, part, ori * p[0] )
			} else if( lifep < 0.25 ){
				var adj = p[0] + (p[1]-p[0]) * lifep / 0.25
				setFormulaTarget( target, part, ori * adj )
			} else if( lifep < 0.5 ){
				var adj = p[1] + (p[2]-p[1]) * (lifep - 0.25) / 0.25
				setFormulaTarget( target, part, ori * adj )
			} else if( lifep < 0.75 ){
				var adj = p[2] + (p[3]-p[2]) * (lifep - 0.5) / 0.25
				setFormulaTarget( target, part, ori * adj )
			} else if( lifep < 1 ){
				var adj = p[3] + (p[4]-p[3]) * (lifep - 0.75) / 0.25
				setFormulaTarget( target, part, ori * adj )
			} else {
				setFormulaTarget( target, part, ori * p[4] )
			}
		},
	}
		
	function getFormulaTarget( target, part ){
		switch( target ){
		case 'life':
			return part.lifetime
		case 'x':
			return part.pos[0]
		case 'y':
			return part.pos[1]
		case 'rot':
			return part.pos[2]
		case 'vx':
			return part.vel[0]
		case 'vy':
			return part.vel[1]
		case 'vr':
			return part.vel[2]
		case 'scale-x':
			return part.size[0]
		case 'scale-y':
			return part.size[1]
		case 'r':
			return part.color[0]
		case 'g':
			return part.color[1]
		case 'b':
			return part.color[2]
		case 'a':
			return part.color[3]
		case 'emit-angle':
			if( part.emit ){
				return part.emit.angle
			} else {
				return 0
			}
		case 'emit-range':
			if( part.emit ){
				return part.emit.range
			} else {
				return 0
			}
		case 'emit-count':
			if( part.emit ){
				return part.emit.count
			} else {
				return 0
			}
		case 'emit-force':
			if( part.emit ){
				return part.emit.force
			} else {
				return 0
			}
		case 'emit-duration':
			if( part.emit ){
				return part.emit.duration
			} else {
				return 0
			}
		}
	}
	
	function setFormulaTarget( target, part, v ){
		switch( target ){
		case 'life':
			return part.lifetime = v
		case 'x':
			return part.pos[0] = v
		case 'y':
			return part.pos[1] = v
		case 'rot':
			return part.pos[2] = v
		case 'vx':
			return part.vel[0] = v
		case 'vy':
			return part.vel[1] = v
		case 'vr':
			return part.vel[2] = v
		case 'scale-x':
			return part.size[0] = v
		case 'scale-y':
			return part.size[1] = v
		case 'r':
			return part.color[0] = v
		case 'g':
			return part.color[1] = v
		case 'b':
			return part.color[2] = v
		case 'a':
			return part.color[3] = v
		case 'emit-angle':
			if( part.emit ){
				return part.emit.angle = v
			} else {
				return 0
			}
		case 'emit-range':
			if( part.emit ){
				return part.emit.range = v
			} else {
				return 0
			}
		case 'emit-count':
			if( part.emit ){
				return part.emit.count = v
			} else {
				return 0
			}
		case 'emit-force':
			if( part.emit ){
				return part.emit.force = v
			} else {
				return 0
			}
		case 'emit-duration':
			if( part.emit ){
				return part.emit.duration = v
			} else {
				return 0
			}
		}
	}
	
	function stepParticle( part, delta ){
		// update position
		part.pos[0] += part.vel[0]* delta
		part.pos[1] += part.vel[1]* delta
		part.pos[2] += part.vel[2]* delta
		// update formula
		for( var i in part.formulaList ){
			var f = part.formulaList[i]
			if( part.lifetime <= 0 ){
				f( part, 0, delta )
			} else {
				var lifep = part.timer/ part.lifetime
				f( part, lifep, delta )
			}
		}
		// update timer
		part.timer += delta
	}
	
	function forceParticle( part, force ){
		part.vel[0] += force[0]/ part.mass
		part.vel[1] += force[1]/ part.mass
		part.vel[2] += force[2]/ part.mass
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
			if( part.emit && part.emit.duration > 0){
				var shouldTimes = Math.floor(part.timer/ part.emit.duration)
				var offsetTimes = shouldTimes - part.emitTimes
				while( offsetTimes-- > 0 ){
					for( var i in part.emit.prototype ){
						var newp = part.emit.prototype[i]
						for( var j =0; j< part.emit.count; ++j ){
							var obj = pool.get()
							if( obj != null ){
								initParticle( obj, newp )
								obj.pos[0] += part.pos[0]
								obj.pos[1] += part.pos[1]
								obj.pos[2] += part.pos[2]
							
								var angle = part.pos[2]
								angle += part.emit.angle
								angle += Math.random()* part.emit.range - part.emit.range/2
								forceParticle( obj, [
									Math.cos( angle )* part.emit.force,
									Math.sin( angle )* part.emit.force,
									0
								])
							
								// 使用0.01這個值讓位置的初始亂數可以正確計算
								stepParticle( obj, 0.01 )
								parts.push( obj )
							
							} else {
								console.log('no more idle obj in pool')
							}
						}
					}
					part.emitTimes = shouldTimes
				}
			}
			parts.push( part )
		}
	}
	
	function parseInput( pool, input ){
		var parts = _.reduce( input, function( ret, item ){
			var obj = pool.get()
			if( obj ){
				particle.formatFormula( item )
				particle.initParticle( obj, item )
				ret.push( obj )
			}
			return ret
		}, [])
		return parts
	}
	
	function clear( pool, parts ){
		for( var i in parts ){
			var obj = parts[i]
			pool.put( obj )
		}
		parts.length = 0
	}
	
	
	function particleSystem( pool, texture ){
		var ctx = {
			"texture": texture,
			"parts":[]
		} 
		return {
			emit: function( parts ){
				ctx.parts = ctx.parts.concat( parts )
			},
			clear: function(){
				clear( pool, ctx.parts )
			},
			clearOutBound: function( w, h ){
				// 刪除超過螢幕的
				ctx.parts = _.filter( ctx.parts, function(item){
					// 函數式的函式中增加了副作用，還在可以接受的範圍
					var shouldRemove = item.pos[0] < 0 || item.pos[0] > w || item.pos[1] < 0 || item.pos[1] > h
					if( shouldRemove ){
						pool.put( item )
					}
					return shouldRemove == false
				})
			},
			step: function( delta ){
				stepParticles( pool, ctx.parts, delta )
			},
			draw: function( drawer ){
				drawer( ctx )
			}
		}
	}
	
	module.pool = pool
	module.initParticle = initParticle
	module.stepParticles = stepParticles
	module.formatFormula = formatFormula
	module.parseInput = parseInput
	module.clear = clear
	module.particleSystem = particleSystem
	
}) ( particle )