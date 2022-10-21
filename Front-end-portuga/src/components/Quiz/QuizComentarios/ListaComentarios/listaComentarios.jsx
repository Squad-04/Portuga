import React, { useState } from "react"
import './ListaComentarios.css';

function getTree(list){
    if(!list){
        return [];
    }
    const roots = [];
    const childrenByParentId = {};

        list.forEach((item) => {
         if(!item.parentId){
            roots.push(item);
            return ;
        }      

        if (!childrenByParentId[item.parentId]) {
          childrenByParentId[item.parentId] = [];
        }

        childrenByParentId[item.parentId].push(item);
    });

    console.log({ roots, childrenByParentId })
}


const ListaComentarios = ({ comments, sendComment }) => {
    getTree(comments);
    const [ comment, setComment ] = useState();
    const [ activeCommentBox, setActiveCommentBox ] = useState(null);
    if (!comments) {
        return <div>carregando...</div>;
    }

    return (
        <ul className="ListaComentarios">
            {comments.map((item) => (
                <li className="avatar-item">
                    <img src={item.user.avatarUrl} alt={`foto de ${item.user.name}`} className='avatar-img' />
                    <div className="avatar-info">
                        <span className="avatar-name">{item.user.nome}</span>
                        <p>{item.comment} </p>
                        <button type="button"
                        onClick={() =>{
                             setComment('');
                            setActiveCommentBox(activeCommentBox === item.id ? null : item.id)
                            }}
                         className="Response">Responder
                         </button>
                        {activeCommentBox === item.id && (
                        <div className="Response-text">
                            <textarea value={comment} onChange={(ev) => setComment(ev.target.value)}
                            />
                            <button type="button" className="Response-text-button" 
                            onClick={() => {
                                sendComment(comment, item.id);
                                setComment('');
                                setActiveCommentBox(null);
                            } }
                            >Enviar</button>
                        </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

ListaComentarios.defaultProps = {
    sendComment: () => {}
}

export default ListaComentarios;