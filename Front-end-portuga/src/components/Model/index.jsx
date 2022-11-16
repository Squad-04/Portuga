import axios from "redaxios";
import { useState } from "react";


function Model() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [avaliacaoPlataforma, setAvaPlat] = useState('');
    const [avaliacaoSimulado, setAvaSim] = useState('');
    const [indicaria, setIndicaria] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/portuga/formulario", {
            nome: nome,
            idade: idade,
            avaliacaoPlataforma: avaliacaoPlataforma,
            avaliacaoSimulado: avaliacaoSimulado,
            indicaria: indicaria,
            mensagem: mensagem,

        }).then((result) => {
            alert("Formulário enviado!");
        }).catch((erro) => {
            console.log(erro);
        })
    }

    return (
        <main>
            <div className="container border border-success mt-5" id="box_form">

                <div className="d-flex flex-column">
                    <div>
                        <h2>Está Gostando? Nos dê sua opinião!</h2>
                    </div>

                    <div>
                        <p>Sua opinião é muito importante para melhorar o conteúdo da nossa Plataforma!
                            Responda um questionário rápido nos contando sua experiência. Não é necessário cadastro.
                        </p>
                    </div>

                </div>

                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#formulario">Responder</button>
            </div>

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" id="formulario">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Formulário de Satisfação Portuga</h5>
                        </div>
                        <div className="modal-body">
                            <form>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Nome</label>
                                        <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label>Idade</label>
                                        <input type="number" className="form-control" value={idade} onChange={(e) => setIdade(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Como você avalia o conteúdo da nossa plataforma?</label>
                                        <select className="form-control" value={avaliacaoPlataforma} onChange={(e) => setAvaPlat(e.target.value)} >
                                            <option className="selected">Selecione...</option>
                                            <option>Ruim</option>
                                            <option>Bom</option>
                                            <option>Excelente</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label>O que você achou dos <strong>Desafios Protuga</strong>?</label>
                                        <select className="form-control" value={avaliacaoSimulado} onChange={(e) => setAvaSim(e.target.value)}>
                                            <option className="selected">Selecione...</option>
                                            <option>Ruim</option>
                                            <option>Bom</option>
                                            <option>Excelente</option>
                                        </select>
                                    </div>
                                </div>

                                <label className="mr-2">Indicaria a Plataforma para outras pessoas?</label>
                                <input type="radio" name="indicação" value="Sim" onChange={(e) => setIndicaria(e.target.value)} />
                                <label className="mr-2">Sim</label>
                                <input type="radio" name="indicação" value="Não" onChange={(e) => setIndicaria(e.target.value)} />
                                <label className="mr-2">Não</label>

                                <label>Nos conte abaixo mais sobre a sua experiência e
                                    dê sugestões do que gostaria de encontrar:</label>
                                <textarea className="form-control" placeholder="Digite Aqui.." value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={enviar}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};
export default Model;