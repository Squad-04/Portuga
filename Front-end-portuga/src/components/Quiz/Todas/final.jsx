import Footer from "../../Footer";
import { QuizUIX } from "./styled";

import { Link, useLocation } from "react-router-dom";

export function Final(correctScore, wrongScore) {
    const location = useLocation()
    console.log(correctScore)

    return (
        <div>
            <QuizUIX>
                <main className="container-final">
                    <h1>Obrigado por utilizar o portuga </h1>
                    <h2>Você acertou  perguntas: {location.correctScore} </h2>
                    <h3>Você errou  perguntas: {location.wrongScore}</h3>

                    <div className="btn-group">
                        <Link className="btn btn-success btn" to='/desafio'>Voltar</Link>
                    </div>
                </main>

                <Footer />
            </QuizUIX>
        </div>
    );
}