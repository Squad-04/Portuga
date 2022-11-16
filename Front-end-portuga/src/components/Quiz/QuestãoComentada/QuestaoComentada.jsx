import React from "react";
import "./QuestaoComentada.css";
import imagem from "../../../imagens/estudo.jpg";
import axios from "redaxios";
import { useState } from "react";

export default function QuestaoComentada({ correctResponse }) {

    const [visible, setVisible] = useState(false)
    const [nome, setNome] = useState('');
    const [pergunta, setPergunta] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/portuga/monitoria", {
            nome: nome,
            pergunta: pergunta
        }).then((result) => {
            alert("Solicitação Enviada! Aguarde a resposta de um dos nossos monitores.");
        }).catch((erro) => {
            console.log(erro);
        })
    }



    return (
        <>

            <div className="container collapse" id="comentario" visible={visible}>
                <h2>Entenda a Questão:</h2>
                <p>{correctResponse}</p>

                <h3 className="subtitulo">Ainda não entendeu? Pergunte a um Monitor:</h3>
                <form className="form-monitoria">
                    <div>
                        <div className="form-row my-3">
                            <labe>Nome:</labe>
                            <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                        </div>
                        <div className="form-row my-3">
                            <label >Digite aqui sua dúvida:</label>
                            <textarea className="form-control" value={pergunta} onChange={(e) => setPergunta(e.target.value)}
                                placeholder="Explique aqui para que o Monitor possa te ajudar..."></textarea>
                        </div>
                        <div>
                            <input type="button" value="Enviar" id="btn-enviar" className="btn btn-success" onClick={enviar} />
                        </div>
                    </div>


                    <img src={imagem} className="foto" />
                </form>
            </div>

        </>
    );
}