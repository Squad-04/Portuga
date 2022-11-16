import MenuAdm from "../../components/MenuAdm/MenuAdm";
import NavMenu from "../../components/navbar";
import logo from "../../imagens/livro_icone.png"
import lupa from "../../imagens/lupa-icon.png";
import TituloAdm from "../../components/TituloAdm/TituloAdm";
import CadastrosAdm from "../../components/OpcoesAdm/CadastrosAdm";
import CadSimulado from "../../components/OpcoesAdm/CadSimulado";
import Opinioes from "../../components/OpcoesAdm/Opinioes";
import Monioria from "../../components/OpcoesAdm/Moniotria";


function Adm() {
    return (
        <div>
            <NavMenu img={logo} photo={lupa} />
            <TituloAdm adm="ADM Portuga" />
            <div className="div1">
                <MenuAdm />
                <div className="collapse" id="painelAdm">
                    <CadastrosAdm />
                </div>
                <div className="collapse" id="simulado">
                    <CadSimulado/>
                </div>
                <div className="collapse" id="monitoria">
                    <Monioria />
                </div>
                <div className="collapse" id="opinioes">
                    <Opinioes/>
                </div>
            </div>
        </div>
    );
}

export default Adm;