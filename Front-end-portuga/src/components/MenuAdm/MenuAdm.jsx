import NavMenu from "../navbar";
import "./MenuAdm.css";


function MenuAdm(){
    return(
        <div>
            <nav className="AdmNav">
                <div id="navbar">
                    <ul className="list-group horizontal">
                        <li className="list-group-item listaAdm" data-toggle="collapse" 
                        data-target="#painelAdm" aria-expanded="false">Cadastros</li>
                        <li className="list-group-item listaAdm" data-toggle="collapse" 
                        data-target="#simulado" aria-expanded="false">Simulados</li>
                        <li className="list-group-item listaAdm">Doações</li>
                        <li className="list-group-item listaAdm">Monitorias</li>
                        <li className="list-group-item listaAdm" data-toggle="collapse" 
                        data-target="#opinioes" aria-expanded="false">Avaliações</li>
                        <li className="list-group-item listaAdm">Sair</li>
                    
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default MenuAdm;