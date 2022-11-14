import axios from "redaxios";
import { useState } from "react";

function AtualizarAdm() {

    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [acesso, setAcesso] = useState("");
    const [senha, setSenha] = useState("");
    const [nivel_acesso, setNivel_Acesso] = useState("");

    const atualizar = async (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/portuga/administrador/${id}`, {
            nome: nome,
            acesso: acesso,
            senha: senha,
            nivel_acesso: nivel_acesso
        }).then((result) => {
            alert("Cadastro Atualizado com Sucesso!.");
        }).catch((erro) => {
            console.log(erro);
        })
    }

    return (

        <div className="modal" tabIndex="-1" id="atualizarAdm">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Atualizar Administrador</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="close">X</button>
                    </div>
                    <div className="modal-body">
                        <form className="model-cadastro">
                            <div className="form-row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>ID:</label>
                                        <input type="number" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Nome Completo:</label>
                                            <input type="text" className="form-control" placeholder="....." value={nome} onChange={(e) => setNome(e.target.value)} />
                                        </div>
                                    </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Acesso</label>
                                    <input type="email" className="form-control" value={acesso} onChange={(e) => setAcesso(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Senha</label>
                                    <input type="password" className="form-control" placeholder="******" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress">Nivel de Acesso</label>
                                    <select className="form-control" value={nivel_acesso} onChange={(e) => setNivel_Acesso(e.target.value)}>
                                        <option value="selected">Selecione...</option>
                                        <option>Alto</option>
                                        <option>Médio</option>
                                        <option>Baixo</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal" data-target="#criarAdm" onClick={atualizar}>Atualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AtualizarAdm;