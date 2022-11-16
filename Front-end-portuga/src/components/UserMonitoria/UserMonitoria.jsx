import axios from "redaxios";
import { useEffect } from "react";
import { useState } from "react";
import "./UserMonitoria.css";
import { useParams } from "react-router-dom";

export default function UserMonitoria() {

    const [monitorias, setMonitorias] = useState([]);

    useEffect(() => {
        carregarMonitorias();
    }, [])

    const carregarMonitorias = async () => {
        try {
            axios.get(`http://localhost:8080/portuga/monitoria/usuario/${usuario}`)
                .then((response) => {
                    setMonitorias(response.data);
                });
        } catch (erro) {
            console.log(erro);
        }
    }

    return (
        <div id="userMonitoria" className="collapse">
            <h3>Suas Solicitações</h3>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Solicitação de Monitoria</h5>
                    <h5 className="card-title">Status: Aberta</h5>
                    <p className="card-text">Pergunta: Não entndi a Pergunta 2 do questionário do Enem</p>
                    <p className="card-text">Resposta do Monitor: ...</p>
                </div>
            </div>

            
        </div>
    );
}