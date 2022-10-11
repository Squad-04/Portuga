import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Desafio } from '../pages/DesafioPortuga/index.jsx';
import { Ebook } from '../pages/Ebook';
import { Quiz } from "../components/Quiz/Todas";
import { Final } from "../components/Quiz/Todas/final";

export default props => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/desafio" element={<Desafio />} />
            <Route exact path="/final" element={<Final />} />
            <Route path="/ebook" element={<Ebook />} />
            <Route path="/quiz/:type" element={<Quiz/>}/>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/final" element={<Final />} />

        </Routes>
    </BrowserRouter>

);
