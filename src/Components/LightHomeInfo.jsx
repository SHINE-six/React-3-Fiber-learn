import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const LightHomeInfo = () => {
    const lightRef = useRef();

    useFrame(() => {
        lightRef.current.position.x = Math.sin(Date.now() * 0.001) * 10;
        lightRef.current.position.y = Math.cos(Date.now() * 0.001) * 5;
        lightRef.current.position.z = Math.sin(Date.now() * 0.001) * 10 + 9;
    })
    

    return (
        <directionalLight ref={lightRef} intensity={2}/>
    )
}
export default LightHomeInfo;