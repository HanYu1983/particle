var app = app || {};
app.controller = app.controller || {};

(function( module ){
	function appStart( view, model ){
		var webgl = view.webgl;
		var currentParticle = undefined;
		
		api.init( webgl );
		
		var particles = model.getParticles();
		
		var treeModel = {};
		modelToTree( particles, treeModel );
		//console.log( treeModel );
		view.setTree( [ {
			id:'root',
			text:'渲染層',
			children:[treeModel]
		} ], 1 );
		
		view.event.on( 'onBackColorChange', function( e, options ){
			api.changeBgColor( options.rgb.r / 255, options.rgb.g / 255, options.rgb.b / 255 );
		});
		
		model.event.on( 'onInfoChange', function( e, options ){
			view.setInfo( options.count, options.fps );
		});
		
		view.event.on( 'onViewTreeChange', function( e, options ){
			updateRender();
		});
		
		view.event.on( 'onTreeClick', function( e, options ){
			if( options.node.particle == undefined ) return;
			view.setDgdProp( (function( node ){
				var p = node.particle;
				
				if( vic.easyui.getTreeIsLeaf( view.tree_particle, node ) ){
					return [
						{id:'lifetime', name:'生命毫秒', v: p.lifetime * 1000 },
						{id:'mass', name:'質量', v: p.mass},
						{id:'rot', name:'角度', v: radianToDegree( p.pos[2] )},
						{id:'x', name:'位置x', v: p.pos[0]},
						{id:'y', name:'位置y', v: p.pos[1]},
						{id:'vx', name:'速度x', v: p.vel[0]},
						{id:'vy', name:'速度y', v: p.vel[1]},
						{id:'vr', name:'轉速', v: radianToDegree( p.vel[2] )},
						{id:'a', name:'alpha', v: p.color[3] * 1000 },
						{id:'scale-x', name:'寬度', v: p.size[0]},
						{id:'scale-y', name:'高度', v: p.size[1]}
					];
				}
				return [
					{id:'lifetime', name:'生命毫秒', v: p.lifetime * 1000 },
					{id:'mass', name:'質量', v: p.mass},
					{id:'rot', name:'角度', v: radianToDegree( p.pos[2] )},
					{id:'x', name:'位置x', v: p.pos[0]},
					{id:'y', name:'位置y', v: p.pos[1]},
					{id:'vx', name:'速度x', v: p.vel[0]},
					{id:'vy', name:'速度y', v: p.vel[1]},
					{id:'vr', name:'轉速', v: radianToDegree( p.vel[2] )},
					{id:'a', name:'alpha', v: p.color[3] * 1000 },
					{id:'scale-x', name:'寬度', v: p.size[0]},
					{id:'scale-y', name:'高度', v: p.size[1]},
					{id:'emit-count', name:'發射數目', v: p.emit.count},
					{id:'emit-duration', name:'發射週期', v: p.emit.duration * 1000 },
					{id:'emit-angle', name:'發射角度', v: radianToDegree( p.emit.angle )},
					{id:'emit-range', name:'發射範圍', v: radianToDegree( p.emit.range )},
					{id:'emit-force', name:'發射力道', v: p.emit.force}
				];
			})( options.node ));
			
			if( options.node.particle.formulaList != undefined ){
				view.setAdvDgdProp((function( node ){
					var p = node.particle;
					return _.map( p.formulaList, function( f ){
						var retobj = {
							id:f[0], tid:f[1], name:app.utils.keyToName(f[0]), type:app.utils.keyToName(f[1]), v1:f[2], v2:f[3], v3:f[4], v4:f[5], v5:f[6]
						}
						switch( retobj.id ){
							case 'rot':
							case 'vr':
							case 'emit-range':
							case 'emit-angle':
								switch( retobj.tid ){
									case 'linearMul','constMul':
										retobj.v1 = retobj.v1 * 1000;
										retobj.v2 = retobj.v2 * 1000;
										retobj.v3 = retobj.v3 * 1000;
										retobj.v4 = retobj.v4 * 1000;
										retobj.v5 = retobj.v5 * 1000;
										break;
									default:
										retobj.v1 = radianToDegree( retobj.v1 );
										retobj.v2 = radianToDegree( retobj.v2 );
										retobj.v3 = radianToDegree( retobj.v3 );
										retobj.v4 = radianToDegree( retobj.v4 );
										retobj.v5 = radianToDegree( retobj.v5 );
										break;
									
								}
							
								break;
							case 'lifetime':
							case 'a':
								retobj.v1 = retobj.v1 * 1000;
								retobj.v2 = retobj.v2 * 1000;
								retobj.v3 = retobj.v3 * 1000;
								retobj.v4 = retobj.v4 * 1000;
								retobj.v5 = retobj.v5 * 1000;
								break;
							default:
								switch( retobj.tid ){
									case 'linearMul','constMul':
										retobj.v1 = retobj.v1 * 1000;
										retobj.v2 = retobj.v2 * 1000;
										retobj.v3 = retobj.v3 * 1000;
										retobj.v4 = retobj.v4 * 1000;
										retobj.v5 = retobj.v5 * 1000;
								}
						}
						/*
						
						*/
						return retobj;
					});
				})( options.node ));
			}
			
			view.setImgFocus( options.node.particle.tex );
			view.setParticleColor( options.node.particle.color[0], options.node.particle.color[1], options.node.particle.color[2] );
			view.setBlending( options.node.particle.blending );
			view.setName( options.node.particle.name );
			
			currentParticle = options.node.particle;
		});
		
		view.event.on( 'onMouseMove', function( e, options ){
			var renderRoots = vic.easyui.getTreeNodeById( view.tree_particle, 'root' );
			if( renderRoots.children.length > 0 ){
				_.each( renderRoots.children, function( root ){
					var rootParticle = root.particle;
					rootParticle.pos[0] = options.targetPos[0];
					rootParticle.pos[1] = options.targetPos[1];
				});
			}
			updateRender();
		});
		
		view.event.on( 'onImgClick', function( e, options ){
			currentParticle.tex = options.id;
			updateRender();
		});
		
		view.event.on( 'onDgdPropsClick', function( e, options ){
			//console.log( options );
		});
		
		view.event.on( 'onPropChange', function( e, options ){
			if( currentParticle == undefined ) return;
			if( options.currentRow == undefined ) {
				currentParticle.formulaList = [];
				return;
			}
			var row = options.currentRow.row;
			var rows = options.rows;
			if( rows != undefined ){
				currentParticle.formulaList = _.map( rows, function( r ){
					
					var retobj = [r.id, r.tid, 
								parseInt( r.v1 ),
								parseInt( r.v2 ),
								parseInt( r.v3 ),
								parseInt( r.v4 ),
								parseInt( r.v5 )];
								
					switch( r.id ){
						case 'rot':
						case 'vr':
						case 'emit-range':
						case 'emit-angle':
							switch( r.tid ){
								case 'linearMul','constMul':
									retobj[2] = retobj[2] / 1000;
									retobj[3] = retobj[3] / 1000;
									retobj[4] = retobj[4] / 1000;
									retobj[5] = retobj[5] / 1000;
									retobj[6] = retobj[6] / 1000;
									break;
								default:
									retobj[2] = degreeToRadian( retobj[2] );
									retobj[3] = degreeToRadian( retobj[3] );
									retobj[4] = degreeToRadian( retobj[4] );
									retobj[5] = degreeToRadian( retobj[5] );
									retobj[6] = degreeToRadian( retobj[6] );
									break;
							}
							break;
						case 'a':
						case 'lifetime':
							retobj[2] = retobj[2] / 1000;
							retobj[3] = retobj[3] / 1000;
							retobj[4] = retobj[4] / 1000;
							retobj[5] = retobj[5] / 1000;
							retobj[6] = retobj[6] / 1000;
							break;
						default:
							switch( r.tid ){
								case 'linearMul','constMul':
									retobj[2] = retobj[2] / 1000;
									retobj[3] = retobj[3] / 1000;
									retobj[4] = retobj[4] / 1000;
									retobj[5] = retobj[5] / 1000;
									retobj[6] = retobj[6] / 1000;
									break;
							}
					}
					return retobj;
				});
				
			}else{
				
				switch( row.id ){
					case 'color':
						row.v = parseInt( row.v );
						currentParticle.color[0] = row.extra.r / 255;
						currentParticle.color[1] = row.extra.g / 255;
						currentParticle.color[2] = row.extra.b / 255;
						break;
					case 'a':
						row.v = parseInt( row.v );
						currentParticle.color[3] = row.v / 1000;
						break;
					case 'lifetime':
						row.v = parseInt( row.v );
						currentParticle.lifetime = ( row.v / 1000 ); break;
					case 'rot':
						row.v = parseInt( row.v );
						currentParticle.pos[2] = degreeToRadian( row.v );break;
					case 'x':
						row.v = parseInt( row.v );
						currentParticle.pos[0] = row.v; break;
					case 'y':
						row.v = parseInt( row.v );
						currentParticle.pos[1] = row.v; break;
					case 'vx':
						row.v = parseInt( row.v );
						currentParticle.vel[0] = row.v; break;
					case 'vy':
						row.v = parseInt( row.v );
						currentParticle.vel[1] = row.v; break;
					case 'vr':
						row.v = parseInt( row.v );
						currentParticle.vel[2] = degreeToRadian( row.v ); break;
					case 'scale-x':
						row.v = parseInt( row.v );
						currentParticle.size[0] = row.v; break;
					case 'scale-y':
						row.v = parseInt( row.v );
						currentParticle.size[1] = row.v; break;
					case 'blending':
						currentParticle.blending = row.v; break;
					case 'name':
						currentParticle.name = row.v;break;
					case 'emit-count':
						row.v = parseInt( row.v );
						currentParticle.emit.count = row.v; break;
					case 'emit-duration':
						row.v = parseInt( row.v );
						currentParticle.emit.duration = ( row.v / 1000 ); break;
					case 'emit-range':
						row.v = parseInt( row.v );
						currentParticle.emit.range = degreeToRadian( row.v ); break;
					case 'emit-angle':
						row.v = parseInt( row.v );
						currentParticle.emit.angle = degreeToRadian( row.v ); break;
					case 'emit-force':
						row.v = parseInt( row.v );
						currentParticle.emit.force = row.v; break;
					default:
						row.v = parseInt( row.v );
						currentParticle[row.id] = row.v;
				}
			}
			updateRender();
		});
		
		function updateRender(){
			var renderRoots = vic.easyui.getTreeNodeById( view.tree_particle, 'root' );
			if( renderRoots.children.length > 0 ){
				_.each( renderRoots.children, function( root ){
					var retobj = { };
					treeToModel( vic.easyui.getTreeNodeById( view.tree_particle, root.id ), retobj );
					console.log( retobj );
					try{
						api.editParticle( retobj );
					}catch( e ){
						//還不知道錯在哪裡，先catch起來
						console.log( e );
						
					}
				});
			}
		}
		
	}
	
	function modelToTree( fields, retobj ) {
		retobj.id = fields.id;
		retobj.text = fields.name;
		retobj.particle = fields;
		
		if ( fields.emit != undefined ) {
			retobj.children = [];
			_.each( fields.emit.prototype, function( p ){
				var tobj = {};
				retobj.children.push( tobj );
				modelToTree( p, tobj );
			});
		}
	}
	
	function treeToModel( node, outputData ) {
		var particleData = node.particle;
		outputData.id = particleData.id;
		outputData.lifetime = particleData.lifetime;
		outputData.vel = particleData.vel;
		outputData.pos = particleData.pos;
		outputData.mass = particleData.mass;
		outputData.color = particleData.color;
		outputData.size = particleData.size;
		outputData.tex = particleData.tex;
		outputData.blending = particleData.blending;
		outputData.formulaList = deepCopy( particleData.formulaList );
		
		if ( node.children && node.children.length > 0 ) {
			if( particleData.emit == undefined ){
				particleData.emit = {};
				particleData.emit.count = 1;
				particleData.emit.duration = .5;
				particleData.emit.angle = 0;
				particleData.emit.range = 0;
				particleData.emit.force = 100;
			}
			particleData.emit.prototype = [];
			if( outputData.emit == undefined ){
				outputData.emit = deepCopy( node.particle.emit );
			}
			_.each( node.children, function( nc ){
				var obj = { };
				outputData.emit.prototype.push( obj );
				treeToModel( nc, obj );
			});
		}
	}

	function renderToOutputString(){
		var ary_forToString = [];
		var renderRoots = vic.easyui.getTreeNodeById( app.view.tree_particle, 'root' );
		if( renderRoots.children.length > 0 ){
			_.each( renderRoots.children, function( root ){
				var retobj = { };
				treeToModel( vic.easyui.getTreeNodeById( app.view.tree_particle, root.id ), retobj );
				ary_forToString.push( retobj );
			});
		}
		return ary_forToString;
	}

	function deepCopy( obj ){
		return JSON.parse( JSON.stringify( obj ));
	}

	function radianToDegree( r ){
		return r / Math.PI * 180;
	}

	function degreeToRadian( d ){
		return d / 180 * Math.PI;
	}

	function getUid(){
		return leo.utils.generateUUID();
	}


	module.renderToOutputString = renderToOutputString;
	module.appStart = appStart;

})( app.controller );

