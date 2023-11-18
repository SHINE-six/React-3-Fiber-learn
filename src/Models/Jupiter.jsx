import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Jupiter = ({ handleThisCameraPosition, handleExit }) => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/realistic_jupiter.glb');
    const Jupiter = useRef();
    const startThis = useRef();
    const distance = 360;

    useFrame((state) => {
        Jupiter.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.05) * distance;
        Jupiter.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.05) * distance;
        Jupiter.current.rotation.y += 0.001;
        if (startThis.current) {
            handleThisCameraPosition(Jupiter.current.position.x, Jupiter.current.position.y, Jupiter.current.position.z)
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
        <mesh ref={Jupiter} scale={0.15} position={[distance,0,0]} onClick={handleClick} onPointerMissed={handleMissed}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default Jupiter;