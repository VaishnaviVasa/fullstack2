import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Twelve from './Twelve';
import Ecommerce from './Ecommerce';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Twelve/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;