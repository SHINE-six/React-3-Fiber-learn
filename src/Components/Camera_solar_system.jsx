import { OrbitControls, PerspectiveCamera, CameraControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';

const Camera_solar_system = ({ cameraPosition, orbit }) => {
    const ThisRef = useRef();
    const myRef = useRef(300);

  

    let step = 0;
    useFrame(() => {
        if (orbit == true) {
            step += 0.003;
            ThisRef.current.rotation.y = step;
            ThisRef.current.position.x = (Math.sin(step) * (myRef.current * 0.04)) + cameraPosition[0];
            ThisRef.current.position.z = (Math.cos(step) * (myRef.current * 0.04)) + cameraPosition[2];
            // ThisRef.current.position.x = cameraPosition[0] + 20 ;
            // ThisRef.current.position.z = cameraPosition[2] + 20;
        } 
    });


    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            myRef.current = myRef.current + 0.06;
        } else {
            myRef.current = myRef.current - 0.06;
        }
        
    }

    useEffect(() => {
        document.addEventListener('wheel', handleWheel);
    })



    return (
        <>
            <PerspectiveCamera makeDefault ref={ThisRef} near={0.1} far={1500} fov={75} position={cameraPosition}/>
            {!orbit && <CameraControls camera={ThisRef.current} target={cameraPosition} maxDistance={600}/>}
            
        </>
    )
}
export default Camera_solar_system;