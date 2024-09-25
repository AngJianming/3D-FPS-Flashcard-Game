// Move the player closer to the cube.
let playerPosition = [0.0, 0.0, -2.0];

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(vertexShader));
}

const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(fragmentShader));
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
