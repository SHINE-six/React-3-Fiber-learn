import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Torus = ({ torusPos }) => {
    const [this_torusPos, setThis_torusPos] = useState([Math.floor(Math.random() * 401) - 200,40,0]);
    const torusRef = useRef();
    const hue = 0x00ffff;

    useEffect(() => {
        torusPos(this_torusPos);
    },[])

    let step = 0;
    useFrame(() => {
        step += 0.01;
        torusRef.current.rotation.x += 0.02;
        torusRef.current.rotation.y += 0.03;
        torusRef.current.rotation.z += 0.01;
        torusRef.current.material.color.r = Math.sin(step) * 0.4 + 0.4;
        torusRef.current.material.color.g = Math.cos(step*1.4) * 0.4 + 0.4;
        torusRef.current.material.color.b = Math.sin(step*0.6) * 0.4 + 0.4;
    });

    return (
        <mesh ref={torusRef} position={this_torusPos}>
            <torusGeometry args={[20, 7, 5, 24]}/>
            <meshStandardMaterial color={hue} />
        </mesh>
    );
}
export default Torus;