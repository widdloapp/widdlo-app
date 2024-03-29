import React, {useState, useEffect, useContext} from "react";

import {api} from "../../../../../shared/utils/token/api.js";

import style from "./comment-box.module.css";
import RequiredAccountBar from "../../../general/error/required-account-bar/required-account-bar";
import {AccountContext} from "../../../../../App.jsx";
import ChatInput from "../../../pages/chat/chat-input/chat-input";
import {useToast} from "@chakra-ui/react";
import CommentList from "./comment-list/comment-list.jsx";
import NoComments from "./no-comments/no-comments.jsx";
import NotFound from "../../../general/error/not-found/not-found";
import Loading from "../../../general/skeleton/loading/loading";
export default function CommentBox(props) {

    const account = useContext(AccountContext).user;
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState('');

    const toast = useToast();

    useEffect(() => {
        api('GET', `comment/${props.id}`).then(res => {
            setData(res);
            setLoaded(true);
        })
    }, [props.id]);

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


    if (loaded) {
        if (data.comments) {
            return (
                <div className={style["wrapper"]}>
                    <div className={style["header"]}>
                        <h1>{data.amount} comentarios</h1>
                    </div>
                    {account ? <ChatInput submit={postComment} value="Añade un comentario..." button="Comentar" /> : <RequiredAccountBar value="¡Inicia sesión o regístrate para comentar!" />}
                    <div className={style["content"]}>
                        {
                            data.comments.length > 0 ? <CommentList isComment={props.isComment} reply={props.reply} data={data} /> : <NoComments />
                        }
                    </div>
                </div>
            );
        } else {
            return(
                <NotFound />
            )
        }
    } else {
        return(
            <Loading />
        )
    }
}