import axios from "redaxios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CriarAdm() {

    const navigate = useNavigate();
    const[nome, setNome] = useState("");
    const[acesso, setAcesso] = useState("");
    const[senha, setSenha] = useState("");
    const[nivel_acesso, setNivel_Acesso] = useState("");

    const cadastrar = async (e) => {
        e.preventDefault();
        await axios
        .post("http://localhost:8080/portuga/administrador", {
            nome: nome,
            acesso: acesso,
            senha: senha,
            nivel_acesso: nivel_acesso,
        }).then((result) => {
            alert("Administrador Criado com Sucesso");
            navigate("/admpage");
        }).catch((erro) => {
            console.log(erro);
        })
    };

    return (
        <div className="modal" tabIndex="-1" id="criarAdm">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Criar Administrador</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div className="modal-body">
                        <form className="model-cadastro">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Nome Completo</label>
                                        <input type="text" className="form-control" placeholder="....." value={nome} onChange={(e) => setNome(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Acesso</label>
                                    <input type="email" className="form-control" value={acesso} onChange={(e) => setAcesso(e.target.value)}/>
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
                    <button type="button" className="btn btn-success" data-dismiss="modal" data-target="#criarAdm" onClick={cadastrar}>Criar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CriarAdm;