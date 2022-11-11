import React, { useEffect, useState } from "react";
import ListaComentarios from "./ListaComentarios/listaComentarios";
import useApi from '../../Quiz/QuizComentarios/ApiComentarios/useApi'
import './styles.css';

const ComentariosQuiz = ({ comments, isOpen, onClickClose }) => {
    const [newComment, setNewComment] = useState('');
    const [load, loadInfo] = useApi({
        url: '/CommentList',
        params: {
            comments,
            _expand: 'user',
        },
    });

    const [sendComment, sendCommentInfo] = useApi({
        url: '/CommentList',
        method: 'POST',
    });
    useEffect(() => {
        load();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function onSubmit(ev) {
        ev.preventDefault();
        try {
            await sendComment({
                data: {
                    userId: 1,
                    comments,
                    comment: newComment
                },
            });
            setNewComment('');
            load({ quiety: true});
        } catch (e) {

        }
    }

    async function sendAnswer(textComment, parentId) {
        await sendComment({
            data: {
                userId: 1,
                comments,
                comment: textComment, newComment,
                parentId,
            },
        });
        load({ quiety: true });
    }

    

    return (
        <>
            {isOpen &&
                <div className="ui-modal-fundo">
                    <div className="ui-modal">
                        <button className="ui-modal-fecha-button" type="button" onClick={(onClickClose)}>x</button>

                        <form className="comentario-form" onSubmit={onSubmit}>
                            <textarea placeholder="comentar..."
                                onChange={(ev) =>
                                    setNewComment(ev.target.value)
                                }
                                value={newComment}
                                disabled={sendComment.loading}
                            />
                            <button type="submit" disabled={sendCommentInfo.loading}>
                                {sendCommentInfo.loading ? 'Enviando...' : 'Enviar'}
                            </button>
                        </form>
                        <ListaComentarios comments={loadInfo.data} sendComment={sendAnswer} />
                    </div>
                </div>
            }
        </>
    )
};

export default ComentariosQuiz;