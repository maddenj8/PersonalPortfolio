import './style.css';

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
  })

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight*0.9);
camera.position.setZ(15);

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(1, 1, 1);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0, 0, 0)
scene.add( cube );

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