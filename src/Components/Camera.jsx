import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';

const Camera = (props) => {
    const cameraRef = useRef();

    let step = 0;
    useFrame(() => {
        step += 0.001;
        cameraRef.current.position.z = 20 * Math.cos(step) + 70;
    })
    return (
        <PerspectiveCamera ref={cameraRef} near={0.1} far={1000} makeDefault position={[0,40,80]} rotation={[-0.3,0,0]}/>
    )
}
export default Camera;