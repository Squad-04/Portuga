import { QuizUIX } from './styled';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ComentariosQuiz from '../Quiz/QuizComentarios/comentarios'
//import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import getQuestions from './Quiz.json'
import quiz from '../../imagens/quiz1.png';
import { useState } from 'react';


export function Quiz({ title, subtitle, photo }) {

    const navigate = useNavigate('');
    const [showModal, setShowModal] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [questions, setQuestions] = useState(getQuestions);
    const [answer, setAnswer] = useState("");

    const handleAnswer = () => {

        if (questions[0].number !== 10) {
            if (answer === questions[0].correct_answer) {
                setCorrectAnswer(correctAnswer + 1)
                alert("Você acertou!")
            } else {
                setWrongAnswer(wrongAnswer + 1)
                alert("Você errou!")
            }
            const newQuestions = questions.filter((item) => item.number !== questions[0].number)
            setQuestions(newQuestions);
        }
        else {
            alert(`Respostas corretas: ${correctAnswer}, respostas erradas: ${wrongAnswer}`)
            navigate('/desafio')
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
                            <label>
                                <input type="radio" name="escolha" value={item} onClick={(e) => setAnswer(e.currentTarget.value)} />{item}
                            </label>
                        ))}
                    </div>

                    <div className="btn-group">
                        <button className="btn btn-success btn" onClick={() => handleAnswer()}>Responder</button>
                        <button className="btn btn-success btn" onClick={() => setShowModal(true)}>comentarios</button>
                    </div>
                </div>
            </main>
            <ComentariosQuiz isOpen={showModal} onClickClose={() => setShowModal(false)} />
            <Footer />
        </QuizUIX>

    )
}