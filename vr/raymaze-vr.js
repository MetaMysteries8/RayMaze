(() => {
"use strict";

const MAP = [
  "2222222222222222222222222222222222222222222222222222222222222222",
  "2.......2.....................22222222222....2.2...2...2......22",
  "2...............2.............22222222222.2222...2...2.2.2....22",
  "22222222222222222222.2222222............2.2....2...2...2.2....22",
  "22222222222222222222..2....2..22222222..2.2..22222222..2.2....22",
  "222222222..........2..22...22.2.2..2.2..2.2..2...........2....22",
  "2.2..2....2.....2.222.2....2..2......2..2.2..22222222222222...22",
  "2...22.2222.2.2.2..2..2....2.22..2...22.2.2...........2.......22",
  "2.2222.2....2.2.22.2..2.2..2..22...2.2..2.222222.2222.2.2..22.22",
  "2..2.2.2.22.2.2.2..2.22....2..2......2..2.............2..2....22",
  "2.22.2.2.22.2.2.2..2..2.2..22.22....22..2.22...22222222.......22",
  "2..2.2.2....2.2.2222..2....2..2..2...2.22..2...2.......2..2...22",
  "2......222222.2....22.2...22..2.2..2.2..22.2...2......22....2.22",
  "2.222222....2.2222.2..2....2.22...2..2..2..2..22..2...222.....22",
  "2......2.2222.2....2.22.22.2..2.2..2.22.2..2..22..2..2.2..2...22",
  "2.2.22.2....2.2.2222..2....2..2......2..2.22..22...2.2.2...2...2",
  "2.2..2.2.2.22.2....2..2....2..2..2...2..2..2..22....2.22.2..2..2",
  "2.222222.2..2.2222.22222...2222....2.2.22..2..22....2.22....2..2",
  "2.22...2.22.2.2..........2......2...22..22.2..22...2.2.22...22.2",
  "2.22.2.2.2..2.2.2.......22...........2..2..2..22...2.222..2.2..2",
  "2.22...2.2....2.2.222222222222222222222.2.222222..2..2222...2..2",
  "2.222.2222....2.2....2.............2....2.....22.2222..2....2.22",
  "2.22...2.2..2.2.2.............2.........2...2.22....2..22...2..2",
  "2.22.2.2....2.2...222222222222222222222222222.22...2....2..222.2",
  "2.2....2222.2.2...2.....2..2............22....22...2.....2.2.2.2",
  "2.2.2...2.2.2.2...2222..2.22..2.222222222222..22..2........2.2.2",
  "2.2.22222.2.2.2...............2.2.............22..2........2.2.2",
  "2.2.......2.2.222222222222222.2.2.............22...........2.2.2",
  "2.2.2222222.2.2...........2...2.2...22222222222............2.2.2",
  "2.2.2...222.2.2.22222.....2...2.2...2.....2.2.....2222222222.2.2",
  "2.2.2.2...222.2..2..2..2222...2.2...2.....2...2....222222222.2.2",
  "2.2.2.222.2...2..2..2.........2.2...2...2.2.2222.2.........2...2",
  "2.2.2.22..22222.....2.........2.2...22..2.2...22.2.222222222.222",
  "2.222.22.2222222222222222222222.2...22.22.2.2.22.2.2222222222222",
  "2...2.22............................22..2.2.2.22.2.....2......22",
  "2.2.2.222.22222........2222222222222222.2.2.2.22.22.2...2.....22",
  "2...2.....2...2.222222.2............22..2.2.2.22..2.........2.22",
  "2...2222222.2.2.2....2.2.2222222222222.22.2.2.22.222...2..2...22",
  "2........2..2.2.2.22.2.2................2.2.2.22..2...........22",
  "2.2.2..2....2.2.2.22.2.222222222222222..2.2.2.222.2..2....2.2.22",
  "222222222222222.2.22.2.2................2.2.2.222.22....2.2.2.22",
  "2.............2.2222.2.2.2222222222222222.2.2.22..2.......22.222",
  "2..2....2.....2......2.2.............2....2.2.22.22..2....2...22",
  "2...2..2..2..2222222222222222222222222..22222.22.22.2...2.....22",
  "2....2.2.2..............2...2...........2.....22.2..2..2....2.22",
  "2....22..2...2..2.....2.22.22..222222...2.....22.2.2..2...2...22",
  "2....22..2..2..2.....2..2.2.2..2....2...2.2.2.22.2.2.2.....2..22",
  "2..2..22.2.2...2...22...2...2..2.2.22...2.2...22.2............22",
  "2...2...22.2..2..2222...2...2..2.2.2....2.22.222.222222222222.22",
  "2..22.....22.2.22..22...2..22..2.2.2.2..2.2...22.2.............2",
  "2...2......2222....2.2..2...2..2.2.2.2222.2.2.22.2222222222222.2",
  "2....22....2..2...2...2.2.2.2..2.2.2......2...22............2..2",
  "2......2..2...2...2.....2...2..2.2.222222222222222222222222.2222",
  "2.......22.....2..2.....2...2..2.2.2..........2....2...2....2222",
  "2.......22......2222..2.2.2.2..2.2.22222222.2...2....2....2.2222",
  "2.....222......2.2..222.2...2..2.2.2...2....222222222222222.2222",
  "2...22.2.2....22.2....2.22..2..2.2.2.2.2.22.2......2..2.2...2222",
  "2..2...2.2...2..2.2...2.2...2..2.2.2.2...22.2...2.22......2.2222",
  "2.....2...2.2...2..2..2.2..22..2.2.2.2.2.2..2.2.2....2.2..2.2222",
  "2..........2....2.....2.2...2..2.2.2222222222.222.2.22......2222",
  "2..........2.....2....2.22..2..2.2............2.22....2.2.2.2222",
  "2...........2....2....2.222.22.2.2222222222222222222222222222222",
  "2.................2...2........2................................",
  "2222222222222222222222222222222222222222222222222222222222222222",
];

const canvas = document.getElementById("gl");
const menu = document.getElementById("menu");
const xrBtn = document.getElementById("xrBtn");
const fakeBtn = document.getElementById("fakeBtn");
const flatBtn = document.getElementById("flatBtn");
const xrStatus = document.getElementById("xrStatus");
const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");
const toastEl = document.getElementById("toast");

const gl = canvas.getContext("webgl", { antialias: false, alpha: false, xrCompatible: true });
if (!gl) {
  alert("WebGL is required.");
  return;
}

const CELL = 1.35;
const WALL_H = 2.35;
const EYE_H = 1.62;
const PLAYER_R = 0.22;
const EXIT = { x: 63, z: 62 };
const SPAWN = { x: 1, z: 1 };
const CLOCK_BONUS = 600;
const START_TIME = 300;

let mode = "menu";
let stereo = true;
let xrSession = null;
let xrRefSpace = null;
let lastTime = performance.now();
let remaining = START_TIME;
let ended = false;
let won = false;
let clockTaken = false;
let toastTimer = 0;

const player = {
  x: (SPAWN.x + 0.5) * CELL,
  y: EYE_H,
  z: (SPAWN.z + 0.5) * CELL,
  yaw: Math.PI * 0.5,
  pitch: 0,
  snapLatch: false,
};

let clockCell = chooseClockCell();
const keys = new Set();
let pointerLocked = false;

function chooseClockCell() {
  const candidates = [];
  for (let z = 2; z < MAP.length - 2; z++) {
    for (let x = 2; x < MAP[z].length - 2; x++) {
      if (MAP[z][x] === "." && Math.hypot(x - SPAWN.x, z - SPAWN.z) > 18) candidates.push({ x, z });
    }
  }
  return candidates[(Math.random() * candidates.length) | 0] || { x: 30, z: 30 };
}

function showToast(msg, ms = 2200) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), ms);
}

