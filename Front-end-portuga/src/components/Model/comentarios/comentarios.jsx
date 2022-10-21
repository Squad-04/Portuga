import React from "react";
import './comentarios.css';

const  Comentarios = ({children, isOpen, onClose}) => {
    if(!isOpen){
        return null;
    }
    return(
        <div className="ui-modal-fundo">
            <div className="ui-modal">
                <button className="ui-modal-fecha-button" type="button" onClick={onClose}>x</button>
                {children}
            </div>
        </div>
    )
}
export default Comentarios;