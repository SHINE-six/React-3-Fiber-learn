import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Uranus = ({ handleThisCameraPosition, handleExit }) => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/uranus.glb');
    const UranusRef = useRef();
    const startThis = useRef();
    const distance = 730;

    useFrame((state) => {
        UranusRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.05) * distance;
        UranusRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.05) * distance;
        UranusRef.current.rotation.y += 0.001;
        if (startThis.current) {
            handleThisCameraPosition(UranusRef.current.position.x, UranusRef.current.position.y, UranusRef.current.position.z)
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
        <mesh ref={UranusRef} scale={0.02} position={[distance,0,0]} onClick={handleClick} onPointerMissed={handleMissed}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default Uranus;