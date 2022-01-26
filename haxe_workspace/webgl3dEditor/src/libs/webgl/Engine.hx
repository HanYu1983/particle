package libs.webgl;

import libs.webgl.material.shader.SkyboxShader;
import libs.webgl.material.shader.EnviromentMapShader;
import libs.webgl.material.shader.CubeMapShader;
import libs.webgl.mesh.CubeMesh;
import libs.webgl.mesh.PlaneMesh;
import libs.webgl.mesh.PlaneMesh;
import libs.webgl.actor.MeshActor;
import mme.math.glmatrix.Vec3;
import libs.webgl.component.LightComponent;
import libs.webgl.actor.LightActor;
import libs.webgl.actor.CameraActor;
import libs.webgl.actor.Actor;
import libs.webgl.mesh.ObjMesh;
import libs.webgl.component.CameraComponent;
import libs.webgl.component.MeshRenderComponent;
import libs.webgl.material.Material;
import libs.webgl.material.shader.BasicShader;
import libs.webgl.material.shader.ColorShader;
import libs.webgl.material.shader.OutlineShader;
import libs.webgl.material.shader.SolidColorShader;
import libs.webgl.material.shader.OnlyTextureShader;

class Engine{

    public var gl(default, null):Null<Dynamic>;
    public var shaders:Array<Dynamic> = [];
    public var defaultCamera:CameraActor;
    public var defaultLight:LightActor;

    public var textures:Array<Dynamic> = [];
    public var cubeTextures:Array<Dynamic> = [];
    public var objMeshs:Array<ObjMesh> = [];
    public var materials:Array<Material> = [];

    public var outlineMaterial:Material;
    public var solidMaterial:Material;
    public var depthMaterial:Material;

    public var depthTexture(default, null):Dynamic;
    public var depthFramebuffer:Dynamic;

    function new() {
       
    }

    static var _inst:Engine = new Engine();
    public static function inst():Engine{
        return Engine._inst;
    }

    public function init(gl) {
        this.gl = gl;
        shaders.push(new ColorShader());
        shaders.push(new BasicShader());
        shaders.push(new CubeMapShader());
        shaders.push(new EnviromentMapShader());

        defaultCamera = new CameraActor('DefaultCamera');
        defaultLight = new LightActor('DefaultLight');

        defaultCamera.transform.position.z = 10;
        defaultLight.transform.position.x = 0;
        defaultLight.transform.position.y = 5;
        defaultLight.transform.position.z = 10;

        outlineMaterial = new Material(new OutlineShader());
        outlineMaterial.pushUniform('u_color', [1., 1., 0.]);
        outlineMaterial.pushUniform('u_thickness', .2);
        outlineMaterial.autoAssignToMeshRender = false;

        solidMaterial = new Material(new SolidColorShader());
        solidMaterial.pushUniform('u_color', [1., 1., 1.]);
        solidMaterial.autoAssignToMeshRender = false;
        solidMaterial.pushNode(defaultLight);

        createDepthTexture();
        createDepthBuffer();

        depthMaterial = new Material(new OnlyTextureShader());
        depthMaterial.pushTexture('u_texture', depthTexture, gl.TEXTURE_2D);
        depthMaterial.autoAssignToMeshRender = false;

        var depth = new MeshActor('DepthPass');
		depth.getComponent(MeshRenderComponent).mesh = new PlaneMesh();
		depth.transform.position.x = 1;
		depth.transform.position.y = 3;
		depth.transform.rotation.x = 90;
		depth.transform.parent = defaultCamera.transform;
        depthMaterial.pushNode(depth);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    public function createDepthTexture() {
        depthTexture = gl.createTexture();
        var depthTextureSize = 512;
        gl.bindTexture(gl.TEXTURE_2D, depthTexture);
        gl.texImage2D(
            gl.TEXTURE_2D,      // target
            0,                  // mip level
            gl.DEPTH_COMPONENT32F, // internal format
            depthTextureSize,   // width
            depthTextureSize,   // height
            0,                  // border
            gl.DEPTH_COMPONENT, // format
            gl.FLOAT,           // type
            null);              // data
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);
        return depthTexture;
    }

