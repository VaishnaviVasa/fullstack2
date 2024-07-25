import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Ecommerce from './Ecommerce';
import Navigation from './Navigation';
import DataFetching2 from './DataFetching2';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Ecommerce />} />
                <Route path="/user" element={<DataFetching2/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
