
import libs.webgl.component.LightComponent;
import js.Browser;
import js.html.Window;
import libs.webgl.component.ParticleComponent;
import mme.math.glmatrix.Vec3Tools;
import mme.math.glmatrix.Vec3;
import js.html.Document;
import libs.webgl.component.CameraComponent;
import js.html.webgl.Query;
import libs.webgl.actor.MeshActor;
import libs.webgl.actor.Actor;
import libs.webgl.component.MeshRenderComponent;
import libs.webgl.material.Material;
import libs.webgl.Engine;
import js.Syntax;
import libs.webgl.mesh.CubeMesh;

typedef ImageLoadInfo = {
    name:String,
    path:String
}

class Main{

    public function new() {
        
        var engine:Engine = Engine.inst();

        Syntax.code('$(window)').on('onAssetsLoaded', function(evt:Dynamic, assets:Dynamic){
           
            engine.init(assets.gl);
            engine.addTextures(assets.images);
            engine.addObjMeshs(assets.objs);
            startApplication(engine);
        });
    }

    function startApplication(engine:Engine) {
		var q:Dynamic = Syntax.code('$');

		var div_light:Dynamic = q('#div_light');

		function hideAll(){
			div_light.hide();
		}

        q('#spn_fov').slider({
            'onChange':function(n, o){
                engine.defaultCamera.getComponent(CameraComponent).fieldOfView = n;
            }
        });

        q('#spn_near').slider({
            'onChange':function(n, o){
                engine.defaultCamera.getComponent(CameraComponent).near = n;
            }
        });

        q('#spn_far').slider({
            'onChange':function(n, o){
                engine.defaultCamera.getComponent(CameraComponent).far = n;
            }
        });

		var col_light:Dynamic = q('#col_light');
		col_light.change(function(e){
			var col = col_light.val();
			var r = Syntax.code('parseInt')('0x' + col.substring(1,3), 16);
			var g = Syntax.code('parseInt')('0x' + col.substring(3,5), 16);
			var b = Syntax.code('parseInt')('0x' + col.substring(5,7), 16);
			engine.defaultLight.getComponent(LightComponent).color.x = r / 255.0;
			engine.defaultLight.getComponent(LightComponent).color.y = g / 255.0;
			engine.defaultLight.getComponent(LightComponent).color.z = b / 255.0;
		});

        //==========================
		// 控制物件
		//==========================

        var treeList:Dynamic = q("#treeList");
		var selMesh:Dynamic = q("#selMesh");
		var btnAdd:Dynamic = q("#btnAdd");
		
        var nodeName:Dynamic = q("#nodeName");
        var posx:Dynamic = q("#posx");
		var posy:Dynamic = q("#posy");
		var posz:Dynamic = q("#posz");
		var rotx:Dynamic = q("#rotx");
		var roty:Dynamic = q("#roty");
		var rotz:Dynamic = q("#rotz");
		var scax:Dynamic = q("#scax");
		var scay:Dynamic = q("#scay");
		var scaz:Dynamic = q("#scaz");

        function updateParameter(item){
			nodeName.html(item.text);
			
			var node:Actor = item.node;
			posx.numberspinner( 'setValue', node.transform.position.x );
			posy.numberspinner( 'setValue', node.transform.position.y );
			posz.numberspinner( 'setValue', node.transform.position.z );
			
			rotx.numberspinner( 'setValue', node.transform.rotation.x );
			roty.numberspinner( 'setValue', node.transform.rotation.y );
			rotz.numberspinner( 'setValue', node.transform.rotation.z );
			
			scax.numberspinner( 'setValue', node.transform.scale.x );
			scay.numberspinner( 'setValue', node.transform.scale.y );
			scaz.numberspinner( 'setValue', node.transform.scale.z );

			hideAll();
			var comps = node.getComponents();
			for (index => value in comps) {
				switch(Type.getClass(value)){
					case LightComponent:
						div_light.show();
				}
			}
		}

        var currentNode:Actor = null;
        function onPosXChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.position.x = newValue;
			}
		}
		
		function onPosYChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.position.y = newValue;
			}
		}
		
		function onPosZChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.position.z = newValue;
			}
		}
		
		function onRotXChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.rotation.x = newValue;
			}
		}
		
		function onRotYChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.rotation.y = newValue;
			}
		}
		
		function onRotZChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.rotation.z = newValue;
			}
		}
		
		function onScaleXChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.scale.x = newValue;
			}
		}
		
		function onScaleYChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.scale.y = newValue;
			}
		}
		
		function onScaleZChange(newValue, oldValue){
			if(currentNode != null){
				currentNode.transform.scale.z = newValue;
			}
		}
		
		posx.numberspinner( {
			onChange:onPosXChange
		});
		posy.numberspinner( {
			onChange:onPosYChange
		});
		posz.numberspinner( {
			onChange:onPosZChange
		});
		rotx.numberspinner( {
			onChange:onRotXChange
		});
		roty.numberspinner( {
			onChange:onRotYChange
		});
		rotz.numberspinner( {
			onChange:onRotZChange
		});
		scax.numberspinner( {
			onChange:onScaleXChange
		});
		scay.numberspinner( {
			onChange:onScaleYChange
		});
		scaz.numberspinner( {
			onChange:onScaleZChange
		});

		
		treeList.tree({
			onClick:function(item:Dynamic){
				currentNode = item.node;
				updateParameter(item);
			}
		});
		
        var mats = [new Material(engine.shaders[0])];

        function updateTree(){
			var nodes = engine.getNodes();
			var data:Array<{text:String, node:Actor}> = [
				{text:'DefaultLight', node:engine.defaultLight}
			];
            for (index => node in nodes) {
				data.push({text:node.name, node:node});
			}
			treeList.tree({data:data});
		}

        function createNode(meshId){
			var node = new MeshActor();
            node.getComponent(MeshRenderComponent).mesh = engine.objMeshs[meshId];
			node.name = 'node_' + Date.now().getTime();
			mats[0].pushNode(node);
            engine.addMaterials(mats);
			updateTree();
		}

		btnAdd.bind('click', function(e:Dynamic){
			var meshId = selMesh.combobox('getValue');
			createNode(meshId);
		});

        //==========================
		// 控制物件
		//==========================

        //==========================
		// 控制鏡頭
		//==========================
		
		var upForce = new Vec3();
		var leftForce = new Vec3();
		var downForce = new Vec3();
		var rightForce = new Vec3();
		var forwardForce = new Vec3();
		var backwardForce = new Vec3();
		var totalForce = new Vec3();
		
		var defaultCamera = engine.defaultCamera;
        var document = Browser.window.document;
        var isMouseDown = false;
		document.addEventListener('keydown', function(event) {
			if(!isMouseDown) return;
			switch(event.keyCode){
				// Q
				case 81:
					downForce = Vec3Tools.scale(defaultCamera.transform.getDown(), .1);
				// E
				case 69:
					upForce = Vec3Tools.scale(defaultCamera.transform.getUp(), .1);
				// W
				case 87:
					forwardForce = Vec3Tools.scale(defaultCamera.transform.getLeft(), .1);
				// A
				case 65:
					leftForce = Vec3Tools.scale(defaultCamera.transform.getBackward(), .1);
				// S
				case 83:
					backwardForce = Vec3Tools.scale(defaultCamera.transform.getRight(), .1);
				// D
				case 68:
					rightForce = Vec3Tools.scale(defaultCamera.transform.getForward(), .1);
			}
		});
		
		document.addEventListener('keyup', function(event) {
			switch(event.keyCode){
				// Q
				case 81:
                    Vec3Tools.zero(downForce);
				// E
				case 69:
                    Vec3Tools.zero(upForce);
				// W
				case 87:
                    Vec3Tools.zero(forwardForce);
				// A
				case 65:
                    Vec3Tools.zero(leftForce);
				// S
				case 83:
                    Vec3Tools.zero(backwardForce);
				// D
				case 68:
                    Vec3Tools.zero(rightForce);
			}
		});
		
		var clickPos = new Vec3();
		var currentRot = new Vec3();
		
		document.addEventListener('mousedown', function(event:Dynamic){
			switch(event.button){
				case 0:
					currentRot = Vec3Tools.clone(defaultCamera.transform.rotation);
					
					clickPos.x = event.offsetX;
					clickPos.y = event.offsetY;
					isMouseDown = true;
			}
			
		});
		
		var rotForce = new Vec3();
		document.addEventListener('mousemove', function(event:Dynamic){
			if(isMouseDown){
				switch(event.button){
					case 0:
						var xOffset = event.offsetX - clickPos.x;
						var yOffset = event.offsetY - clickPos.y;
						rotForce.x = yOffset * -.1;
						rotForce.y = xOffset * -.1;
						Vec3Tools.add(rotForce, currentRot, rotForce);
						defaultCamera.transform.rotation = Vec3Tools.clone(rotForce);
				}
			}
		});
		
		document.addEventListener('mouseup', function(event:Dynamic){
			switch(event.button){
				case 0: 
					isMouseDown = false;
                    Vec3Tools.zero(rotForce);
			}
		});

        //==========================
		// 控制鏡頭
		//==========================

        //==========================
		// 物件設置
		//==========================

		hideAll();
        createNode(0);
        updateTree();

        mats[0].pushTextures(engine.textures[4]);
        mats[0].pushTextures(engine.textures[5]);
        mats[0].pushUniform('uniform1f', 'u_bump', .8);
		mats[0].pushUniform('uniform1f', 'u_gloss', 80);
		mats[0].pushUniform('uniform3fv', 'u_diffuseColor', [1., 1., 1.]);
        
        

        //==========================
		// 物件設置
		//==========================

        function animate(time) {
			//var thisLoop = new Date();
			//var fps = 1000 / (thisLoop - lastLoop);
			//lastLoop = thisLoop;
			//if(tickCount++ % 10 === 0) domFps.innerHTML = 'fps:' + Math.floor(fps);
			
            Vec3Tools.zero(totalForce);
            Vec3Tools.add(totalForce, upForce, totalForce);
            Vec3Tools.add(totalForce, downForce, totalForce);
            Vec3Tools.add(totalForce, leftForce, totalForce);
            Vec3Tools.add(totalForce, rightForce, totalForce);
            Vec3Tools.add(totalForce, forwardForce, totalForce);
            Vec3Tools.add(totalForce, backwardForce, totalForce);

			defaultCamera.getComponent(ParticleComponent).applyForce(totalForce);
			defaultCamera.update();
            
			engine.defaultLight.transform.position.x = Math.cos(time / 1000) * 10;
			engine.defaultLight.transform.position.y = 10;
			engine.defaultLight.transform.position.z = Math.sin(time / 1000) * 10;
			
			engine.render(time);
            Syntax.code('window').requestAnimationFrame(animate);
		}
		animate(0); 
    }

    static function main() {
        new Main();
    }
}