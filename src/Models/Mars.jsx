import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Mars = ({ handleThisCameraPosition, handleExit }) => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/mars_realistic_12k.glb');
    const MarsRef = useRef();
    const startThis = useRef();
    const distance = 260;

    useFrame((state) => {
        MarsRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.05) * distance;
        MarsRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.05) * distance;
        MarsRef.current.rotation.y += 0.001;
        if (startThis.current) {
            handleThisCameraPosition(MarsRef.current.position.x, MarsRef.current.position.y, MarsRef.current.position.z)
        }
    });

    function handleClick() {
        startThis.current = true;
    }
    function handleMissed() {
        startThis.current = false;
        handleExit();
    }

    return (
        <mesh ref={MarsRef} scale={0.4} position={[distance,0,0]} onClick={handleClick} onPointerMissed={handleMissed}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default Mars;