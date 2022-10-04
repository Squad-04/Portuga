import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Desafio } from '../pages/DesafioPortuga/index.jsx';
import { Ebook } from '../pages/Ebook';

export default props => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/desafio" element={<Desafio />} />
            <Route path="/ebook" element={<Ebook />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>

);