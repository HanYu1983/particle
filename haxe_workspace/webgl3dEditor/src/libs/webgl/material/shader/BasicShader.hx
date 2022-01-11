package libs.webgl.material.shader;

class BasicShader extends Shader{
    override function getVS():String {
        var s = "#version 300 es
        
                in vec3 a_vertex;
                in vec2 a_texcoord;
                in vec3 a_normal;
                in vec3 a_tangent;
                
                uniform mat4 u_modelMat;
                uniform mat4 u_viewMat;
                uniform mat4 u_projectMat;
                uniform vec3 u_lightWorldPos;
                uniform vec3 u_viewWorldPos;
                
                out vec3 v_worldNormal;
                out vec3 v_worldPos;
                out vec3 v_worldTangent;
                out vec3 v_worldBinormal;
                out vec2 v_uv;
                out vec3 v_tangent;
                out mat3 v_tangentMat;
                out vec3 v_lightDir;
                out vec3 v_viewDir;
                
                void main(){
                    mat4 fixScaleMatrix = transpose(inverse(u_modelMat));
                    v_worldNormal = normalize((fixScaleMatrix * vec4(a_normal, 0)).xyz);
                    v_worldPos = (fixScaleMatrix * vec4(a_vertex, 1)).xyz;
                    v_worldTangent = normalize((fixScaleMatrix * vec4(a_tangent, 0)).xyz);
                    v_worldBinormal = normalize(cross(v_worldNormal, v_worldTangent));
                    
                    v_uv = a_texcoord;
                    
                    vec3 binormal = cross(normalize(a_normal), normalize(a_tangent));
                    v_tangentMat = mat3(a_tangent, binormal, a_normal);
                    
                    vec4 localLightDir = inverse(u_modelMat) * vec4(normalize(u_lightWorldPos - v_worldPos), 0);
                    v_lightDir = inverse(v_tangentMat) * localLightDir.xyz;
                    
                    vec4 localViewDir = inverse(u_modelMat) * vec4(normalize(u_viewWorldPos - v_worldPos), 0);
                    v_viewDir = inverse(v_tangentMat) * localViewDir.xyz;
                    
                    mat4 mvp = u_projectMat * inverse(u_viewMat) * u_modelMat;
                    gl_Position = mvp * vec4(a_vertex, 1.);
                }
                ";
        return s;
    }

    override function getFS():String {
        var s = "#version 300 es
                precision highp float;
                
                in vec3 v_worldNormal;
                in vec3 v_worldPos;
                in vec3 v_worldTangent;
                in vec3 v_worldBinormal;
                in vec2 v_uv;
                in vec3 v_lightDir;
                in vec3 v_viewDir;
                
                uniform vec3 u_lightColor;
                uniform vec3 u_lightWorldPos;
                uniform vec3 u_viewWorldPos;
                uniform vec3 u_diffuseColor;
                uniform vec3 u_specularColor;
                uniform float u_gloss;
                uniform float u_bump;
                uniform sampler2D u_image0;
                uniform sampler2D u_image1;
                
                out vec4 outColor;
                void main() {
                    
                    vec3 worldLightDir = normalize(u_lightWorldPos - v_worldPos);
                    vec3 worldViewDir = normalize(u_viewWorldPos - v_worldPos);
                    vec3 tangentNormal = texture( u_image1, v_uv ).rgb;
                    tangentNormal.rg *= 2.0;
                    tangentNormal.rg -= 1.0;
                    tangentNormal.b = sqrt( 1.0 - clamp( dot( tangentNormal.xy, tangentNormal.xy ), 0., 1.));
                    tangentNormal.xy *= u_bump;
                    vec3 worldNormal = mat3(v_worldTangent, v_worldBinormal, v_worldNormal ) * tangentNormal;
                    worldNormal = normalize(worldNormal);
                    
                    vec3 albedo = texture( u_image0, v_uv ).rgb * u_diffuseColor;
                    vec3 ambient = vec3(.2) * albedo;
                    vec3 diffuse = u_lightColor * albedo * max(0., dot(worldNormal, worldLightDir));
                    vec3 halfDir = normalize( worldLightDir + worldViewDir );
                    vec3 specualr = u_lightColor * u_specularColor * pow(max(0., dot(worldNormal, halfDir)), u_gloss);
                    outColor = vec4(ambient + diffuse + specualr,1);
                }
                ";
        return s;
    }

    override function getUniformList():Array<String> {
        return ['u_modelMat', 'u_viewMat', 'u_projectMat', 'u_viewWorldPos', 'u_lightWorldPos', 'u_lightColor', 'u_diffuseColor', 'u_specularColor', 'u_gloss', 'u_bump', 'u_image0', 'u_image1'];
    }
}