package libs.webgl.actor;

import libs.webgl.component.LightComponent;

class LightActor extends Actor{
    public function new() {
        super();
        addComponent(new LightComponent());
    }
}