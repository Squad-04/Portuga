
import axios from 'redaxios';
import { useParams } from "react-router-dom";
import { useState } from "react";


function ModalAtualizar() {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumero] = useState('');
    const [emailValidar, setEmailValidar] = useState('');

    const atualizar = async (e) => {
        e.preventDefault();;
        axios.put(`http://localhost:8080/portuga/usuario/email/${emailValidar}`, {
            nome: nome,
            email: email,
            senha: senha,
            endereco: endereco,
            cidade: cidade,
            estado: estado,
            numero: numero
        }).then((result) => {
            alert("Cadastro Atualizado!");
        }).catch((erro) => {
            console.log(erro);
        })
    }



    return (
        <div>
            <div className="modal fade" tabIndex="-1" role="dialog" id="modalAtualizar" aria-labelledby="modalAtualizar"
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fonte">Atualização de Cadastro</h5>
                            <button type="button" data-dismiss="modal" aria-label="Close">&#88;</button>
                        </div>
                        <div className="modal-body">
                            <form className="model-cadastro">
                            <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputNome">Informe o Email atual:</label>
                                            <input type="email" className="form-control" placeholder="....." value={emailValidar} onChange={(e) => setEmailValidar(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputNome">Nome</label>
                                            <input type="text" className="form-control" placeholder="....." value={nome} onChange={(e) => setNome(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <div className="form-text">
                                            Se preencher esse campo esse será seu novo login!
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Senha</label>
                                        <input type="password" className="form-control" placeholder="******" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Endereço</label>
                                    <input type="text" className="form-control" id="inputAddress" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">Cidade</label>
                                        <input type="text" className="form-control" id="inputCity" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">Estado</label>
                                        <select id="inputState" className="form-control" value={estado} onChange={(e) => setEstado(e.target.value)} >
                                            <option value="selected">Selecione</option>
                                            <option>AC</option>
                                            <option>AL</option>
                                            <option>AP</option>
                                            <option>AM</option>
                                            <option>BA</option>
                                            <option>CE</option>
                                            <option>DF</option>
                                            <option>ES</option>
                                            <option>GO</option>
                                            <option>MA</option>
                                            <option>MT</option>
                                            <option>MS</option>
                                            <option>MG</option>
                                            <option>PA</option>
                                            <option>PB</option>
                                            <option>PR</option>
                                            <option>PE</option>
                                            <option>PI</option>
                                            <option>RJ</option>
                                            <option>RN</option>
                                            <option>RS</option>
                                            <option>RO</option>
                                            <option>RR</option>
                                            <option>SC</option>
                                            <option>SP</option>
                                            <option>SE</option>
                                            <option>TO</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-2">
                                        <label htmlFor="inputState">Numero</label>
                                        <input type="number" className="form-control" id="inputZip" value={numero} onChange={(e) => setNumero(e.target.value)} />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-success col-6" id="botao-login" onClick={atualizar} data-dismiss="modal">Confirmar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalAtualizar;