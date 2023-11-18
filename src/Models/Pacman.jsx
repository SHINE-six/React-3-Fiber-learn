import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';

const Pacman = ({ PacmanPos, allowInteract, texture }) => {
    const [pacmanMouth, setPacmanMouth] = useState(5.3);
    const [pacmanTheta, setPacmanTheta] = useState(0);
    const PacRef = useRef();
    const stepRef = useRef(0);


    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            PacRef.current.rotation.z = 0;
            PacRef.current.position.x += 10;
        } 
        if (e.key === 'ArrowLeft') {
            PacRef.current.rotation.z = Math.PI;
            PacRef.current.position.x -= 10;
        }
        if (e.key === 'ArrowUp') {
            PacRef.current.rotation.z = Math.PI / 2;
            PacRef.current.position.y += 10;
        }
        if (e.key === 'ArrowDown') {
            PacRef.current.rotation.z = -Math.PI / 2;
            PacRef.current.position.y -= 10;
        }
    }

    useEffect(() => {
        if (!allowInteract) {
            document.addEventListener('keydown', handleKeyDown);
            PacmanPos(PacRef.current.position);

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            }
        }
    });


    useFrame(() => {
        stepRef.current += 0.06;
        setPacmanMouth((Math.sin(stepRef.current) * 1) + 5.3);
        setPacmanTheta((Math.cos(stepRef.current) * 0.5) + 0.6);
    })
    

    return (
        <mesh ref={PacRef}>
            <circleGeometry args={[20,24,pacmanTheta,pacmanMouth]} />
            <meshBasicMaterial map={texture}/>
        </mesh>
    )
}
export default Pacman;