import React from "react";
import "./QuestaoComentada.css"
import imagem from "../../../assets/imagem.png";
import { useState } from "react";
import axios from "redaxios";


export default function QuestaoComentada({ }) {


    const [visible] = useState(false)
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed, quibusdam provident rem necessitatibus eum reiciendis labore ex earum quod ipsum quasi, debitis, quia distinctio deleniti neque? Optio, odio quam?</p>
                <h3>Ainda não entendeu? Pergunte a um Monitor:</h3>
                <form className="form-monitoria">
                    <div className="form-goup boxFormulario">
                        <div className="form-row my-4">
                            <labe>Nome:</labe>
                            <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                        </div>
                        <div className="form-row my-4">
                            <label >Digite aqui sua dúvida:</label>
                            <textarea className="form-control col-md-12" value={pergunta} onChange={(e) => setPergunta(e.target.value)}
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