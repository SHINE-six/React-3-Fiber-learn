import React from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Car = () => {
    const gltf = useLoader(GLTFLoader, 'src/Assets/3d/cyberpunk_car.glb');

    //* setSize State properties from useThree hook, used to change the size of the canvas
    const { setSize } = useThree();
    const exampleSetSize = (e) => {
        setSize(300,300);
    }

    //* clock State properties from useThree hook, used to get the time elapsed since the start of the application
    // const { clock } = useThree(); 
    // console.log(clock.elapsedTime);
    


    return (
        <mesh scale={0.1}
            onClick={(e) => console.log('click')}
            onContextMenu={(e) => console.log('context menu')}
            onDoubleClick={(e) => console.log('double click')}
            onWheel={(e) => console.log('wheel spins')}
            onPointerUp={(e) => console.log('up')}
            onPointerDown={(e) => console.log('down')}
            onPointerOver={(e) => console.log('over')}
            onPointerOut={(e) => console.log('out')}
            onPointerEnter={(e) => console.log('enter')} // see note 1
            onPointerLeave={(e) => console.log('leave')} // see note 1
            onPointerMove={(e) => console.log('move')}
            onPointerMissed={() => console.log('missed')}
            onUpdate={(self) => console.log('props have been updated')}
        >
            <primitive object={gltf.scene} materials={gltf.materials}/>
        </mesh>
    )
}
export default Car;