import './style.css';

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Plane } from 'three';

var mousex;
var mousey;

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true
  })
  
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 25, 25)

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(3, 10, 8);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const geometry = new THREE.CylinderGeometry(4, 4, 1.8, 40, 1 );
const material = new THREE.MeshPhongMaterial({
  color: 0x555555,
  specular: 0xf3f234,
  shininess: 8,
  shading: THREE.SmoothShading
});
const disc = new THREE.Mesh( geometry, material );

disc.position.set(0, 9, 0)
disc.rotation.set(1.570795,0,0)
scene.add( disc );

const PlaneGeometry = new THREE.PlaneGeometry(50, 30);
const planeMaterial = new THREE.MeshBasicMaterial({color:'grey', side:THREE.DoubleSide})
const plane = new THREE.Mesh(PlaneGeometry, planeMaterial);
plane.rotation.x = 1.570795
scene.add(plane);

var controls = new OrbitControls(camera, renderer.domElement);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

document.onmousedown = function() {

}

function animate() {
    requestAnimationFrame( animate );

    renderer.render(scene, camera)

    controls.update()
}

animate()