package libs.webgl;

import libs.webgl.component.LightComponent;
import libs.webgl.actor.LightActor;
import libs.webgl.actor.CameraActor;
import libs.webgl.actor.Actor;
import libs.webgl.mesh.ObjMesh;
import libs.webgl.component.CameraComponent;
import libs.webgl.component.MeshRenderComponent;
import libs.webgl.material.Material;
import libs.webgl.material.shader.BasicShader;

class Engine{

    public var gl(default, null):Null<Dynamic>;
    public var shaders:Array<Dynamic> = [];
    public var defaultCamera:CameraActor = new CameraActor();
    public var defaultLight:LightActor = new LightActor();

    public var textures:Array<Dynamic> = [];
    public var objMeshs:Array<ObjMesh> = [];
    var materials:Array<Material> = [];

    function new() {
       
    }

    static var _inst:Engine = new Engine();
    public static function inst():Engine{
        return Engine._inst;
    }


    public function init(gl) {
        this.gl = gl;
        shaders.push(new BasicShader());

        defaultCamera.transform.position.z = 20;
        defaultLight.transform.position.x = 5;
        defaultLight.transform.position.y = 5;
        defaultLight.transform.position.z = 5;
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
        textures.push(texture);
    }

    public function addTextures(images:Array<Dynamic>) {
        for (index => value in images) {
            addTexture(value);
        }
    }

    public function addMaterials(materials:Array<Material>) {
        this.materials = materials;
    }

    public function addObjMesh(mesh:Dynamic) {
        objMeshs.push(new ObjMesh(mesh));
    }

    public function addObjMeshs(meshs:Array<Dynamic>) {
        for (index => value in meshs) {
            addObjMesh(value);
        }
    }
    
    public function render(time:Float) {
        function renderMaterial(material:Material){
            
            var program:Dynamic = material.shader.program;
            gl.useProgram(program);
            material.glSetTextureAndUniform();
            
            gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_lightColor'), defaultLight.getComponent(LightComponent).color.toArray());
            gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_specularColor'), [1,1,1]);
            gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_viewWorldPos'), defaultCamera.transform.position.toArray());
            gl.uniform3fv(Reflect.field(material.shader.uniformKey, 'u_lightWorldPos'), defaultLight.transform.position.toArray());
            
            var nodes = material.nodes;
            for (index => node in nodes) {
                var meshRender:MeshRenderComponent = node.getComponent(MeshRenderComponent);
                var vao = meshRender.mesh.vao;
                gl.bindVertexArray(vao);
                
                gl.uniformMatrix4fv(Reflect.field(material.shader.uniformKey, 'u_modelMat'), false, node.transform.getMatrix().toArray());
                gl.uniformMatrix4fv(Reflect.field(material.shader.uniformKey, 'u_viewMat'), false, defaultCamera.transform.getMatrix().toArray());
                gl.uniformMatrix4fv(Reflect.field(material.shader.uniformKey, 'u_projectMat'), false, defaultCamera.getComponent(CameraComponent).getProjectMatrix().toArray());
                
                gl.enable(gl.DEPTH_TEST);
                gl.drawArrays(gl.TRIANGLES, 0, meshRender.mesh.getCount());
                
            }
        }
        
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // 每一個材質都有自己的參數要設定
        // 1：取出要用哪一個shader(program)
        // 2：取出對應的vao
        // 3：放入這個shader需要的參數給buffer
        // 4：draw
        
        gl.enable(gl.DEPTH_TEST);
        for (index => material in materials) {
            renderMaterial(material);
        }
        
        //gl.disable(gl.DEPTH_TEST);
        //renderMaterial(vic.webgl.engine.uiMaterial);
    }

    public function getNodes():Array<Actor> {
        var actors = [];
        for (index => value in materials) {
            actors = actors.concat(value.nodes);
        }
        return actors;
    }
}