function resetGame() {
  player.x = (SPAWN.x + 0.5) * CELL;
  player.z = (SPAWN.z + 0.5) * CELL;
  player.yaw = Math.PI * 0.5;
  player.pitch = 0;
  remaining = START_TIME;
  ended = false;
  won = false;
  clockTaken = false;
  clockCell = chooseClockCell();
  showToast("5 MINUTES. FIND THE EXIT. CLOCK = +10 MIN.");
}

function cellAtWorld(x, z) {
  return { x: Math.floor(x / CELL), z: Math.floor(z / CELL) };
}
function isWallCell(x, z) {
  if (z < 0 || z >= MAP.length || x < 0 || x >= MAP[0].length) return true;
  return MAP[z][x] === "2";
}
function blocked(x, z) {
  const r = PLAYER_R;
  return [[x-r,z-r],[x+r,z-r],[x-r,z+r],[x+r,z+r],[x,z-r],[x,z+r],[x-r,z],[x+r,z]].some(([tx,tz]) => {
    const c = cellAtWorld(tx,tz);
    return isWallCell(c.x,c.z);
  });
}
function tryMove(dx, dz) {
  const nx = player.x + dx;
  const nz = player.z + dz;
  if (!blocked(nx, player.z)) player.x = nx;
  if (!blocked(player.x, nz)) player.z = nz;
}

