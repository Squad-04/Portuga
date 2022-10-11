import Footer from "../../Footer";
import { QuizUIX } from "./styled"; 

import { Link, useLocation } from "react-router-dom";
export function Final(){
    const location = useLocation()
    console.log(location)

    return( 
        <div>
            <QuizUIX> 
            <main className="container-final">        
            <h1>Obrigado por utilizar o portuga </h1>      
                <h2>Você acertou  perguntas: { location.state.correctScore } </h2>
                <h3>Você errou  perguntas: { location.state.wrongScore }</h3>

                <div className="btn-group">
                        <Link className="btn btn-success btn" to='/'>Voltar</Link>
                    </div>
            </main>

            <Footer />
            </QuizUIX>
        </div>
    );
}