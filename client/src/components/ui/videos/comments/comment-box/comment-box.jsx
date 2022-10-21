import React, {useState, useEffect, useContext, Fragment} from "react";

import {api} from "../../../../../shared/utils/token/api.js";

import style from "./comment-box.module.css";
import RequiredAccountBar from "../../../main/account/required-account-bar/required-account-bar";
import {AccountContext} from "../../../../../App.jsx";
import ChatInput from "../../../pages/chat/chat-input/chat-input";
import {Drawer, useDisclosure, useToast} from "@chakra-ui/react";
import DrawerWrapper from "../../../main/account/drawer/drawer-wrapper";
import {Link, useParams} from "react-router-dom";
export default function CommentBox(props) {

    const account = useContext(AccountContext).user;
    const { id, comment } = useParams();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState('');

    const toast = useToast();

    const updateComment = () => {
        if (!props.reply && comment) {
            onOpen();
        }
    }

    useEffect(() => {
        api('GET', `comment/${props.id}`).then(res => {
            setData(res);
            setLoaded(true);
        })
        updateComment();
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
        return (
            <div className={style["comment-wrapper"]}>
                <div className={style["header"]}>
                    <h1>{data.amount} comentarios</h1>
                </div>
                {account ? <ChatInput submit={postComment} value="Añade un comentario..." button="Comentar" /> : <RequiredAccountBar value="¡Inicia sesión o regístrate para comentar!" />}
                <div className={style["content"]}>


                    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                        <DrawerWrapper content={
                            <Fragment>
                                <Link to={`/watch/${id}`}>
                                    <p>Volver</p>
                                </Link>
                                <CommentBox reply={true} id={comment} closeable={false} />
                            </Fragment>
                        } />
                    </Drawer>
                    {
                        data.comments.map((comment, key) =>
                            <div key={key} className={style["comment-box"]}>





                                <div className={style["content"]}>
                                    <p><mark>{comment.author.name}</mark> hace 1 día</p>
                                    <p>{comment.body}</p>
                                    <div className={style["button-wrapper"]}>
                                        <Link to={`/watch/${id}/${comment.id}`} onClick={updateComment}>
                                            <button className="paper">Responder</button>
                                        </Link>
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