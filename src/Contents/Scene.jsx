import { useEffect } from 'react';
import * as THREE from 'three';
import cube from './Cube';
import spacebg from './Materials/space.jpg';
// import star from './Star';

import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Scene = ({ canvasRef }) => {

    useEffect(() => {
        const canvas = canvasRef.current;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        scene.add(camera);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;

        // Set camera position
        camera.position.z = 10;

        // Light
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(10, 10, 0);
        directionalLight.castShadow = true;
        const ambientLight = new THREE.AmbientLight(0xffffff, 0);
        const spotLight = new THREE.SpotLight(0xffffff);
        // spotLight.position.set(0, 20, 0);
        // scene.add(directionalLight, ambientLight, spotLight);
        scene.add(spotLight);

        const lightHelper = new THREE.DirectionalLightHelper(directionalLight);
        const gridHelper = new THREE.GridHelper(200, 100);
        const axesHelper = new THREE.AxesHelper(5);
        const lightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
        const spotLightHelper = new THREE.SpotLightHelper(spotLight);
        // scene.add(lightHelper, gridHelper, axesHelper, lightShadowHelper);
        scene.add(spotLightHelper);

        // Background
        const spaceTexture = new THREE.TextureLoader().load(spacebg);
        scene.background = spaceTexture;
        

        // Multiple Stars
        function makeStar(){
            const geometry = new THREE.SphereGeometry( 0.1, 24, 24);
            const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
            const star = new THREE.Mesh( geometry, material );

            const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(50));
            star.position.set(x,y,z);
            scene.add(star);
        }

        const geometry = new THREE.PlaneGeometry( 10, 10, 10 );
        const material = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        const planeMesh = new THREE.Mesh( geometry, material );
        planeMesh.rotation.x = - Math.PI / 2;
        planeMesh.receiveShadow = true;

        // Object
        cube.castShadow = true;
        scene.add(cube);
        Array(100).fill().forEach(makeStar)
        scene.add(planeMesh);

        const gui = new dat.GUI();

        const options = {
            cubeColor: '#ff0000',
            wireframe: false,
            speed: 0.01
        };
        
        gui.addColor(options, 'cubeColor').onChange((event) => {
            cube.material.color.set(event);
        });

        gui.add(options, 'wireframe').onChange((event) => {
            cube.material.wireframe = event;
        });

        gui.add(options, 'speed', 0.001, 0.2);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);


        let step = 0;
        

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            step += options.speed;
            cube.position.y = 4 * Math.abs(Math.sin(step));
            
            controls.update();

            renderer.render(scene, camera);
        }
        animate();

        function handleKeyDown(event){
            switch (event.key) {
                case 'ArrowRight':
                    cube.position.x += 0.05;
                case 'ArrowLeft':
                    cube.position.x -= 0.05;
                case 'ArrowUp':
                    cube.position.y += 0.05;
                case 'ArrowDown':
                    cube.position.y -= 0.05;
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        // window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            // window.removeEventListener('keydown', handleKeyDown);
            scene.remove(cube);
            cube.geometry.dispose();
            cube.material.dispose();
        }

    }, [canvasRef]);

    
    return null;
}
export default Scene;