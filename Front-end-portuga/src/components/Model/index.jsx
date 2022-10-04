function Model() {
    return (
        <main>
            <div class="container container-fluid border border-success mt-5" id="box_form">

                <h2>Está Gostando? Nos dê sua opinião!</h2>

                <p>Sua opinião é muito importante para melhorar o conteúdo da nossa Plataforma!
                    Responda um questionário rápido nos contando sua experiência. Não é necessário cadastro.
                </p>

                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#formulario">Responder</button>
            </div>

            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" id="formulario">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Formulário de Satisfação Portuga</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Nome</label>
                                        <input type="text" class="form-control" />
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label>Sobrenome</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>E-mail</label>
                                        <input type="email" class="form-control" />
                                    </div>

                                    <div class="form-group col-md-3">
                                        <label>Idade</label>
                                        <input type="number" class="form-control" />
                                    </div>
                                </div>


                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label>Sexo</label>
                                        <select class="form-control">
                                            <option class="selected">Selecione...</option>
                                            <option>Feminino</option>
                                            <option>Masculino</option>
                                            <option>Outro</option>
                                            <option>Não desejo Informar</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label>Como você avalia o conteúdo da nossa plataforma?</label>
                                        <select class="form-control">
                                            <option class="selected">Selecione...</option>
                                            <option>Ruim</option>
                                            <option>Bom</option>
                                            <option>Excelente</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>O que você achou dos <strong>Desafios Protuga</strong>?</label>
                                        <select class="form-control">
                                            <option class="selected">Selecione...</option>
                                            <option>Ruim</option>
                                            <option>Bom</option>
                                            <option>Excelente</option>
                                        </select>
                                    </div>
                                </div>


                                <label>Indicaria a Plataforma para outras pessoas?</label>
                                <input type="radio" value="Sim" name="indicação" />
                                <label>Sim</label>
                                <input type="radio" value="Não" name="indicação" />
                                <label>Não</label>

                                <label>Ao navegar por este espaço você se interessou a ler mais?</label>
                                <input type="radio" value="Sim" name="satisfação" />
                                <label>Sim</label>
                                <input type="radio" value="Não" name="satisfação" />
                                <label>Não</label>
                                <label>Nos conte abaixo mais sobre a sua experiência e
                                    dê sugestões do que gostaria de encontrar:</label>
                                <textarea class="form-control" placeholder="Digite Aqui.."></textarea>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-dismiss="modal">Fechar</button>
                            <button type="submit" class="btn btn-success">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};
export default Model;