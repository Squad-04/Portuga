import SectionCard from "../../components/SectionCard";
import NavMenu from "../../components/navbar";

import icone from '../../assets/livro_icone.png';
import lupa from '../../assets/lupa-icon.png'
import binoculo from '../../assets/binoculo-icon.png';
import notbook from '../../assets/notebook-icon.png';
import livro from '../../assets/livro2-icon.png'

import CardUs from "../../components/CardUs";

import './styled.css';
import Model from '../../components/Model';
import Footer from '../../components/Footer'
import { ModelUi } from '../../components/Model/styled';
import { FooterUix } from "../../components/Footer/styled";

export function Home() {
    return (
        <main>
            <NavMenu photo={lupa} img={icone} />            
            <div className="jumbotron mt-2 border-bottom border-success">
                <h1>Bem Vindo!</h1>
                <h3>Entre e descubra o poder da leitura. Temos muitos conteúdos para te ajudar nessa jornada.</h3>
            </div>
            <div>
                <h2 className="ml-5">Conheça a Plataforma!</h2>
                <br></br>
            </div>
            <section>
                <SectionCard title="Se Prepare Jogando!" subtitle="Conheça o Portuga! Nosso game interativo onde você pode responder perguntas comentadas
                    sobre assuntos diversos, concursos e vestibulares.">
                </SectionCard>

                <SectionCard title="Encontre novas Histórias!" subtitle="Temos uma variedade de Ebooks que podem ser baixados gratuitamente!
                    Passeie pelas nossas categorias.">
                </SectionCard>

                <SectionCard title="Faça parte da Comunidade Solidária" subtitle="Temos uma variedade de Ebooks que podem ser baixados gratuitamente!
                    Passeie pelas nossas categorias.">
                </SectionCard>

            </section>
            <div>
                <h2 className="ml-5 mt-5 box-sob">Sobre Nós</h2>
                <br></br>
                <div className="containerCards">
                    <CardUs photo={notbook} info="Imagem de um notebook e livros" title="Missão" subtitle="É combinando talento com dados, tecnologia e criatividade que cumprimos com a nossa missão de ajudar nossos clientes a ganharem um papel com real significado na vida das pessoas, levando assim a um aumento nos resultados da educação em nosso País." />
                    <CardUs photo={binoculo} info="Imagem de um binóculo" title="Visão" subtitle="Estamos empenhados em fortalecer, contribuir e engajar continuamente; usando a tecnologia com acesso a todos que necessitam e utilizam deste meio de comunicação para seu desenvolvimento pessoal e profissional." />
                    <CardUs photo={livro} info="Imagem de um livro" title="Valores" subtitle="Grupo inovador que proporciona modernidade, atendendo assim a necessidade do público. Unindo e levando a tecnologia como acesso a educação, com direito e deveres de todos os que necessitam de acesso a educação com qualidade e igualdade." />
                </div>
                <ModelUi>
                    <Model />
                </ModelUi>

                <FooterUix>
                <Footer/>
                </FooterUix>
            </div>
        </main>


    );
}
