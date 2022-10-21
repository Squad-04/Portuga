import React, { useEffect, useState } from "react";
import Comentarios from "../../Model/comentarios/comentarios";
import ListaComentarios from "./ListaComentarios/listaComentarios";
import useApi from '../../Quiz/QuizComentarios/ApiComentarios/useApi'
import './comentarios.css';

const ComentariosQuiz = ({ comments, onClose }) => {
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
            load();
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
        <Comentarios  isOpen onClickClose={onClose}>
            <form className="comentario-form" onSubmit={onSubmit}>
                <textarea placeholder="comentar..."
                    onChange={(ev) =>
                        setNewComment(ev.target.value)
                    }
                    value={newComment}
                />
                <button type="submit" disabled={sendCommentInfo.loading}>
                    {sendCommentInfo.loading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
            <ListaComentarios comments={loadInfo.data} sendComment={sendAnswer} />
        </Comentarios>
    );
};

export default ComentariosQuiz;