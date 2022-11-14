import axios from 'redaxios';
import { useEffect, useState } from "react";


function Opinioes() {

    const [opinioes, setOpinioes] = useState([]);

    useEffect(() => {
        carregarOpinioes();
    }, []);


    const carregarOpinioes = async () => {
        try {
            await axios.get("http://localhost:8080/portuga/formulario")
                .then((response) => {
                    setOpinioes(response.data);
                })
        } catch (erro) {
            console.log(erro);
        }
    };



    const deletarOpiniao = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/portuga/formulario/${id}`)
                .then((response) => {
                    alert("Opinião Excluída.");
                    carregarOpinioes();
                })
        } catch (erro) {
            console.log(erro);
        }
    }

    return (
        <div>
            <table className="table table-striped border shadow mt-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Avaliação do Simulado</th>
                        <th scope="col">Avaliação da Plataforma</th>
                        <th scope="col">Indicaria?</th>
                        <th scope="col">Mensagem</th>
                    </tr>
                </thead>
                <tbody>
                    {opinioes.map((opiniao, id) => (
                        <tr>
                            <th>{opiniao.id}</th>
                            <td> {opiniao.nome} </td>
                            <td> {opiniao.idade} </td>
                            <td> {opiniao.avaliacaoPlataforma} </td>
                            <td> {opiniao.avaliacaoSimulado} </td>
                            <td> {opiniao.indicaria} </td>
                            <td> {opiniao.mensagem} </td>
                            <td><button type="submit" className="btn btn-danger" data-toggle="modal" 
                            data-target="#confirmacao">Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
                            <button type="button" className="btn btn-success" onClick={() => deletarOpiniao(opiniao.id)}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Opinioes;