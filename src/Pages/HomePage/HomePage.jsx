import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';

import Loader from '../../Components/Loader';
import IslandModel from '../../Models/Island.jsx';
import Camera from '../../Components/Camera.jsx';
import Sky from '../../Models/Sky.jsx';
import Bird from '../../Models/bird.jsx';
import Plane from '../../Models/Plane.jsx';
import HomeInfo from './HomeInfo.jsx';

const HomePage = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [segmentC, setSegmentC] = useState(0);
    const [allowInteract, setAllowInteract] = useState(false);

    function segment(segment) {
        console.log(segment);
        setSegmentC(segment);
    }

    function handleAllowInteract() {
        setAllowInteract(true);
        console.log("allowInteract");
    }
    function handleDontAllowInteract() {
        if (segmentC == 0) {
            setAllowInteract(false);
            console.log("dont allowInteract");
        }
    }

    return (
        <section className='w-full h-screen relative'>
            <HomeInfo handleDontAllowInteract={handleDontAllowInteract} allowInteract={allowInteract} segment = {segmentC}/>
            <Canvas 
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-no-drop'}`} 
                // camera={{ near: 0.1, far: 1000, fov: 75, position: [20, 30, 100]}} 
            >
                <Camera />
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.3}/>
                    <directionalLight position={[0,10,0]} intensity={2} color={0xffffff}/>
                    <Sky/>
                    <Bird/>
                    <Plane/>
                    <IslandModel handleAllowInteract={handleAllowInteract} isRotating={isRotating} setIsRotating={setIsRotating} segment={segment} allowInteract={allowInteract}/>

                    

                </Suspense>
                
            </Canvas>
        </section>
    )
}
export default HomePage;