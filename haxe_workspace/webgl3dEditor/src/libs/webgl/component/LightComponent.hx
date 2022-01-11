package libs.webgl.component;

import mme.math.glmatrix.Vec3;

class LightComponent extends Component{
    
    public var color:Vec3 = new Vec3();

    public function new() {
        super();
        color.x = color.y = color.z = 1.0;
    }
}