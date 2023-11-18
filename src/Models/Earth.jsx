import React, { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Audio, AudioLoader, PositionalAudio } from 'three';

const Earth = ({ handleThisCameraPosition, handleExit }) => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/earth.glb')
    const EarthRef = useRef();
    const startThis = useRef(false);
    const orbitRotate = useRef(true);
    const distance = 200;

    useEffect(() => {
        const audioURL = 'src/Assets/Audio/hans-zimmer.mp3';
        const audio = new window.Audio(audioURL); // Use the global Audio constructor
    
        // Set up any additional audio features as needed
        audio.volume = 1; 
        audio.play();
        console.log("start playing");
        return () => {
            audio.pause();
            audio.currentTime = 0;
            console.log("stop playing");
        }
    },[]);


    useFrame((state) => {
        if (orbitRotate.current == true) {
            EarthRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.05) * distance;
            EarthRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.05) * distance;
            EarthRef.current.rotation.y += 0.001;
        } else {
            EarthRef.current.rotation.y += 0.001;
        }
        if (startThis.current) {
            handleThisCameraPosition(EarthRef.current.position.x, EarthRef.current.position.y, EarthRef.current.position.z)
        }
    });

    function handleClick() {
        startThis.current = true;
    }
    function handleMissed() {
        startThis.current = false;
        handleExit();
    }
    function handleOrbitRotate() {
        orbitRotate.current = !orbitRotate.current;
        if (orbitRotate.current == false) {
            startThis.current = false;
        } else if (orbitRotate.current == true) {
            startThis.current = true;
        }
        console.log(orbitRotate.current);
    }

    return (
        <mesh ref={EarthRef} scale={0.7} position={[distance,0,0]} onClick={handleClick} onPointerMissed={handleMissed} onPointerOver={handleOrbitRotate}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default Earth;