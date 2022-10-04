import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Desafio } from '../pages/DesafioPortuga/index.jsx';
import { Ebook } from '../pages/Ebook';

export default props => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/desafio" element={<Desafio />} />
            <Route path="/ebook" element={<Ebook />} />
        </Routes>
    </BrowserRouter>

);
