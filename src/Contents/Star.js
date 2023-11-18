import * as THREE from 'three';

const geometry = new THREE.SphereGeometry( 0.3, 24, 24);
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const star = new THREE.Mesh( geometry, material );

export default star;