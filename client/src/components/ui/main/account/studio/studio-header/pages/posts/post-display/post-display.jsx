import React, {useState, useEffect, useContext} from "react";
import {AccountContext} from "../../../../../../../../../App.jsx";
import {useToast} from "@chakra-ui/react";
import {api} from "../../../../../../../../../shared/utils/token/api.js";
import {useParams} from "react-router-dom";
import Loading from "../../../../../../../general/skeleton/loading/loading.jsx";
import NotFound from "../../../../../../../general/error/not-found/not-found.jsx";
import CommentList from "../../../../../../../videos/comments/comment-box/comment-list/comment-list.jsx";
import ChatInput from "../../../../../../../pages/chat/chat-input/chat-input.jsx";
import RequiredAccountBar from "../../../../../../../general/error/required-account-bar/required-account-bar.jsx";

import style from "./post-display.module.css";
import NoComments from "../../../../../../../videos/comments/comment-box/no-comments/no-comments.jsx";

export default function PostDisplay(props) {

    const { id } = useParams();

    const account = useContext(AccountContext).user;
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState('');

    const toast = useToast();

    useEffect(() => {
        api('GET', `post/channel/${id}`).then(res => {
            setData(res);
            setLoaded(true);
        })
    }, [id]);

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
                    {account ? <ChatInput submit={postComment} value="Añade un comentario..." button="Comentar" /> : <RequiredAccountBar value="¡Inicia sesión o regístrate para comentar!" />}
                    <div className={style["content"]}>
                        {
                            data.comments.length > 0 ? <CommentList isComment={false} reply={props.reply} data={data} /> : <NoComments />
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