function checkGameEvents(dt) {
  if (ended) return;
  remaining = Math.max(0, remaining - dt);
  if (remaining <= 0) {
    ended = true;
    won = false;
    showToast("YOU RAN OUT OF TIME. PRESS R TO RESTART.", 6000);
  }
  const c = cellAtWorld(player.x, player.z);
  if (!clockTaken && c.x === clockCell.x && c.z === clockCell.z) {
    clockTaken = true;
    remaining += CLOCK_BONUS;
    showToast("+10:00 // CLOCK ACQUIRED");
  }
  const exitDx = player.x / CELL - (EXIT.x + .5);
  const exitDz = player.z / CELL - (EXIT.z + .5);
  if (Math.hypot(exitDx, exitDz) < .7) {
    ended = true;
    won = true;
    showToast("ESCAPE SUCCESSFUL. YOU BEAT RAYMAZE IN VR FOR SOME REASON.", 7000);
  }
}

function updateTimer() {
  const s = Math.ceil(remaining);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  timerEl.textContent = mm + ":" + ss;
  timerEl.style.opacity = ended ? ".45" : "1";
  statusEl.textContent = won ? "ESCAPED" : ended ? "GAME OVER" : "RAYMAZE VR";
}

function desktopInput(dt) {
  if (ended) {
    if (keys.has("KeyR")) resetGame();
    return;
  }
  const sprint = keys.has("ShiftLeft") || keys.has("ShiftRight");
  const speed = (sprint ? 5.0 : 2.8) * dt;
  let f = 0, s = 0;
  if (keys.has("KeyW")) f += 1;
  if (keys.has("KeyS")) f -= 1;
  if (keys.has("KeyD")) s += 1;
  if (keys.has("KeyA")) s -= 1;
  const len = Math.hypot(f,s) || 1;
  f /= len; s /= len;
  const sy = Math.sin(player.yaw), cy = Math.cos(player.yaw);
  tryMove((sy * f + cy * s) * speed, (-cy * f + sy * s) * speed);
  if (keys.has("KeyQ")) { keys.delete("KeyQ"); player.yaw -= Math.PI / 6; }
  if (keys.has("KeyE")) { keys.delete("KeyE"); player.yaw += Math.PI / 6; }
  if (keys.has("KeyR")) { keys.delete("KeyR"); player.yaw = Math.PI * .5; player.pitch = 0; }
}

function readXRGamepads(dt, pose) {
  if (!xrSession || ended) return;
  let moveX = 0, moveY = 0, turnX = 0, sprint = false;
  for (const src of xrSession.inputSources) {
    const gp = src.gamepad;
    if (!gp) continue;
    const axes = gp.axes || [];
    const ax0 = Math.abs(axes[2] || 0) > Math.abs(axes[0] || 0) ? (axes[2] || 0) : (axes[0] || 0);
    const ay0 = Math.abs(axes[3] || 0) > Math.abs(axes[1] || 0) ? (axes[3] || 0) : (axes[1] || 0);
    if (src.handedness === "left") { moveX += ax0; moveY += ay0; }
    else if (src.handedness === "right") turnX += ax0;
    sprint ||= !!(gp.buttons && (gp.buttons[0]?.pressed || gp.buttons[1]?.pressed));
  }
  if (Math.abs(turnX) > .72) {
    if (!player.snapLatch) { player.yaw += Math.sign(turnX) * Math.PI / 6; player.snapLatch = true; }
  } else if (Math.abs(turnX) < .35) player.snapLatch = false;

  let headYaw = 0;
  if (pose && pose.transform && pose.transform.orientation) {
    const q = pose.transform.orientation;
    headYaw = Math.atan2(2*(q.w*q.y + q.x*q.z), 1 - 2*(q.y*q.y + q.z*q.z));
  }
  const yaw = player.yaw + headYaw;
  const speed = (sprint ? 5.0 : 2.8) * dt;
  const dead = v => Math.abs(v) < .15 ? 0 : v;
  const sx = dead(moveX), syInput = dead(moveY);
  tryMove((Math.cos(yaw) * sx + Math.sin(yaw) * -syInput) * speed,
          (Math.sin(yaw) * sx - Math.cos(yaw) * -syInput) * speed);
}

