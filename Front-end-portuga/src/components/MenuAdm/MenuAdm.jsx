import { useNavigate } from "react-router-dom";
import "./MenuAdm.css";


function MenuAdm(){

    const redirect = useNavigate();

    function Sair(){
        redirect("/");
        alert("Você fez Logoff, para retornar faça Login novamente.")
    }
    return(
        <div>
            <nav className="AdmNav">
                <div id="navbar">
                    <ul className="list-group horizontal">
                        <li className="list-group-item listaAdm"  data-toggle="collapse" 
                        data-target="#painelAdm" aria-expanded="false">Cadastros</li>
                        
                        <li className="list-group-item listaAdm" data-toggle="collapse" 
                        data-target="#simulado" aria-expanded="false">Simulados</li>
                        
                        <li className="list-group-item listaAdm" data-toggle="collapse" 
                        data-target="#monitoria" aria-expanded="false">Monitorias</li>
                        
                        <li className="list-group-item listaAdm" data-toggle="collapse" 
                        data-target="#opinioes" aria-expanded="false">Avaliações</li>
                        
                        <li className="list-group-item listaAdm" onClick={Sair}>Sair</li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default MenuAdm;