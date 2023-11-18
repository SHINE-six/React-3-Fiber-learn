import React, { useRef } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Sun = () => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/sun.glb')
    const SunRef = useRef();


    useFrame(() => {
        SunRef.current.rotation.y += 0.001;
    })

    return (
        <mesh name='Sun' ref={SunRef} scale={5} position={[0,0,0]}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default Sun;