import SectionCard from "../../components/SectionCard";
import NavMenu from "../../components/navbar";

import icone from '../../imagens/livro_icone.png';
import lupa from '../../imagens/Lupa.jpg';
import lupa2 from '../../imagens/lupa-icon.png';
import jaqueline from '../../imagens/Jaqueline Lessa.png';
import monitor from '../../imagens/monitor.jpg';

import sandro from '../../imagens/Sandro-Souza.png';
import wesley from '../../imagens/Wesley-Berto.png';
import lucas from '../../imagens/Lucas-Riberio.png';
import livro from '../../imagens/Livro_Home.jpg'
import home from '../../imagens/home.jpg'

import JaqueQR from '../../imagens/Jaqueline_Lin.png';
import SandroQR from '../../imagens/Sandro_Lin.png';
import WesleyQR from '../../imagens/Wesley_Lin.png';
import LucasQR from '../../imagens/Lucas_Lin.png';

import CardUs from "../../components/CardUs";

import './styled.css';
import Model from '../../components/Model';
import Footer from '../../components/Footer'
import { ModelUi } from '../../components/Model/styled';
import { FooterUix } from "../../components/Footer/styled";
import { HomeCard } from "../../components/HomeCard";
import { Link } from "react-router-dom";


export function Home() {
    return (
        <main>
            <NavMenu photo={lupa2} img={icone} />
            <div className="container-fluid">

                <section>
                    <h1>Bem Vindo ao Portuga!</h1>
                    <h2>Entre e descubra o poder da leitura. Temos muitos conteúdos para te ajudar nessa jornada.</h2>
                </section>

                <HomeCard photo={home} />
            </div>

            <hr />

            <div className="container">
                <h3>Você sabe o que é Baixa proficiênica em Leitura?</h3>
                <p>
                    É quando o aluno não consegue de identificar a ideia principal de um texto mediano, fazer interpretações ou inferências simples ou mesmo comparar alegações a partir de frases simples e explícitas. Isto está presente em muitos estudantes brasileiros.
                    Por isso existe o <strong>Portuga!</strong> Uma maneira simples de praticar sua proficiência e avaliar seu desempenho!
                </p>
            </div>

            <div className="cardMenu">
                <Link to="/desafio"><SectionCard title="Desafios Portuga!" photo={lupa}/></Link>
                <Link to="/ebook"><SectionCard title="Ebooks!" photo={livro}/></Link>
                <Link to="/loginadm"><SectionCard title="Seja um Adm!" photo={monitor}/></Link>

            </div>

            <hr />

            <h2 className="ml-5 mt-5 box-sob">Quem somos</h2>

            <br></br>

            <div className="containerCards">

                <CardUs photo={jaqueline} info="Jaqueline Lessa" title="Jaqueline Lessa" job="Back-End" subtitle="Desenvolvedora Júnior Fullstack, 23 anos, de Salvador-BA, atualmente realizando projetos independentes e estudando programação. Visando me tornar uma Desenvolvedora Sênior estou sempre buscando novas linguagens, tecnologias, boas práticas de programação e colocando em prática tudo que aprendo de formas diversas." QR={JaqueQR}/>

                <CardUs photo={sandro} info="Sandro Souza" title="Sandro Souza" job="Back-End" subtitle="Sandro Souza, 36 anos, natural de Salvador - Ba, formado em Desenvolvedor Full Stack pela Recode Pro. Tenho passagem também no campo das artes cênicas como diretor, produtor e dramaturgo. Na área de programação me interesso por desenvolvimento de projetos e soluções tecnológicas Mobile."  QR={SandroQR}/>


                <CardUs photo={wesley} info="Wesley Berto" title="Wesley Berto" job="Front-End" subtitle="Sou dedicado e esforçado que adora estudar e aprender diversos assuntos, recém-formado em Desenvolvimento Full Stack para atuar como dev Front-End com a idade 23 anos, morando na cidade SP e cursando a graduação de ADS na universidade 9 de Julho, realizando projetos independentes no intuito de evoluir os conhecimentos e sempre buscar novas oportunidades para usar as suas habilidades e criatividade." QR={WesleyQR} />

                <CardUs photo={lucas} info="Lucas Ribeiro" title="Lucas Ribeiro" job="Front-End" subtitle="Amo filmes, séries e podcast e a cada dia amo aprender mais e mais da área de programação e sempre na primeira oportunidade que tenho faço algum curso para me aprimorar cada vez mais. Tenho 22 anos, moro no Rj , formado na Recode e cursando Full Stack no Senai-Sp, sou dedicado, focado e espero desenvolver mais habilidades na área de Full Stack em diversas tecnologias e linguagens futuramente." QR={LucasQR}/>
            </div>
            <ModelUi>
                <Model />
            </ModelUi>


            <FooterUix>
                <Footer />
            </FooterUix>
        </main >


    );
}
