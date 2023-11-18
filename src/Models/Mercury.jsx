import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Mercury = ({ handleThisCameraPosition, handleExit }) => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/mercury.glb');
    const MercuryRef = useRef();
    const startThis = useRef();
    const distance = 100;

    useFrame((state) => {
        MercuryRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.05) * distance;
        MercuryRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.05) * distance;
        MercuryRef.current.rotation.y += 0.001;
        if (startThis.current) {
            handleThisCameraPosition(MercuryRef.current.position.x, MercuryRef.current.position.y, MercuryRef.current.position.z)
        }
    });

    function handleClick() {
        handleThisCameraPosition(MercuryRef.current.position.x, MercuryRef.current.position.y, MercuryRef.current.position.z);
    }

    function handleMissed() {
        handleExit();
    }

    return (
        <mesh ref={MercuryRef} name='Mercury' scale={0.03} position={[distance,0,0]} onClick={handleClick} onPointerMissed={handleMissed}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default Mercury;