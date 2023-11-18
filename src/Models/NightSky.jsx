import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const NightSky = () => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/night_sky.glb')

    return (
        <mesh scale={700}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}
export default NightSky;