 import NavMenu from '../../components/navbar';
import Footer from '../../components/Footer';

import icone from '../../assets/livro_icone.png';
import lupa from '../../assets/lupa-icon.png'

import './styled.css';
import { Link } from 'react-router-dom';


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
                        <Link className="btn btn-success btn-sm btn-block" to="/quiz/todas" target="_self" role="button">Todas</Link>
                        <Link className="btn btn-success btn-sm btn-block" to="/quiz/provas-enem" role="button" >Provas do Enem</Link>
                        <Link className="btn btn-success btn-sm btn-block"  to="/quiz/concurso-publico" target="_self" role="button">Concursos Públicos</Link>
                        <Link className="btn btn-success btn-sm btn-block"  to="/quiz/temas-diversos" role="button">Temas Diversos</Link>

                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
 }

