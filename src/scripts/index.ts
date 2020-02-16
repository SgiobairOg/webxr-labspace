import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.xr.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x8a24e3 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

renderer.setAnimationLoop(function () {
    cube.position.y = 2.0;
    cube.position.z = -2.0;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
});

document.body.appendChild(VRButton.createButton(renderer));