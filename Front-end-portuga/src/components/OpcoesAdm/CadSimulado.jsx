import "./CadSimulado.css";

function CadSimulado() {
    return (
        <div id="cadSimulado">
            <form id="container">
                <h3>Cadastro de Simulado</h3>
                <div className="form-row">
                    <div className="form-group col-5">
                        <label>Tema:</label>
                        <select className="form-control">
                            <option value="selected">Selecione um Tema...</option>
                            <option>Todos</option>
                            <option>Enem</option>
                            <option>Concursos Públicos</option>
                            <option>Temas Diversos</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-5">
                        <label>Questão:</label>
                       <textarea className="form-control"></textarea>
                    </div>
                </div>

                <label>Opções:</label>
                <div className="form-row">
                    <div className="form-group col-4 formulario">
                        <label>a&#41;</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <input type="radio" name="resposta"/>
                        <label className="ml-2">Resposta Correta</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-4 formulario">
                        <label>b&#41;</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <input type="radio" name="resposta"/>
                        <label className="ml-2">Resposta Correta</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-4 formulario">
                        <label>c&#41;</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <input type="radio" name="resposta"/>
                        <label className="ml-2">Resposta Correta</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-4 formulario">
                        <label>d&#41;</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <input type="radio" name="resposta"/>
                        <label className="ml-2">Resposta Correta</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-5">
                        <label>Comentário da Questão:</label>
                        <textarea className="form-control"
                            placeholder="Escreva aqui comentários para ajudar os alunos no entendimento das questões.."
                        ></textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-5">
                        <label>Link de Vídeo ou Artigo sobre o Tema:</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-5">
                        <button className="btn btn-success">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CadSimulado;