import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { TextureLoader } from 'three';

const RotatingSphere = () => {
    const boxRef = useRef();
    const texture = new TextureLoader().load('src/Assets/image/skull.jpg');

    let step = 0;
    useFrame(() => {
        boxRef.current.rotation.y += 0.01;
        boxRef.current.rotation.x += 0.01;

        step += 0.02;
        boxRef.current.position.y = (20 * Math.abs(Math.sin(step))) + 10;
        boxRef.current.position.x = 20 * Math.sin(step);
        boxRef.current.position.z = 20 * Math.cos(step);
    })

    return (
        <mesh ref={boxRef}>
            <sphereGeometry args={[10,24,24]}/>
            <meshStandardMaterial color='white' map={texture}/>
        </mesh>
    );
};

export default RotatingSphere;