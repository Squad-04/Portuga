import { QuizUIX } from './styled';
import img from '../../assets/apresentação1.png';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';


export function Quiz() {
    return (
        <QuizUIX>
         <Navbar />
            <main>
                <div className="container">
                    <div className="btn-group">
                        <a className="btn btn-success disabled">DESAFIOS:</a>
                        <button type="button" className="btn btn-warning">1º</button>
                        <button type="button" className="btn btn-success">2º</button>
                        <button type="button" className="btn btn-success">3º</button>
                        <button type="button" className="btn btn-success">4º</button>
                        <button type="button" className="btn btn-success">5º</button>
                    </div>
                    <h3>1º Desafio</h3>
                    <h4>Questão 1/10:</h4>
                    <img src={img} />

                    <p>Pela análise do conteúdo, constata-se que essa campanha publicitária tem como função social:</p>
                    <div className="options">
                        <label>
                            <input type="radio" name="escolha" />(a) propagar a imagem positiva do Ministério Público.
                        </label>

                        <label>
                            <input type="radio" name="escolha" />(b) conscientizar a população que direitos implicam deveres.
                        </label>
                        <label>
                            <input type="radio" name="escolha" />(c) coibir violações de direitos humanos nos meios de comunicação.
                        </label>
                        <label>
                            <input type="radio" name="escolha" />(d) divulgar políticas sociais que combatem a intolerância preconceito.
                        </label>
                        <label>
                            <input type="radio" name="escolha" />(e) instruir as pessoas sobre a forma correta de expressão nas redes sociais
                        </label>
                    </div>
                    <div className="btn-group">
                        <a className="btn btn-success btnpe" href="portuga.html">voltar</a>
                        <a className="btn btn-success btnpe" href="resposta_todas.html">Responder</a>
                        <a className="btn btn-success btnpe" href="todas2.html">Questão 2/10</a>
                    </div>
                </div>
             </main>   
            <Footer />
        </QuizUIX>

    )
}