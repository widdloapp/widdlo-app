import React, {useState, useEffect, useContext} from "react";

import {api} from "../../../../../shared/utils/token/api.js";

import style from "./comment-box.module.css";
import RequiredAccountBar from "../../../main/account/required-account-bar/required-account-bar";
import {AccountContext} from "../../../../../App.jsx";
import ChatInput from "../../../pages/chat/chat-input/chat-input";
import {useToast} from "@chakra-ui/react";

export default function CommentBox(props) {

    const account = useContext(AccountContext).user;

    const [loaded, setLoaded] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentsData, setCommentsData] = useState({});

    const toast = useToast();

    useEffect(() => {
        api('GET', 'comment/' + props.id).then(res => {
            setComments()
            setComments(res.comments);
            setLoaded(true);
        })
    }, []);

    const postComment = (event) => {
        event.preventDefault();

        const body = new URLSearchParams();
        body.append("target", props.id);
        body.append("body", event.target[0].value);
        api('POST', 'comment', body).then(res => {
            if (res.successful) {
                toast({
                    title: 'Listo',
                    description: "Comentario publicado.",
                    status: 'success',
                    position: 'bottom-right',
                    isClosable: true
                })
            } else {
                toast({
                    title: 'Error',
                    description: "No se pudo publicar el comentario.",
                    status: 'error',
                    position: 'bottom-right',
                    isClosable: true
                })
            }
        }
        )
    };


    return (
        <div className={style["comment-wrapper"]}>
            <div className={style["header"]}>
                <h1>0 comentarios</h1>
            </div>
            {account ? <ChatInput submit={postComment} /> : <RequiredAccountBar value="¡Inicia sesión o regístrate para comentar!" />}
            {
                comments.map((comment, key) =>
                    <div key={key}>
                        <div className={style["comment-box"]}>





                            <p><mark>hace 1 día</mark></p>
                            <h1>{comment.body}</h1>
                            <div className={style["button-wrapper"]}>
                                <button className={style["minimal"]}>Responder</button>
                                <button className={style["minimal"]}>Reportar</button>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            }
        </div>
    );
}