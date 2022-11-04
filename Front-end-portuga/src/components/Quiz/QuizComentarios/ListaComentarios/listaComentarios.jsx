import React, { useState, useMemo } from "react"
import './ListaComentarios.css';

function getTree(list) {
    if (!list) {
        return [];
    }
    const roots = [];
    const childrenByParentId = {};

    list.forEach((item) => {
        if (!item.parentId) {
            roots.push(item);
            return;
        }

        if (!childrenByParentId[item.parentId]) {
            childrenByParentId[item.parentId] = [];
        }

        childrenByParentId[item.parentId].push(item);
    });

    function buildNodes(nodes) {
        if (!nodes) {
            return null;
        }
        return nodes.map((node) => ({
            ...node,
            children: buildNodes(childrenByParentId[node.id]),
        }))
    }

    return buildNodes(roots)
}


const ListaComentarios = ({ comments, sendComment }) => {
    const tree = useMemo(() => getTree(comments), [comments]);
    const [comment, setComment] = useState();
    const [activeCommentBox, setActiveCommentBox] = useState(null);
    if (!comments) {
        return <div>carregando...</div>;
    }

    function renderItem(item) {
        return (
            <li className="avatar-item">
                <img src={item.user.avatarUrl} alt={`foto de ${item.user.name}`} className='avatar-img' />
                <div className="avatar-info">
                    <span className="avatar-name">
                        {item.user.nome}
                    </span>
                    <p>{item.comment} </p>
                    <button type="button"
                        onClick={() => {
                            setComment('');
                            setActiveCommentBox(
                                activeCommentBox === item.id ? null : item.id);
                        }}
                        className="Response">Responder
                    </button>

                    {activeCommentBox === item.id && (
                        <div className="Response-text">
                            <textarea value={comment}
                                onChange={(ev) => setComment(ev.target.value)}
                            />
                            <button
                                type="button" className="Response-text-button"
                                onClick={() => {
                                    sendComment(comment, item.id);
                                    setComment('');
                                    setActiveCommentBox(null);
                                }}
                            >Enviar</button>
                        </div>
                    )}
                        {item.children && renderList(item.children)}
                </div>
            </li>
        );
    }

    function renderList(list) {
        return (
            <ul className="ListaComentarios">
                {list.map(renderItem)}
            </ul>
        )
    }


    return renderList(tree);
}

ListaComentarios.defaultProps = {
    sendComment: () => { }
}

export default ListaComentarios;