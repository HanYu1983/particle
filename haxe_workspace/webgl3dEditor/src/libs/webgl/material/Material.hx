package libs.webgl.material;

import libs.webgl.component.MeshRenderComponent;
import libs.webgl.actor.Actor;
import haxe.Constraints.Function;
import libs.webgl.material.shader.Shader;

class Material{

    public var textures:Array<Dynamic> = [];
    public var uniforms:Array<Dynamic> = [];
    public var nodes:Array<Actor> = [];
    public var shader(default, default):Shader;
    public var name:String = "";

    public function new(shader:Shader) {
        this.shader = shader;
    }
    public function pushTextures(t) {
        textures.push(t);
    }
    public function pushUniform(glMethod:String, location:Dynamic, value:Dynamic) {
        uniforms.push([glMethod, location, value]);
    }

    public function pushNode(node:Actor){
        if(node.getComponent(MeshRenderComponent) != null){
            if(nodes.indexOf(node) == -1){
                nodes.push(node);
                node.getComponent(MeshRenderComponent).material = this;
            }
        }
    }

    public function removeNode(node:Actor) {
        if(nodes.indexOf(node) > -1){
            nodes.remove(node);
        }
    }

    public function glSetTextureAndUniform() {
        var gl = Engine.inst().gl;
        for (index => value in textures) {
            var location = Reflect.field(shader.uniformKey, 'u_image' + index);
            gl.uniform1i(location, index);
            gl.activeTexture(gl.TEXTURE0 + index);
            gl.bindTexture(gl.TEXTURE_2D, textures[index]);
        }
        
        for (index => item in uniforms) {
            var glMethod:String = item[0];
            var location = Reflect.field(shader.uniformKey, item[1]);
            var value:Dynamic = item[2];
            var method:Function = Reflect.field(gl, glMethod);
            Reflect.callMethod(gl, method, [location, value]);
        }
    }
}