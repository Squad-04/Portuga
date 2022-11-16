import "./Monitoria.css";
import axios from "redaxios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Monioria() {

    const [monitorias, setMonitorias] = useState([]);
    const [resposta, setResposta] = useState('');
    const [id, setId] = useState('');
    useParams(id);

    const carregarMonitorias = async () => {
        try {
            await axios.get("http://localhost:8080/portuga/monitoria")
                .then((response) => {
                    setMonitorias(response.data);
                })
        } catch (erro) {
            console.log(erro);
        }
    }

    useEffect(() => {
        carregarMonitorias();
    }, [])

    const responder = async (e) => {
        e.preventDefault();
        try {
            axios.put(`http://localhost:8080/portuga/monitoria/${id}`, {
                resposta: resposta
            }).finally((result) => {
                alert("Monitoria Respondida!");
                carregarMonitorias();
                console.log(result.data)
            })
        } catch (erro) {
            console.log(erro);
        }
    }


        return (
            <div id="monitoria">
                <h2>Monitorias</h2>
                <table className="table table-striped border shadow">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Aluno</th>
                            <th scope="col">Pergunta</th>
                            <th scope="col">Status</th>
                            <th scope="col">-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {monitorias.map((monitoria, id) => (
                            <tr>
                                <th>{monitoria.id}</th>
                                <td>{monitoria.nome}</td>
                                <td>{monitoria.pergunta}</td>
                                <td>{monitoria.status}</td>
                                <td><button type="button" className="btn btn-success" data-toggle="modal" data-target="#resposta"
                                >Responder</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className="modal fade" id="resposta" tabindex="-1" role="dialog" aria-labelledby="respostaModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Enviar Resposta</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <label>ID da Solicitação:</label>
                                    <input type="number" className="form-control col-4" value={id} onChange={(e) => setId(e.target.value)} />
                                    <label>Insira a Resposta:</label>
                                    <textarea className="form-control" value={resposta} onChange={(e) => setResposta(e.target.value)}></textarea>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={responder}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }