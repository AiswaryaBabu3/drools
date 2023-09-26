import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projectdog from "./Projectdog";
import Section from "./Section";
import Bluesection from "./Bluesection";


function Basicproj(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Projectdog/>}/>
                <Route path="about" element={<Section/>}/>
                <Route path="blue" element={<Bluesection/>}/>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Basicproj