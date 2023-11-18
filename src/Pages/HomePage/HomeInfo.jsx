import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { OrthographicCamera } from '@react-three/drei';
import Pacman from '../../Models/Pacman';
import Torus from '../../Models/Torus';
import { TextureLoader } from 'three';
import LightHomeInfo from '../../Components/LightHomeInfo';
import { useNavigate } from 'react-router-dom';

const HomeInfo = ({ handleDontAllowInteract, allowInteract, segment }) => {
    const [textInfo, setTextInfo] = useState();
    const [torusPos, setTorusPos] = useState([0,0,0]);
    const [pacmanPos, setPacmanPos] = useState([0,0,0]);
    const [close, setClose] = useState(false);
    const navigate = useNavigate();

    const texture = new TextureLoader().load('src/Assets/image/pacmanmaterial.png');

    useEffect(() => {
        

        switch (segment) {
            case 0:
                setTextInfo(
                    <h1>Hi, my name is <b>Desmond</b></h1>
                    );
                break;
            case 1:
                setTextInfo(
                    <h1>This is the second segment</h1>
                    );
                break;
            case 2:
                setTextInfo(
                    <h1>This is the third segment</h1>
                    );
                break;
            case 3:
                setTextInfo(
                    <h1>This is the fourth segment</h1>
                    );
                break;
        }

        if (close) {
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            }
        } 
    },[segment, close])

    function handleTorusPos(pos) {
        setTorusPos(pos);
        console.log(pos);
    }
    function handlePacmanPos(pos) {
        setPacmanPos(pos);
        calculateDistance();
    }
    function calculateDistance() {
        const x = pacmanPos.x - torusPos[0];
        const y = pacmanPos.y - torusPos[1];
        const distance = Math.sqrt(x*x + y*y);
        if (distance < 15) {
            setClose(true);
            console.log("close");
        } else {
            setClose(false);
        }
    }
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            console.log("enter");
            navigate("/about");
        }
    }


    return (
        <div className='z-40 w-full h-fit absolute flex flex-col items-center top-20'>
            <div onClick={() => handleDontAllowInteract()} className='bg-blue-500 z-40 sm:w-1/2 md:w-1/3 rounded-md text-center text-lg shadow-custom h-fit py-4 px-3'>
                {textInfo}
            </div>
            {close && <div className='mt-48 rounded-md sm:w-1/3 md:w-1/4 bg-lime-200 shadow-custom text-center'>Press <b className='underline'>Enter</b> <div className='inline text-xl font-black'>↵</div> <br/> to go to <p className='inline italic'>About</p></div>}
            {segment == 0 && 
            <div className='absolute z-30 w-full h-80'>
                <Canvas>
                    <OrthographicCamera makeDefault position={[0,0,200]}/>
                    <Pacman PacmanPos={handlePacmanPos} allowInteract={allowInteract} texture={texture}/>
                    <LightHomeInfo/>
                    <Torus torusPos={handleTorusPos}/>
                </Canvas>
            </div>}
            
        </div>
    )
}
export default HomeInfo;