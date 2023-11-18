import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Saturn = ({ handleThisCameraPosition, handleExit }) => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/saturn_planet.glb');
    const SaturnRef = useRef();
    const startThis = useRef();
    const distance = 460;

    useFrame((state) => {
    //     SaturnRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.05) * distance;
    //     SaturnRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.05) * distance;
        SaturnRef.current.rotation.y += 0.001;
    //     if (startThis.current) {
    //         handleThisCameraPosition(SaturnRef.current.position.x, SaturnRef.current.position.y, SaturnRef.current.position.z)
    //     }
    });

    function handleClick() {
        handleThisCameraPosition(SaturnRef.current.position.x, SaturnRef.current.position.y, SaturnRef.current.position.z)
        startThis.current = true;
    }
    function handleMissed() {
        startThis.current = false;
        handleExit();
    }

    return (
        <mesh ref={SaturnRef} scale={5} rotation={[Math.PI/4,0,0]} position={[distance,0,0]} onClick={handleClick} onPointerMissed={handleMissed}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default Saturn;