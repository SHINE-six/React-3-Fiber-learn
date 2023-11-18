import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Venus = ({ handleThisCameraPosition, handleExit }) => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/venus.glb');
    const VenusRef = useRef();
    const startThis = useRef();
    const distance = 150;

    useFrame((state) => {
        VenusRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.05) * distance;
        VenusRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.05) * distance;
        VenusRef.current.rotation.y += 0.001;
        if (startThis.current) {
            handleThisCameraPosition(VenusRef.current.position.x, VenusRef.current.position.y, VenusRef.current.position.z)
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
        <mesh ref={VenusRef} scale={0.04} position={[distance,0,0]} onClick={handleClick} onPointerMissed={handleMissed}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default Venus;