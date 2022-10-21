import ModalAtualizar from "../ModalAtualizar/ModalAtualizar";
import "./UsuarioNav.css";

function UsuarioNav() {
    return (
        <div>
            <nav className="UsuarioNav">
                <div id="navbar">
                    <ul className="list-group">
                        <li className="list-group-item lista" data-toggle="collapse" 
                        data-target="#collapseExample" aria-expanded="false" >
                            Ebooks Favoritos</li>
                        <li className="list-group-item lista">Monitorias</li>
                        <li className="list-group-item lista">Doações</li>
                        <li className="list-group-item lista" data-toggle="modal"
                        data-target="#modalAtualizar">Atualizar Cadastro</li>
                        <li className="list-group-item lista">Excluir Cadastro</li>
                        <li className="list-group-item lista">Sair</li>
                    
                    </ul>
                </div>

            </nav>
            <ModalAtualizar/>
        </div>
    );
}

export default UsuarioNav;