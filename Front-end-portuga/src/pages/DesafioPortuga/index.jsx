 import NavMenu from '../../components/navbar';
import Footer from '../../components/Footer';

import icone from '../../assets/livro_icone.png';
import lupa from '../../assets/lupa-icon.png'

import './styled.css';

 export function Desafio({photo}){
    return(
        <main>
            <NavMenu photo={lupa} img={icone} />  
            <br/>
            <div className="container">
                <h1 className="titulo"> Desafios Portuga!</h1>
                <h5 className="titulo">Um jeito prático e interativo de estudar por meio de Simulados!</h5>
                <img src={photo} className="mx-auto d-block" width="25%"/>
                <div className="row">
                    <div className="col-sm-8">
                        <h4> 
                            Os simulados são dividos em temas
                            para atender melhor suas necessidades.
                        </h4>
                        <h4>
                            Escolha uma categoria<br/> 
                            e vamos começar!
                        </h4>
                    </div>
                    <div className="col-sm-4">
                        <button type="button" className="btn-secondary btn-lg btn-block" disabled>Categorias</button>
                        <a className="btn btn-success btn-block" href="todas.html" target="_self" role="button">Todas</a>
                        <a className="btn btn-success btn-sm btn-block" href="emconstrucao.html" target="_self" role="button">Notícias</a>
                        <a className="btn btn-success btn-sm btn-block" href="emconstrucao.html" target="_self" role="button">Literatura</a>
                        <a className="btn btn-success btn-sm btn-block" href="emconstrucao.html" target="_self" role="button">Quadrinhos</a>
                        <a className="btn btn-success btn-sm btn-block" href="emconstrucao.html"target="_self" role="button">Propagandas</a>
                        <a className="btn btn-success btn-sm btn-block" href="emconstrucao.html" target="_self" role="button">Provas do Enem</a>
                        <a className="btn btn-success btn-sm btn-block" href="emconstrucao.html" target="_self" role="button">Concursos Públicos</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
 }

