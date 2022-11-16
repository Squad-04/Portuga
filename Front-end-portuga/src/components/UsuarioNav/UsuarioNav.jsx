import { Link, useNavigate } from "react-router-dom";
import ModalAtualizar from "../ModalAtualizar/ModalAtualizar";
import ExcluirUsuario from "../ExcluirUsuario/ExcluirUsuario";
import "./UsuarioNav.css";
import UserMonitoria from "../UserMonitoria/UserMonitoria";

function UsuarioNav() {

    const redirect = useNavigate();

    function Sair() {
        redirect("/");
        alert("Você fez Logoff, para retornar faça Login novamente.")
    }

    return (
        <div id="container">
            <nav className="UsuarioNav">
                <div id="navbar">
                    <ul className="list-group">
                        <Link to="/ebook"><li className="list-group-item lista">
                            Ebooks</li></Link>
                        <li className="list-group-item lista" data-toggle="collapse" data-target="#userMonitoria">
                            Monitorias</li>
                        <li className="list-group-item lista" data-toggle="modal"
                        data-target="#modalAtualizar">Atualizar Cadastro</li> 
                        <li className="list-group-item lista" data-toggle="modal"
                            data-target="#excluirUsuario">Excluir Cadastro</li>
                        <li className="list-group-item lista" onClick={Sair}>Sair</li>

                    </ul>
                </div>
            </nav>
            <ModalAtualizar/>
            <ExcluirUsuario/>
            <UserMonitoria/>
        </div>
    );
}

export default UsuarioNav;