    public function createDepthBuffer() {
        depthFramebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, depthFramebuffer);
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,       // target
            gl.DEPTH_ATTACHMENT,  // attachment point
            gl.TEXTURE_2D,        // texture target
            depthTexture,         // texture
            0);                   // mip level
    }

    public function addTexture(image:Dynamic) {
        var texture:Dynamic = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // Set the parameters so we don't need mips and so we're not filtering
        // and we don't repeat at the edges
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        // Upload the image into the texture.
        var mipLevel = 0; // the largest mip
        var internalFormat = gl.RGBA; // format we want in the texture
        var srcFormat = gl.RGBA; // format of data we are supplying
        var srcType = gl.UNSIGNED_BYTE; // type of data we are supplying
        gl.texImage2D(gl.TEXTURE_2D, mipLevel, internalFormat, srcFormat, srcType, image);
        gl.bindTexture(gl.TEXTURE_2D, null);
        textures.push(texture);
    }

    public function addTextures(images:Array<Dynamic>) {
        for (index => value in images) {
            addTexture(value);
        }
    }

    public function addMaterials(materials:Array<Material>) {
        this.materials = this.materials.concat(materials);
    }

    public function addMaterial(material:Material) {
        this.materials.push(material);
    }

    public function addObjMesh(mesh:Dynamic) {
        objMeshs.push(new ObjMesh(mesh));
    }

    public function addObjMeshs(meshs:Array<Dynamic>) {
        for (index => value in meshs) {
            addObjMesh(value);
        }
    }

    public function renderMaterial(material:Material, ?view:Actor = null, debug = false){
            
        // 每一個材質都有自己的參數要設定
        // 1：取出要用哪一個shader(program)
        // 2：取出對應的vao
        // 3：放入這個shader需要的參數給buffer
        // 4：draw
        // if(!debug){
        //     var program:Dynamic = material.shader.program;
        //     gl.useProgram(program);
        // }
        var program:Dynamic = material.shader.program;
        gl.useProgram(program);


        material.glSetTextureAndUniform();

        
        var usingView:Actor = (view != null) ? view : defaultCamera;

        gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_lightColor'), defaultLight.getComponent(LightComponent).color.toArray());
        gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_specularColor'), [1,1,1]);
        gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_viewWorldPos'), usingView.transform.position.toArray());
        gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_lightWorldPos'), defaultLight.transform.position.toArray());
        gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_lightWorldDirection'), defaultLight.transform.getLeft().toArray());
        gl.uniform1f(Reflect.field(material.shader.uniformKey, 'u_lightOuter'), defaultLight.getComponent(LightComponent).limitOuter);
        gl.uniform1f(Reflect.field(material.shader.uniformKey, 'u_lightInner'), defaultLight.getComponent(LightComponent).limitInner);
        
        gl.uniformMatrix4fv(Reflect.field(material.shader.uniformKey, 'u_viewMat'), false, usingView.transform.getMatrix().toArray());
        gl.uniformMatrix4fv(Reflect.field(material.shader.uniformKey, 'u_projectMat'), false, usingView.getComponent(CameraComponent).getProjectMatrix().toArray());
        
        gl.uniformMatrix4fv(Reflect.field(material.shader.uniformKey, 'u_lightViewMat'), false, defaultLight.transform.getMatrix().toArray());
        gl.uniformMatrix4fv(Reflect.field(material.shader.uniformKey, 'u_lightProjectMat'), false, defaultLight.getComponent(CameraComponent).getProjectMatrix().toArray());
        
        var nodes = material.nodes;
        for (index => node in nodes) {
            var meshRender:MeshRenderComponent = node.getComponent(MeshRenderComponent);
            var vao = meshRender.mesh.vao;
            gl.bindVertexArray(vao);
            gl.uniformMatrix4fv(Reflect.field(material.shader.uniformKey, 'u_modelMat'), false, node.transform.getMatrix().toArray());

            gl.drawArrays(gl.TRIANGLES, 0, meshRender.mesh.getCount());

            // gl.drawArrays(gl.LINE_LOOP, 0, meshRender.mesh.getCount());
            // gl.drawArrays(gl.LINES, 0, meshRender.mesh.getCount());
            // gl.drawArrays(gl.POINTS, 0, 6);
            // gl.flush();
        }
    }
    
    public function render(time:Float) {

        // 畫出燈光為視角的深度圖
        gl.bindFramebuffer(gl.FRAMEBUFFER, depthFramebuffer);
        gl.viewport(0, 0, 512, 512);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        renderMaterial(solidMaterial, defaultLight);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        // 畫出外框綫
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.FRONT);
        renderMaterial(outlineMaterial);

        // 畫出物件
        gl.enable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        gl.depthFunc(gl.LESS);
        for (index => material in materials) {
            renderMaterial(material);
        }

        renderMaterial(depthMaterial);
    }

    public function getNodes():Array<Actor> {
        var actors = [];
        for (index => value in materials) {
            actors = actors.concat(value.nodes);
        }
        return actors;
    }

    public function getNodeByName(name:String):Null<Actor> {
        var nodes:Array<Actor> = getNodes();
        var node:Null<Actor> = null;
        for (index => value in nodes) {
            if(value.name == name){
                node = value;
            }
        }
        return node;
    }
}