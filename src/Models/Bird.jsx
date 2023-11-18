import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';

const Bird = () => {
    const { scene, animations } = useGLTF("src/Assets/3d/bird.glb");
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, [])

    let step = 0;
    useFrame(() => {
        step += 0.002;
        birdRef.current.position.y = Math.sin(step) * 10 + 15;
        birdRef.current.position.x = Math.sin(step) * 31;
        birdRef.current.position.z = Math.sin(step * 1.2) * 25 + 4;
        if (birdRef.current.position.x > 30) {
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < -30) {
            birdRef.current.rotation.y = 0;
        }
        
    })

    return (
        <mesh ref={birdRef} position={[-31,-21,1]} scale={[0.025,0.025,0.025]}>
            <primitive object={scene}/>
        </mesh>
    )
}
export default Bird;