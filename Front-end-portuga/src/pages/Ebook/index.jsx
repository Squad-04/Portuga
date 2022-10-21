import NavMenu from "../../components/navbar";
import EbookCard from "../../components/EbookCard";

import Virgem from '../../imagens/avirger.jpg'
import Herry from '../../imagens/herry.jpg';
import Estrelas from '../../imagens/aculpaDasEstrelas.jpg';
import Capitao from '../../imagens/capitãesDaAreia.jpg';
import anneFrank from '../../imagens/anneFrank.jpg';
import Mulheres from '../../imagens/MulheresLobos.jpg';

import icone from '../../imagens/livro_icone.png';
import lupa from '../../imagens/lupa-icon.png'

import { EbookUIX } from "./styled";
import MenuSide from "../../components/MenuSide";
import Footer from "../../components/Footer";


export function Ebook() {
    return (
        <main>
            <NavMenu photo={lupa} img={icone} />  
            <EbookUIX>
                <section>
                    <EbookCard photo={Virgem} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={Herry} down="baixar" favorite="Favoritar" />
                    <EbookCard photo={Estrelas} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={Capitao} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={anneFrank} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={Mulheres} down="Baixar" favorite="Favoritar" />
                </section>
                <div className="side">
                    <MenuSide />
                </div>
            </EbookUIX>
            <Footer/>
        </main>
    );
}
