import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';

const Plane = () => {
    const { scene, animations } = useGLTF("src/Assets/3d/plane.glb");
    const planeRef = useRef();
    const { actions } = useAnimations(animations, planeRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, [])
    

    return (
        <mesh ref={planeRef} position={[0,15,35]} scale={[7,7,7]} rotation={[0,Math.PI/2,0]}>
            <primitive object={scene}/>
        </mesh>
    )
}
export default Plane;