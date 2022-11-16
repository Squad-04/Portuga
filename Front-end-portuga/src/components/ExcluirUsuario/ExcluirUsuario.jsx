import "./ExcluirConta.css";
import axios from "redaxios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ExcluirUsuario() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const deletarConta = async () => {
        try{
            await axios.delete(`http://localhost:8080/portuga/usuario/deletar/${email}`)
            .then((response) => {
                alert("Conta Excluída, Obrigado por usar o Portuga!");
                navigate("/");
            })
        } catch(erro){
            console.log(erro);
            alert("Email incorreto!");
        }
    }


    return (
        <div>

            <div className="modal fade" id="excluirUsuario" tabindex="-1" role="dialog" aria-labelledby="excluirUsuario" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Excluir Conta</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p id="alerta">Atenção! Essa ação é irreversível, caso queira retornar ao <strong>Portuga</strong>, 
                            você terá que fazer uma nova conta!</p>
                            <p>Caso queira continuar, confirme abaixo o email da conta cadastrada:</p>
                            <form>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={deletarConta} data-dismiss="modal">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExcluirUsuario;