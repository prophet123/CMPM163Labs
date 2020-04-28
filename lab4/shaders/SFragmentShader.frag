uniform sampler2D texture1;
varying vec2 vUv;

void main() {
	vec2 a = vec2(vUv.x*1.75,vUv.y*1.75);

	a.x = 1.8 * mod(vUv.x,.5);
	a.y = mod(vUv.y,.50) * 1.8;

	
	gl_FragColor = texture2D(texture1,a);

}