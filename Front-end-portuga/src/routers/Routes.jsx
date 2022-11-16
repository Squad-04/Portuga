import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Desafio } from '../pages/DesafioPortuga/index.jsx';
import { Ebook } from '../pages/Ebook';
import { Quiz } from "../components/Quiz";
import { LoginAdm } from '../pages/LoginAdm';
import { Usuario } from "../pages/Usuario/Usuario";
import Adm from "../pages/Adm/Adm";
import QuestaoComentada from "../components/Quiz/QuestãoComentada/QuestaoComentada";

export default props => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/desafio" element={<Desafio />} />
            <Route path="/ebook" element={<Ebook />} />
            <Route path="/quiz" element={<Quiz/>}/>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/loginAdm" element={<LoginAdm/>} />
            <Route exact path="/usuario" element={<Usuario/>} />
            <Route exact path="/adm" element={<Adm />} />
            <Route exact path="/comentario" element={<QuestaoComentada/>} />
        </Routes>
    </BrowserRouter>

);
