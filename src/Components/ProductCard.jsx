import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

const ProductCard = ({ handlePositionRecall }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState([0,0,0]);

    const handleClick = (e) => {
        if (scale == 1) {
            setScale(3);
        }
        else if (scale != 1) {
            setScale(1);
        }
    }

    useEffect(() => {
        handlePositionRecall(position);
    },[])



    return (
        <mesh scale={scale} position={position} onClick={handleClick}>
            <planeGeometry args={[5,5]} />
            <meshStandardMaterial color={0x00ff00} />
        </mesh>
    )
}
export default ProductCard;