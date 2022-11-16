import { Link, useNavigate } from 'react-router-dom';
//import { UserService } from '../../service/user';
import { LoginUIX } from './styled';
import { useState } from 'react';
//import UserContext from '../../context/userInfo';
import axios from 'redaxios';
//import api from '../../service/user';



export function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumero] = useState(''); 
    

    const cadastar = async (e) => {
        e.preventDefault();
        await axios
        .post("http://localhost:8080/portuga/usuario", {
            nome: nome,
            email: email,
            senha: senha,
            endereco: endereco,
            cidade: cidade,
            estado: estado,
            numero: numero
        }).then((result) => {
            alert("Usuário Cadastrado!");
            navigate("/");
        }).catch((erro) => {
            console.log(erro);
        })
    }
    
    const logar = async () =>{
        const get = await axios
        .post("http://localhost:8080/portuga/usuario/autenticar", {
            email: email,
            senha: senha
        }).then(() =>{
          navigate("/usuario")
            }
        ).catch((erro) => {
            console.log(erro)
            alert("Senha ou Email incorretos.")
        })
    }


    function navegar(){
        navigate("/loginAdm");
    }

    return (
        <LoginUIX>
            <main>
                <div className="container-fluid">
                    <section className="cadastro">
                        <h1>Login</h1>
                        <div>
                            <form className='menuLog'>
                                <div>
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="inputPassword">Senha</label>
                                        <input type="password" className="form-control" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}
                                        />
                                    </div>
                                    <div className="check">
                                        <input className="form-check input" type="checkbox" />
                                        <label className="form-check-label" htmlFor="inlineFormCheck">Lembrar de
                                            mim</label>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn-success btn-lg" onClick={logar}> Login
                                        </button>
                                    </div>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                            <path
                                                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </span>
                                    <div className="primeiro" /*nimation={false} show={show} onHide={handleClose*/ >
                                        <p>Primeiro acesso? Cadastre-se <a className="clicandoAqui" href="#"
                                            data-toggle="modal" data-target=".bd-example-modal-lg"   >clicando
                                            aqui</a></p>
                                        <Link to="/" className='link'>Página Inicial</Link>
                                    
                                
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                <span>
                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">

                                <form className="model-cadastro">
                                    <h3 className="cadastre-se">Cadastre-se Grátis</h3>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="inputNome">Nome</label>
                                                <input type="text" className="form-control" placeholder="....." value={nome} onChange={(e) => setNome(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Senha</label>
                                            <input type="password" className="form-control" placeholder="******" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Endereço s</label>
                                        <input type="text" className="form-control" id="inputAddress" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">Cidade</label>
                                            <input type="text" className="form-control" id="inputCity" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">Estado</label>
                                            <select className="form-control" value={estado} onChange={(e) => setEstado(e.target.value)}>
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
                                    
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-input" type="checkbox" id="confirme" /> aceita os termos
                                        </div>
                                        <div className="form-check">
                                            <input className="form-input" type="checkbox" id="confirme" /> Desejo ser um doador
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success col-6" id="botao-login" onClick={cadastar}>Confirmar Cadastro</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </span>
            </main >
            <button type='button' className='btn btn-outline-success' id="botaoAdm" onClick={navegar}>ADM</button>
        </LoginUIX >
    );
}