window.addEventListener("keydown", e => {
  keys.add(e.code);
  if (e.code === "KeyF") {
    stereo = !stereo;
    showToast(stereo ? "FAKEVR STEREO ON" : "FAKEVR STEREO OFF");
  }
  if (e.code === "Escape" && mode !== "webxr") menu.classList.remove("hidden");
});
window.addEventListener("keyup", e => keys.delete(e.code));
canvas.addEventListener("click", () => {
  if ((mode === "fakevr" || mode === "flat") && document.pointerLockElement !== canvas) canvas.requestPointerLock();
});
document.addEventListener("pointerlockchange", () => pointerLocked = document.pointerLockElement === canvas);
document.addEventListener("mousemove", e => {
  if (!pointerLocked || mode === "webxr") return;
  player.yaw += e.movementX * 0.0024;
  player.pitch = Math.max(-1.25, Math.min(1.25, player.pitch - e.movementY * 0.0020));
});

function mat4Identity() {
  return new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
}
function mat4Multiply(a,b) {
  const o = new Float32Array(16);
  for (let c=0;c<4;c++) for (let r=0;r<4;r++) {
    o[c*4+r] = a[r]*b[c*4] + a[4+r]*b[c*4+1] + a[8+r]*b[c*4+2] + a[12+r]*b[c*4+3];
  }
  return o;
}
function mat4Perspective(fovy, aspect, near, far) {
  const f = 1 / Math.tan(fovy/2), nf = 1/(near-far);
  return new Float32Array([f/aspect,0,0,0, 0,f,0,0, 0,0,(far+near)*nf,-1, 0,0,(2*far*near)*nf,0]);
}
function mat4Translation(x,y,z) {
  const m = mat4Identity(); m[12]=x; m[13]=y; m[14]=z; return m;
}
function mat4RotateX(a) {
  const c=Math.cos(a),s=Math.sin(a);
  return new Float32Array([1,0,0,0, 0,c,s,0, 0,-s,c,0, 0,0,0,1]);
}
function mat4RotateY(a) {
  const c=Math.cos(a),s=Math.sin(a);
  return new Float32Array([c,0,-s,0, 0,1,0,0, s,0,c,0, 0,0,0,1]);
}
function desktopView(xOffset=0) {
  let m = mat4Multiply(mat4RotateX(-player.pitch), mat4RotateY(-player.yaw));
  const eyeX = player.x + Math.cos(player.yaw) * xOffset;
  const eyeZ = player.z + Math.sin(player.yaw) * xOffset;
  m = mat4Multiply(m, mat4Translation(-eyeX, -player.y, -eyeZ));
  return m;
}
function xrLocomotionMatrix() {
  let m = mat4RotateY(-player.yaw);
  m = mat4Multiply(m, mat4Translation(-player.x, 0, -player.z));
  return m;
}

function compileShader(type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
  return sh;
}
const vs = compileShader(gl.VERTEX_SHADER, `
attribute vec3 aPos;
attribute vec3 aColor;
uniform mat4 uProj;
uniform mat4 uView;
varying vec3 vColor;
varying float vFog;
void main() {
  vec4 p = uView * vec4(aPos, 1.0);
  gl_Position = uProj * p;
  vFog = clamp((-p.z - 6.0) / 55.0, 0.0, 1.0);
  vColor = aColor;
}
`);
const fs = compileShader(gl.FRAGMENT_SHADER, `
precision mediump float;
varying vec3 vColor;
varying float vFog;
void main() {
  vec3 fog = vec3(0.015, 0.002, 0.025);
  vec3 col = mix(vColor, fog, vFog);
  gl_FragColor = vec4(col, 1.0);
}
`);
const prog = gl.createProgram();
gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
gl.useProgram(prog);
const aPos = gl.getAttribLocation(prog, "aPos");
const aColor = gl.getAttribLocation(prog, "aColor");
const uProj = gl.getUniformLocation(prog, "uProj");
const uView = gl.getUniformLocation(prog, "uView");

