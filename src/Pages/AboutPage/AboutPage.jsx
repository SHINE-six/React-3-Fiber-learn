import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CameraControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Camera_solar_system from '../../Components/Camera_solar_system.jsx';
import NightSky from '../../Models/NightSky';
import Sun from '../../Models/Sun.jsx';
import Mercury from '../../Models/Mercury.jsx';
import Venus from '../../Models/Venus.jsx';
import Earth from '../../Models/Earth.jsx';
import Mars from '../../Models/Mars.jsx';
import Jupiter from '../../Models/Jupiter.jsx';
import Saturn from '../../Models/Saturn.jsx';
import Uranus from '../../Models/Uranus.jsx';
import Neptune from '../../Models/Neptune.jsx';



const AboutPage = () => {
    const [cameraPosition, setCameraPosition] = useState([0,0,100]);
    const [orbit, setOrbit] = useState(false);
    

    function handleThisCameraPosition(newX, newY, newZ) {
        setCameraPosition([newX, newY, newZ]);
        if (orbit == false) {
            setOrbit(true);
        }
    }

    const handleExit = (e) => {
        setOrbit(false);
        setCameraPosition([0,0,100]);
    };
    
    
    
    return (
        <section className='w-full h-screen'>
            <Canvas>
                <Camera_solar_system cameraPosition={cameraPosition} orbit={orbit}/>
                {/* <PerspectiveCamera ref={ThisRef} near={0.1} far={1000} fov={75} makeDefault position={cameraPosition} /> */}
                {/* <CameraControls camera={{}}/> */}
                {/* <OrbitControls /> */}
                
                <ambientLight intensity={10}/>
                <pointLight position={[0, 0, 0]} intensity={8} color="white" distance={100} decay={0} />

                <NightSky />
                <Sun />
                <Mercury handleThisCameraPosition={handleThisCameraPosition} handleExit={handleExit}/>
                <Venus handleThisCameraPosition={handleThisCameraPosition} handleExit={handleExit}/>
                <Earth handleThisCameraPosition={handleThisCameraPosition} handleExit={handleExit}/>
                <Mars handleThisCameraPosition={handleThisCameraPosition} handleExit={handleExit}/>
                <Jupiter handleThisCameraPosition={handleThisCameraPosition} handleExit={handleExit}/>
                <Saturn handleThisCameraPosition={handleThisCameraPosition} handleExit={handleExit}/>
                <Uranus handleThisCameraPosition={handleThisCameraPosition} handleExit={handleExit}/>
                <Neptune handleThisCameraPosition={handleThisCameraPosition} handleExit={handleExit}/>

                <mesh position={[0,0,0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={'#00ff00'} />
                </mesh>
            </Canvas>
        </section>
    )
}
export default AboutPage;