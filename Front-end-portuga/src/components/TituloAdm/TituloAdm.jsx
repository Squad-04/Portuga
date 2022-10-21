

function TituloAdm(props){
    return(
        <div>
            <h2>Central de Controle</h2>
            <h2 id="admLogado">{props.adm}</h2>
           
        </div>
    );
}

export default TituloAdm;