const verts = [];
function tri(a,b,c,col) { for (const p of [a,b,c]) verts.push(p[0],p[1],p[2],col[0],col[1],col[2]); }
function quad(a,b,c,d,col) { tri(a,b,c,col); tri(a,c,d,col); }
function shadeCell(x,z) {
  const h = ((x*73856093) ^ (z*19349663)) >>> 0;
  const k = 0.72 + (h % 100) / 340;
  return [0.78*k, 0.12*k, 0.69*k];
}
function addWall(x,z) {
  const x0=x*CELL,x1=(x+1)*CELL,z0=z*CELL,z1=(z+1)*CELL,y0=0,y1=WALL_H;
  const c=shadeCell(x,z), c2=[c[0]*.72,c[1]*.72,c[2]*.72], top=[c[0]*1.15,c[1]*1.15,c[2]*1.15];
  if (!isWallCell(x,z-1)) quad([x0,y0,z0],[x0,y1,z0],[x1,y1,z0],[x1,y0,z0],c);
  if (!isWallCell(x,z+1)) quad([x1,y0,z1],[x1,y1,z1],[x0,y1,z1],[x0,y0,z1],c2);
  if (!isWallCell(x-1,z)) quad([x0,y0,z1],[x0,y1,z1],[x0,y1,z0],[x0,y0,z0],c2);
  if (!isWallCell(x+1,z)) quad([x1,y0,z0],[x1,y1,z0],[x1,y1,z1],[x1,y0,z1],c);
  quad([x0,y1,z0],[x0,y1,z1],[x1,y1,z1],[x1,y1,z0],top);
}
for (let z=0; z<MAP.length; z++) for (let x=0; x<MAP[z].length; x++) if (MAP[z][x] === "2") addWall(x,z);
const worldW = MAP[0].length*CELL, worldD = MAP.length*CELL;
quad([0,0,0],[worldW,0,0],[worldW,0,worldD],[0,0,worldD],[0.035,0.035,0.045]);

const worldBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, worldBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
const worldCount = verts.length/6;

function markerCube(cx,cz,size,height,col) {
  const x0=cx-size/2,x1=cx+size/2,z0=cz-size/2,z1=cz+size/2,y0=.05,y1=height;
  const tmp = [];
  const pushTri = (a,b,c) => { for(const p of [a,b,c]) tmp.push(...p,...col); };
  const pushQuad=(a,b,c,d)=>{pushTri(a,b,c);pushTri(a,c,d);};
  pushQuad([x0,y0,z0],[x0,y1,z0],[x1,y1,z0],[x1,y0,z0]);
  pushQuad([x1,y0,z1],[x1,y1,z1],[x0,y1,z1],[x0,y0,z1]);
  pushQuad([x0,y0,z1],[x0,y1,z1],[x0,y1,z0],[x0,y0,z0]);
  pushQuad([x1,y0,z0],[x1,y1,z0],[x1,y1,z1],[x1,y0,z1]);
  pushQuad([x0,y1,z0],[x0,y1,z1],[x1,y1,z1],[x1,y1,z0]);
  return tmp;
}
const exitBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, exitBuffer);
const exitGeo = markerCube((EXIT.x+.5)*CELL,(EXIT.z+.5)*CELL,.5,1.8,[0.15,1.0,.45]);
gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(exitGeo),gl.STATIC_DRAW);
function makeClockGeometry() { return markerCube((clockCell.x+.5)*CELL,(clockCell.z+.5)*CELL,.42,1.25,[0.1,.95,1.0]); }
const clockBuffer = gl.createBuffer();

function bindBuffer(buf) {
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.enableVertexAttribArray(aPos); gl.enableVertexAttribArray(aColor);
  gl.vertexAttribPointer(aPos,3,gl.FLOAT,false,24,0);
  gl.vertexAttribPointer(aColor,3,gl.FLOAT,false,24,12);
}
function renderScene(proj, view) {
  gl.useProgram(prog);
  gl.uniformMatrix4fv(uProj,false,proj); gl.uniformMatrix4fv(uView,false,view);
  bindBuffer(worldBuffer); gl.drawArrays(gl.TRIANGLES,0,worldCount);
  bindBuffer(exitBuffer); gl.drawArrays(gl.TRIANGLES,0,exitGeo.length/6);
  if (!clockTaken) {
    const cg = makeClockGeometry();
    gl.bindBuffer(gl.ARRAY_BUFFER, clockBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(cg),gl.DYNAMIC_DRAW);
    bindBuffer(clockBuffer); gl.drawArrays(gl.TRIANGLES,0,cg.length/6);
  }
}

