package libs.webgl.actor;

import libs.webgl.mesh.CubeMesh;
import libs.webgl.component.MeshRenderComponent;

class MeshActor extends Actor{
    public function new() {
        super();
        var mesh = new CubeMesh();
        // addComponent(new MeshRenderComponent(Engine.inst().objMeshs[0]));
        addComponent(new MeshRenderComponent(mesh));
    }
}