import NavMenu from "../../components/navbar";
import UsuarioNav from "../../components/UsuarioNav/UsuarioNav";
import logo from "../../imagens/livro_icone.png";
import lupa from "../../imagens/lupa-icon.png";
import './styled.css'
export function Usuario() {

    return (
        <>          
           <NavMenu img={logo} photo={lupa} />
            <div className="teste">
            <h2>Página do Usuário</h2>
            <UsuarioNav />
        </div>
        </>
 
    );
}