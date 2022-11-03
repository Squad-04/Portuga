import "./Pontuacao.css";


function Pontuacao(props){
    return(
        <div id="divPontuacao">
            <h2>{props.nome}</h2>
            <h3>Pontuação: {props.pontos}</h3>
            <h3>Nível: {props.nivel}</h3>
        </div>
    );
}

export default Pontuacao;