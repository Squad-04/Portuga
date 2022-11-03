import React from "react";
import './comentarios.css';

const Comentarios = ({ children, isOpen, onClickClose }) => {
    console.log(onClickClose)
    if (!isOpen) {
        return null;

    }

    return (
        <div className="ui-modal-fundo">
            <div className="ui-modal">
                <button className="ui-modal-fecha-button" type="button" onClick={(onClickClose)}>x</button>
                {children}
            </div>
        </div>
    )
}
export default Comentarios;