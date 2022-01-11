package libs.webgl.component;

import mme.math.glmatrix.Vec3Tools;
import mme.math.glmatrix.QuatTools;
import mme.math.glmatrix.Mat4Tools;
import mme.math.glmatrix.Mat4;
import mme.math.glmatrix.Vec3;

class TransformComponent extends Component{

    public var position:Vec3 = new Vec3();
    public var rotation:Vec3 = new Vec3();
    public var scale:Vec3 = new Vec3();

    var positionMatrix:Mat4 = new Mat4();
    var rotateMatrix:Mat4 = new Mat4();
    var scaleMatrix:Mat4 = new Mat4();
    var matrix:Mat4 = new Mat4();

    private var direction:Vec3 = new Vec3();

    override public function new() {
        super();
        scale.x = scale.y = scale.z = 1.0;
    }

    public function getMatrix():Mat4{
        Mat4Tools.identity(positionMatrix);
        Mat4Tools.identity(rotateMatrix);
        Mat4Tools.identity(scaleMatrix);
        Mat4Tools.identity(matrix);
        Mat4Tools.translate(positionMatrix, position, positionMatrix);
        Mat4Tools.rotateX(rotateMatrix, rotation.x / 180 * Math.PI, rotateMatrix);
        Mat4Tools.rotateY(rotateMatrix, rotation.y / 180 * Math.PI, rotateMatrix);
        Mat4Tools.rotateZ(rotateMatrix, rotation.z / 180 * Math.PI, rotateMatrix);
        Mat4Tools.scale(scaleMatrix, scale, scaleMatrix);
        Mat4Tools.multiply(matrix, positionMatrix, matrix);
        Mat4Tools.multiply(matrix, rotateMatrix, matrix);
        Mat4Tools.multiply(matrix, scaleMatrix, matrix);
        return matrix;
    }

    public function getForward():Vec3 {
        direction.x = matrix[0];
        direction.y = matrix[1];
        direction.z = matrix[2];
        return direction;
    }

    public function getRight():Vec3 {
        direction.x = matrix[8];
        direction.y = matrix[9];
        direction.z = matrix[10];
        return direction;
    }

    public function getUp():Vec3 {
        direction.x = matrix[4];
        direction.y = matrix[5];
        direction.z = matrix[6];
        return direction;
    }

    public function getBackward() {
        getForward();
        return Vec3Tools.scale(direction, -1);
    }

    public function getLeft() {
        getRight();
        return Vec3Tools.scale(direction, -1);
    }

    public function getDown() {
        getUp();
        return Vec3Tools.scale(direction, -1);
    }

    override function update() {

        super.update();
    }
}