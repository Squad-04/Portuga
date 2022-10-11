import { QuizUIX, Alternatives } from './styled';

import Footer from '../../Footer';
import Navbar from '../../Navbar';

import { useNavigate, useParams } from 'react-router-dom';

import todas from '../questions/todas.json'
import provasEnem from '../questions/provas-enem.json'
import temasDiversos from '../questions/temas-diversos.json'
import concursoPublico from '../questions/concurso-publico.json'
import { useState } from 'react';
import { useEffect } from 'react';


const getQuestions = (type) => {
  if(type === 'todas') {
    return todas
  }
  if(type === 'concurso-publico') {
    return concursoPublico
  }
  if(type === 'provas-enem') {
    return provasEnem
  }
  if(type === 'temas-diversos') {
    return temasDiversos
  }
}


export function Quiz() {

    const { type } = useParams()


    const navigate = useNavigate('');
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [correctScore, setCorrectScore] = useState(0);
    const [wrongScore, setWrongScore] = useState(0);
    const [questions, setQuestions] = useState(getQuestions(type));
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        if(questions[0].number === 10) {
            navigate('/final', { state: { correctScore, wrongScore }})
        }
    }, [correctScore, wrongScore])

    const handleAnswer = () => {

        setCorrectAnswer( questions[0].correct_answer)


        
            if (answer === questions[0].correct_answer) {
                setCorrectScore(correctScore + 1)
            } else {
                setWrongScore(wrongScore + 1)
            }
            if(questions[0].number !== 10){
            const newQuestions = questions.filter((item) => item.number !== questions[0].number)
            setTimeout(() => {
            setQuestions(newQuestions);

            }, 1000)
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
                                <div style={{ display:'flex' }}><input type="radio" name="escolha" value={item} onClick={(e) => setAnswer(e.currentTarget.value)} /><Alternatives><span className={`${correctAnswer === item ? 'correct' : ''}`}>&nbsp;{item}</span></Alternatives></div>
                            </label>
                        ))}
                    </div>

                    <div className="btn-group">
                        <button className="btn btn-success btn" onClick={() => handleAnswer()}>Responder</button>
                    </div>
                </div>
            </main>
            <Footer />
        </QuizUIX>

    )
}