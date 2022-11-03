import NavMenu from "../../components/navbar";
import Pontuacao from "../../components/Pontuacao/Pontuacao";
import UsuarioNav from "../../components/UsuarioNav/UsuarioNav";
import logo from "../../imagens/livro_icone.png"
import lupa from "../../imagens/lupa-icon.png";


export function Usuario() {

    return (
        <main>
            <NavMenu img={logo} photo={lupa} />
            <Pontuacao nome="Estudante" pontos="0" nivel="Iniciante"/>
            <UsuarioNav />
            
        </main>
    );
}