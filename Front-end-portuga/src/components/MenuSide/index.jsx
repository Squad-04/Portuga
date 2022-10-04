import { MenuSideUIX } from "./styled";


function MenuSide() {
    return (
        <MenuSideUIX>
                <section className="menu">
                    <div className="opcao-download">
                        <p>Adicione seu Ebook favorito!
                            Compartilher seus livros e quadrinhos</p>
                        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modalExemplo"> Adicionar</button>
                        <div className="modal" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Adicionar Ebook</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-title">
                                        <label for="formFileMultiple" className="form-label">Adicione o arquivo com o ebook desejado</label>
                                        <input className="form-control" type="file" id="formFileMultiple" multiple />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">Pronto</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <>
                    <nav className="col-2-sm-1  menuNav">
                        <label for="exampleDataList" className="form-label">Escolha o tema desejado para sua leitura</label>
                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Temas de Ebook" />
                        <datalist id="datalistOptions">
                            <option value="Romance" />
                            <option value="Terror" />
                            <option value="Auto-ajuda" />
                            <option value="Espionagem" />
                            <option value="Comedia" />
                        </datalist>
                        <button id="btn" type="button" className="btn btn-success" data-dismiss="modal">Pesquisar</button>
                    </nav>
                </>
                <iframe src="https://www.youtube.com/embed/RU-h2SLnF3Q" title="Leitura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="Video"></iframe>

        </MenuSideUIX>

    );
}
export default MenuSide;