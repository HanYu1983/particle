
import libs.webgl.component.TransformComponent;
import js.lib.intl.DateTimeFormat.SecondRepresentation;
import haxe.macro.Expr.Catch;
import haxe.macro.Type.Ref;
import libs.webgl.mesh.ObjMesh;
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
import libs.webgl.material.shader.ColorShader;
import libs.webgl.material.shader.BasicShader;

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

	function getColorFromString(colorStr:String) {
		var r = Syntax.code('parseInt')('0x' + colorStr.substring(1,3), 16);
		var g = Syntax.code('parseInt')('0x' + colorStr.substring(3,5), 16);
		var b = Syntax.code('parseInt')('0x' + colorStr.substring(5,7), 16);
		return [r / 255.0, g / 255.0, b / 255.0];
	}

	function getStringFromColor(r:Float, g:Float, b:Float){
		var changeTo = (Std.int(r * 255) << 16) + (Std.int(g*255) << 8) + Std.int(b * 255);
		var colorStr = '#' + StringTools.hex(changeTo, 6);
		return colorStr;
	}

    function startApplication(engine:Engine) {
		var q:Dynamic = Syntax.code('$');

		var div_light:Dynamic = q('#div_light');
		var div_meshRenderer:Dynamic = q('#div_meshRenderer');
		
		function hideAllEntityParameter(){
			div_light.hide();
			div_meshRenderer.hide();
		}

		var div_colorShader:Dynamic = q('#div_colorShader');
		var div_basicShader:Dynamic = q('#div_basicShader');
		function hideAllMaterialParameter(){
			div_colorShader.hide();
			div_basicShader.hide();
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
			var rgb:Array<Dynamic> = getColorFromString(col);
			engine.defaultLight.getComponent(LightComponent).color.x = rgb[0];
			engine.defaultLight.getComponent(LightComponent).color.y = rgb[1];
			engine.defaultLight.getComponent(LightComponent).color.z = rgb[2];
		});

		


        //==========================
		// 控制物件
		//==========================

        var tree_actors:Dynamic = q("#tree_actors");
		var tree_mats:Dynamic = q('#tree_mats');
		var selMesh:Dynamic = q("#selMesh");
		var btnAdd:Dynamic = q("#btnAdd");
		var btn_addMaterial:Dynamic = q('#btn_addMaterial');

		var lbl_materialName:Dynamic = q('#lbl_materialName');
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
		var sel_setMesh:Dynamic = q('#sel_setMesh');
		var sel_setMaterial:Dynamic = q('#sel_setMaterial');
		
		var sel_shader:Dynamic = q('#sel_shader');
		var col_diffuse:Dynamic = q('#col_diffuse');
		var col_specular:Dynamic = q('#col_specular');
		var spn_gloss:Dynamic = q('#spn_gloss');

		var col_diffuse1:Dynamic = q('#col_diffuse1');
		var col_specular1:Dynamic = q('#col_specular1');
		var spn_gloss1:Dynamic = q('#spn_gloss1');
		var spn_bump1:Dynamic = q('#spn_bump1');

        function updateActorParameter(node:Actor){

			nodeName.html(node.name);
			posx.numberspinner( 'setValue', node.transform.position.x );
			posy.numberspinner( 'setValue', node.transform.position.y );
			posz.numberspinner( 'setValue', node.transform.position.z );
			
			rotx.numberspinner( 'setValue', node.transform.rotation.x );
			roty.numberspinner( 'setValue', node.transform.rotation.y );
			rotz.numberspinner( 'setValue', node.transform.rotation.z );
			
			scax.numberspinner( 'setValue', node.transform.scale.x );
			scay.numberspinner( 'setValue', node.transform.scale.y );
			scaz.numberspinner( 'setValue', node.transform.scale.z );

			hideAllEntityParameter();

			var comps = node.getComponents();
			for (index => value in comps) {
				switch(Type.getClass(value)){
					case LightComponent:
						div_light.show();
					case MeshRenderComponent:
						div_meshRenderer.show();
						var meshComp = node.getComponent(MeshRenderComponent);
						var mesh = meshComp.mesh;
						if(Type.getClass(mesh) == ObjMesh){
							var temp = cast(mesh, ObjMesh);
							var meshId = engine.objMeshs.indexOf(temp);
							sel_setMesh.combobox('setValue', meshId);
						}

						var material = meshComp.material;
						var materialId = engine.materials.indexOf(material);
						sel_setMaterial.combobox('setValue', materialId);
				}
			}
		}

		function updateMaterialParameter(mat:Material){
			
			lbl_materialName.html(mat.name);

			var shaderId = engine.shaders.indexOf( mat.shader );
			sel_shader.combobox('setValue', shaderId);

			hideAllMaterialParameter();
			switch(Type.getClass(mat.shader)){
				case ColorShader:
					div_colorShader.show();

					var c = mat.uniforms[0][2];
					var changeTo = getStringFromColor(c[0], c[1], c[2]);
					col_diffuse.val(changeTo);

					c = mat.uniforms[1][2];
					changeTo = getStringFromColor(c[0], c[1], c[2]);
					col_specular.val(changeTo);

					var gloss = mat.uniforms[2][2];
					spn_gloss.slider('setValue', gloss);
				case BasicShader:
					div_basicShader.show();

					var c = mat.uniforms[0][2];
					var changeTo = getStringFromColor(c[0], c[1], c[2]);
					col_diffuse1.val(changeTo);

					c = mat.uniforms[1][2];
					changeTo = getStringFromColor(c[0], c[1], c[2]);
					col_specular1.val(changeTo);

					var gloss = mat.uniforms[2][2];
					spn_gloss1.slider('setValue', gloss);

					var bump = mat.uniforms[3][2];
					spn_bump1.slider('setValue', bump);
					
			}

			
		}

		var currentNode:Actor = null;
		var currentMaterial:Material = null;

		col_diffuse.change(function(e){
			if(currentMaterial != null){
				var col = col_diffuse.val();
				var rgb:Array<Dynamic> = getColorFromString(col);
				currentMaterial.uniforms[0][2] = rgb;
			}
		});

		col_specular.change(function(e){
			if(currentMaterial != null){
				var col = col_specular.val();
				var rgb:Array<Dynamic> = getColorFromString(col);
				currentMaterial.uniforms[1][2] = rgb;
			}
		});

		spn_gloss.slider({
			onChange:function(n, o){
				if(currentMaterial != null){
					currentMaterial.uniforms[2][2] = n;
				}
			}
		});

		col_diffuse1.change(function(e){
			if(currentMaterial != null){
				var col = col_diffuse1.val();
				var rgb:Array<Dynamic> = getColorFromString(col);
				currentMaterial.uniforms[0][2] = rgb;
			}
		});

		col_specular1.change(function(e){
			if(currentMaterial != null){
				var col = col_specular1.val();
				var rgb:Array<Dynamic> = getColorFromString(col);
				currentMaterial.uniforms[1][2] = rgb;
			}
		});

		spn_gloss1.slider({
			onChange:function(n, o){
				if(currentMaterial != null){
					currentMaterial.uniforms[2][2] = n;
				}
			}
		});

		spn_bump1.slider({
			onChange:function(n, o){
				if(currentMaterial != null){
					currentMaterial.uniforms[3][2] = n;
				}
			}
		});

		sel_shader.combobox({
			onChange:function(){
				if(currentMaterial != null){
					var shaderId = sel_shader.combobox('getValue');
					currentMaterial.shader = engine.shaders[shaderId];
					switch (Type.getClass(currentMaterial.shader)){
						case BasicShader:

					}
					updateMaterialParameter(currentMaterial);
				}
			}
		});

		sel_setMesh.combobox({
			onChange:function(){
				if(currentNode != null){
					var meshId = sel_setMesh.combobox('getValue');
					currentNode.getComponent(MeshRenderComponent).mesh = engine.objMeshs[meshId];
				}
			}
		});

		sel_setMaterial.combobox({
			onChange:function(){
				if(currentNode != null){
					var oldMaterial = currentNode.getComponent(MeshRenderComponent).material;
					oldMaterial.removeNode(currentNode);

					var matId = sel_setMaterial.combobox('getValue');
					var material = engine.materials[matId];
					material.pushNode(currentNode);
				}
			}
		});

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

		tree_actors.tree({
			onClick:function(item:Dynamic){
				currentNode = item.node;
				updateActorParameter(currentNode);
			}
		});
		
		tree_mats.tree({
			onClick:function(item:Dynamic){
				currentMaterial = item.material;
				updateMaterialParameter(item.material);
			}
		});

        function updateTree(){
			var nodes = engine.getNodes();
			var data:Array<{text:String, node:Actor}> = [
				{text:'DefaultLight', node:engine.defaultLight}
			];
            for (index => node in nodes) {
				data.push({text:node.name, node:node});
			}
			tree_actors.tree({data:data});
		}

		function updateMaterialTree(){
			var materials = engine.materials;
			var data:Array<{text:String, material:Material}> = [];
            for (index => material in materials) {
				data.push({text:material.name, material:material});
			}
			tree_mats.tree({data:data});
		}

		function updateMaterialSet(){
			var info:Array<{label:String, value:Int}> = [];
			for (index => value in engine.materials) {
				info.push({
					label: value.name,
					value:index
				});
			}
			sel_setMaterial.combobox({
				valueField: 'value',
				textField: 'label',
				data:info
			});

			if(currentNode != null){
				updateActorParameter(currentNode);
			}
		}

        function createNode(meshId = 0, materialId = 0){
			var node = new MeshActor();
            node.getComponent(MeshRenderComponent).mesh = engine.objMeshs[meshId];
			node.name = 'node_' + Date.now().getTime();
			engine.materials[materialId].pushNode(node);
			updateTree();
			return node;
		}

		btnAdd.bind('click', function(e:Dynamic){
			var meshId = selMesh.combobox('getValue');
			createNode(meshId, 0);
		});

		function createMaterial(name:String = "", shaderId = 0){
			var mat = new Material(engine.shaders[shaderId]);
			mat.name = name == "" ? 'Material_' + Date.now().getTime() : name;
			mat.pushTextures(engine.textures[4]);
			mat.pushTextures(engine.textures[5]);
			mat.pushUniform('uniform3fv', 'u_diffuseColor', [1., 1., 1.]);
			mat.pushUniform('uniform3fv', 'u_specColor', [1., 1., 1.]);
			mat.pushUniform('uniform1f', 'u_gloss', 90);
			mat.pushUniform('uniform1f', 'u_bump', 1.0);
			engine.addMaterial(mat);
			updateMaterialTree();
			updateMaterialSet();
		}

		btn_addMaterial.bind('click', function(e){
			createMaterial();
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

		createMaterial('DefaultColorMaterial');
		createMaterial('DefaultBasicMaterial', 1);

        var n1:Actor = createNode();
		var n2:Actor = createNode(1, 1);
		n2.transform.position.x = -2;
        updateTree();
		hideAllEntityParameter();
		hideAllMaterialParameter();

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
            
			// engine.defaultLight.transform.position.x = Math.cos(time / 1000) * 10;
			// engine.defaultLight.transform.position.y = 10;
			// engine.defaultLight.transform.position.z = Math.sin(time / 1000) * 10;
			
			engine.render(time);
            Syntax.code('window').requestAnimationFrame(animate);
		}
		animate(0); 
    }

    static function main() {
        new Main();
    }
}