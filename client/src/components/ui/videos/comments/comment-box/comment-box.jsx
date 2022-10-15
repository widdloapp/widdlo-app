import React, {useState, useEffect, useContext} from "react";

import {api} from "../../../../../shared/utils/token/api.js";

import style from "./comment-box.module.css";
import RequiredAccountBar from "../../../main/account/required-account-bar/required-account-bar";
import {AccountContext} from "../../../../../App.jsx";
import ChatInput from "../../../pages/chat/chat-input/chat-input";

export default function CommentBox(props) {

    const account = useContext(AccountContext).user;

    const [loaded, setLoaded] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentsData, setCommentsData] = useState({});

    useEffect(() => {
        api('GET', 'comment/' + props.id).then(res => {
            setComments()
            setComments(res.comments);
            setLoaded(true);
        })
    }, []);

    const postComment = (event) => {
        event.preventDefault();

        const body = event.target[0].value;

        /*fetch("http://localhost:3000/api/v1/videos/comment", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: Cookies.get('user'), token: Cookies.get('token'), body: body, video: props.id})
        })
            .then(res => res.json())
            .then(data => {
                updateComments();
            })
            .catch(error => console.log(error));*/
    }


    return (
        <div className={style["comment-wrapper"]}>
            <div className={style["header"]}>
                <h1>0 comentarios</h1>
            </div>
            {account ? <ChatInput /> : <RequiredAccountBar value="¡Inicia sesión o regístrate para comentar!" />}
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