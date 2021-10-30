import * as THREE from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function makeRenderer(make) {
  const renderer = make();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.style.top = 0;
  renderer.domElement.style.left = 0;
  renderer.domElement.style.position = "absolute";
  return renderer;
}

export default function getSetup() {
  const rendererGL = makeRenderer(() => new THREE.WebGLRenderer());
  const renderer = makeRenderer(() => new CSS3DRenderer());
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 20;
  const controls = new OrbitControls(camera, renderer.domElement);
  scene.add(new THREE.AxesHelper(100));

  const animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    rendererGL.render(scene, camera);
  };

  return { scene, animate };
}
