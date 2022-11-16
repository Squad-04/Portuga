import { Link } from 'react-router-dom';
import { LoginUIX } from './styled';
import logo from '../../imagens/livro_icone.png';
import "./LoginAdm.css"



export function LoginAdm() {

    return (
        <div>
            <LoginUIX>
                <main>
                    <div className="container-fluid">
                        <section className="cadastro">
                            <h1>
                                <img src={logo} width="50px" />
                                Portuga ADM</h1>
                            <div>
                                <form className='menuLog'>
                                    <div>
                                        <label htmlFor="inputEmail">Acesso</label>
                                        <input type="email" className="form-control" placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="inputPassword">Senha</label>
                                            <input type="password" className="form-control" placeholder='******'
                                            />
                                        </div>
                                        <div className="check">
                                            <input className="form-check input" type="checkbox" />
                                            <label className="form-check-label" htmlFor="inlineFormCheck">Lembrar de
                                                mim</label>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn-success btn-lg"> Login
                                            </button>
                                        </div>
                                        <div className="primeiro" >
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
                                                    <input type="text" className="form-control" placeholder="....." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Senha</label>
                                                <input type="password" className="form-control" placeholder="******" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress">Endereço</label>
                                            <input type="text" className="form-control" id="inputAddress" />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputCity">Cidade</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="inputState">Estado</label>
                                                <select id="inputState" className="form-control">
                                                    <option value="selected">Selecione</option>
                                                    <option>AC</option>
                                                    <option>AL</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-2">
                                                <label htmlFor="inputState">Numero</label>
                                                <input type="number" className="form-control" id="inputZip" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </span>
                </main >
            </LoginUIX >
            <div id="aviso">
                    <h3 id="texto">Quer ser um Portuga ADM e ajudar a nossa plataforma? Entre em contato com a nossa equipe!<br />
                        Mande a sua solicitação para o email: squad004@gmail.com.</h3>
                </div>
        </div>
    );
}
