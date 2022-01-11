package libs.webgl.actor;

import libs.webgl.component.ParticleComponent;
import libs.webgl.component.CameraComponent;

class CameraActor extends Actor{
    public function new() {
        super();
        addComponent(new CameraComponent());
        addComponent(new ParticleComponent());
    }
}