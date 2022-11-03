import './CadastrosAdm.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CriarAdm from "./CriarAdm"
import AtualizarAdm from "./AtualizarAdm";


function CadastrosAdm() {

    const [adms, setAdms] = useState([]);


    useEffect(() => {
        carregarAdms();

    }, []);

    const carregarAdms = async () => {
        try {
            await axios.get("http://localhost:8080/portuga/administrador")
                .then((response) => {
                    setAdms(response.data);
                });
        }
        catch (erro) {
            console.log(erro);
        }
    };

    const { id } = useParams();

    const deletarAdm = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/portuga/administrador/${id}`)
                .then((response) => {
                    alert("Administrador Excluído.");
                    carregarAdms();
                })
        } catch (erro) {
            console.log(erro);
        }
    }
    return (
        <div>

            <section id="conteudo">
                <button type="button" className="btn btn-success buttomAdm" data-toggle="modal" data-target="#criarAdm">Criar Adm</button>
                <button type="button" className="btn btn-success buttomAdm" data-toggle="modal" data-target="#atualizarAdm">Atualizar Adm</button>

                <table className="table table-striped border shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Acesso</th>
                            <th scope="col">Nível de Acesso</th>
                            <th scope="col">-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adms.map((administrador, id) => (
                            <tr>
                                <th>{administrador.id}</th>
                                <td> {administrador.nome} </td>
                                <td> {administrador.acesso} </td>
                                <td> {administrador.nivel_acesso} </td>
                                <td><button type="submit" className="btn btn-danger" data-toggle="modal" 
                                data-target="#confirmacao">Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <CriarAdm />
                <AtualizarAdm />
            </section>

            <div className="modal" tabindex="-1" id="confirmacao">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmar Exclusão</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Tem certeza que deseja realizar essa alteração? Essa opção é irreversível</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-success" onClick={() => deletarAdm(administrador.id)}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastrosAdm;