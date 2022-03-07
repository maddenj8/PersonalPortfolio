import './style.css';

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    // alpha: true
  })
  
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight*0.9);
camera.position.set(0, 0, 25)

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(3, 10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const geometry = new THREE.CylinderGeometry(5, 5, 1.8, 40, 1 );
const material = new THREE.MeshPhongMaterial({
  color: 0x0f3f23
});
const disc = new THREE.Mesh( geometry, material );

disc.position.set(6, 0, 0)
disc.rotation.x = 190 ;
scene.add( disc );

var controls = new OrbitControls(camera, renderer.domElement);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

function animate() {
    requestAnimationFrame( animate );

    renderer.render(scene, camera)

    controls.update()
}

animate()