import React, {useState, useEffect, useContext} from "react";

import {api} from "../../../../../shared/utils/token/api.js";

import style from "./comment-box.module.css";
import RequiredAccountBar from "../../../main/account/required-account-bar/required-account-bar";
import {AccountContext} from "../../../../../App.jsx";
import ChatInput from "../../../pages/chat/chat-input/chat-input";
import {useToast} from "@chakra-ui/react";
import PopoverWrapper from "../../../pages/channel/sidebar/popover-wrapper/popover-wrapper";
import ChannelPopup from "../../../pages/channel/channel-popup/channel-popup";
import {Link} from "react-router-dom";

export default function CommentBox(props) {

    const account = useContext(AccountContext).user;

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    const toast = useToast();

    useEffect(() => {
        api('GET', `comment/${props.id}`).then(res => {
            setData(res);
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


    if (loaded) {
        return (
            <div className={style["comment-wrapper"]}>
                <div className={style["header"]}>
                    <h1>{data.amount} comentarios</h1>
                </div>
                {account ? <ChatInput submit={postComment} value="Añade un comentario..." button="Comentar" /> : <RequiredAccountBar value="¡Inicia sesión o regístrate para comentar!" />}
                <div className={style["content"]}>
                    {
                        data.comments.map((comment, key) =>
                            <div key={key} className={style["comment-box"]}>





                                <PopoverWrapper trigger={<Link><img src={comment.author.avatar} className="avatar unselectable undraggable" /></Link>} content={<ChannelPopup id={comment.author.id} />} />
                                <div className={style["content"]}>
                                    <p><mark>{comment.author.name}</mark> hace 1 día</p>
                                    <p>{comment.body}</p>
                                    <div className={style["button-wrapper"]}>
                                        <button className="paper">Responder</button>
                                        <button className="paper">Reportar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}