import { QuizUIX } from './styled';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ComentariosQuiz from '../Quiz/QuizComentarios/comentarios'

import { useNavigate } from 'react-router-dom';

import getQuestions from './Quiz.json'
import { useState } from 'react';
import { Final } from './Todas/final';
import QuestaoComentada from './QuestãoComentada/QuestaoComentada';
import Explicações from './QuestãoComentada/QuestaoComentada';


export function Quiz({ title, subtitle, photo }) {

    const navigate = useNavigate('');
    const [showModal, setShowModal] = useState(false);
    const [correctScore, setCorrectScore] = useState(0);
    const [wrongScore, setWrongScore] = useState(0);
    const [questions, setQuestions] = useState(getQuestions);
    const [answer, setAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [visible, setVisible] = useState(false);


    const handleAnswer = () => {


        if (questions[0].number !== 10) {
            if (answer === questions[0].correct_answer) {
                setCorrectScore(correctScore + 1)
                setCorrectAnswer(questions[0].correct_answer);



            } else {
                setWrongScore(wrongScore + 1)
                setCorrectAnswer(questions[0].correct_answer);
            }

            const inputs = document.querySelectorAll('input[type=radio]');
            inputs.forEach(element => element.disabled = true);

            setTimeout(() => {
                const newQuestions = questions.filter((item) => item.number !== questions[0].number)
                setQuestions(newQuestions);
                setCorrectAnswer('');
                const inputs = document.querySelectorAll('input[type=radio]');
                inputs.forEach(element => element.checked = false);
                inputs.forEach(element => element.disabled = false);
            }, 5000)
        }
        else {
            navigate('/final')
        }
    }
    return (
        <QuizUIX>
            <Navbar />
            <main>
                <div className="container">
                    <div className="btn-group">
                        <a className="btn btn-success disabled">DESAFIOS:</a>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (<button type="button" className={`btn ${questions[0].number === item ? 'btn-success' : 'btn-warning'}`}>{item}</button>))}
                    </div>
                    {/* <h3>{title}</h3> */}
                    <img src={questions[0].image} />

                    <span className='questions'>{questions[0].question}</span>
                    <div className="options">
                        {questions[0].answers.map(item => (
                            <label className={`${item === correctAnswer ? 'correct-answer' : ''}`}>
                                <input type="radio" name="escolha" value={item} onClick={(e) => setAnswer(e.currentTarget.value)} />{item}
                            </label>
                        ))}
                    </div>
                    {
                        correctAnswer !== '' && (
                            <div class={`alert alert-${answer === questions[0].correct_answer ? 'success' : 'danger'}`} role="alert">
                                Você {answer === questions[0].correct_answer ? 'acertou!' : 'errou!'} A resposta certa é a alternativa <strong>{questions[0].correct_answer}</strong>
                            </div>
                        )
                    }
                    <div className="btn-group">
                        <button className="btn btn-success btn" onClick={() => handleAnswer()}>Responder</button>
                        <button className="btn btn-success btn" onClick={() => setShowModal(true)}>Comentarios</button>
                        <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#comentario" aria-expanded="false" onClick={() => setVisible(!visible)} >
                            Explicação
                        </button>

                    </div>
                </div>
            </main>
            {visible === true &&
                <Explicações visible={visible} />
            }
            <ComentariosQuiz isOpen={showModal} onClickClose={() => setShowModal(false)} />
            <Footer />
        </QuizUIX>

    )
}