import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

import Scene from './Contents/Scene';
import NavBar from './Components/NavBar.jsx';
import Page from './Pages/index.js';

const App = () => {
    const canvasRef = useRef(null);

    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Page.HomePage/>}/>
                    <Route path='/about' element={<Page.AboutPage/>}/>
                </Routes>
                {/* <canvas ref={canvasRef} /> */}
                {/* <Scene canvasRef={canvasRef} /> */}
            </BrowserRouter>
        </div>
    )
}
export default App;