function resizeDesktop() {
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  const w = Math.max(1, Math.floor(innerWidth*dpr)), h = Math.max(1, Math.floor(innerHeight*dpr));
  if (canvas.width !== w || canvas.height !== h) { canvas.width=w; canvas.height=h; }
}
function renderDesktop() {
  resizeDesktop();
  gl.bindFramebuffer(gl.FRAMEBUFFER,null);
  gl.enable(gl.DEPTH_TEST);
  gl.clearColor(.015,.002,.025,1); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
  if (mode === "fakevr" && stereo) {
    const half = Math.floor(canvas.width/2), aspect = half/canvas.height;
    const proj = mat4Perspective(88*Math.PI/180,aspect,.04,140);
    gl.enable(gl.SCISSOR_TEST);
    gl.viewport(0,0,half,canvas.height); gl.scissor(0,0,half,canvas.height); renderScene(proj,desktopView(-.032));
    gl.viewport(half,0,canvas.width-half,canvas.height); gl.scissor(half,0,canvas.width-half,canvas.height); renderScene(proj,desktopView(.032));
    gl.disable(gl.SCISSOR_TEST);
  } else {
    gl.viewport(0,0,canvas.width,canvas.height);
    renderScene(mat4Perspective(82*Math.PI/180,canvas.width/canvas.height,.04,140),desktopView());
  }
}
function desktopFrame(t) {
  if (mode === "webxr") return;
  const dt = Math.min(.05,(t-lastTime)/1000); lastTime=t;
  if (mode === "fakevr" || mode === "flat") {
    desktopInput(dt); checkGameEvents(dt); updateTimer(); renderDesktop();
  }
  requestAnimationFrame(desktopFrame);
}

async function startXR() {
  if (!navigator.xr) return;
  try {
    xrSession = await navigator.xr.requestSession("immersive-vr", { requiredFeatures: ["local-floor"], optionalFeatures: ["bounded-floor", "hand-tracking"] });
    mode = "webxr";
    document.body.classList.remove("fakevr"); document.body.classList.add("webxr");
    menu.classList.add("hidden"); resetGame();
    gl.makeXRCompatible && await gl.makeXRCompatible();
    xrSession.updateRenderState({ baseLayer: new XRWebGLLayer(xrSession, gl, { antialias: false, alpha: false }) });
    xrRefSpace = await xrSession.requestReferenceSpace("local-floor");
    xrSession.addEventListener("end", () => {
      xrSession=null; xrRefSpace=null; mode="menu";
      document.body.classList.remove("webxr"); menu.classList.remove("hidden");
      lastTime=performance.now(); requestAnimationFrame(desktopFrame);
    });
    lastTime=performance.now(); xrSession.requestAnimationFrame(xrFrame);
  } catch (e) {
    console.error(e); showToast("WEBXR FAILED: " + (e.message || e));
  }
}
function xrFrame(t, frame) {
  if (!xrSession) return;
  const dt=Math.min(.05,(t-lastTime)/1000); lastTime=t;
  const pose=frame.getViewerPose(xrRefSpace);
  readXRGamepads(dt,pose); checkGameEvents(dt); updateTimer();
  const layer=xrSession.renderState.baseLayer;
  gl.bindFramebuffer(gl.FRAMEBUFFER,layer.framebuffer);
  gl.enable(gl.DEPTH_TEST); gl.clearColor(.015,.002,.025,1); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
  if (pose) {
    const locomotion=xrLocomotionMatrix();
    for (const view of pose.views) {
      const vp=layer.getViewport(view); gl.viewport(vp.x,vp.y,vp.width,vp.height);
      renderScene(new Float32Array(view.projectionMatrix), mat4Multiply(new Float32Array(view.transform.inverse.matrix),locomotion));
    }
  }
  xrSession.requestAnimationFrame(xrFrame);
}

function startDesktop(which) {
  mode=which;
  document.body.classList.toggle("fakevr",which==="fakevr"); document.body.classList.remove("webxr");
  menu.classList.add("hidden"); resetGame(); lastTime=performance.now(); canvas.requestPointerLock?.();
}
fakeBtn.addEventListener("click",()=>startDesktop("fakevr"));
flatBtn.addEventListener("click",()=>startDesktop("flat"));
xrBtn.addEventListener("click",startXR);

(async () => {
  if (!navigator.xr) {
    xrStatus.textContent="WebXR API not available here. FakeVR still works."; xrBtn.disabled=true;
  } else {
    try {
      const ok=await navigator.xr.isSessionSupported("immersive-vr");
      xrBtn.disabled=!ok;
      xrStatus.textContent=ok ? "Immersive WebXR headset detected/supported." : "No immersive-vr session available. FakeVR still works.";
    } catch {
      xrStatus.textContent="Could not query WebXR. FakeVR still works.";
    }
  }
  updateTimer(); requestAnimationFrame(desktopFrame);
})();

})();
