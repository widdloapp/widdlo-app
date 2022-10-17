import {useContext, useEffect, useState} from "react";

import style from "./main-chat.module.css";
import {api} from "../../../../../shared/utils/token/api.js";
import {useParams} from "react-router-dom";
import ChatInput from "../chat-input/chat-input";
import RequiredAccountBar from "../../../main/account/required-account-bar/required-account-bar";
import {AccountContext} from "../../../../../App.jsx";

export default function MainChat() {
    let { chat } = useParams();

    const account = useContext(AccountContext).user;

    const [loaded, setLoaded] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        api('GET', 'message/' + chat).then(res => {
            setMessages(res.messages);
            setLoaded(true);
        })
    }, []);

    const postMessage = (event) => {
        event.preventDefault();

        const body = new URLSearchParams();
        body.append("chat", chat);
        body.append("body", event.target[0].value);
        api('POST', 'message', body).then(res => {

            }
        )
    };

    if (loaded) {
        return (
            <div className={style["container"]}>
                <div className={style["wrapper"]}>
                    <div>
                        {
                            messages.map((message, key) =>
                                <div className={style["message"]} key={key}>
                                    <img className="undraggable unselectable" src={message.author.avatar} />
                                    <div>
                                        <p>{message.author.name}</p>
                                        <p>{message.body}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={style["footer-wrapper"]}>
                    {account ? <ChatInput submit={postMessage} value="Enviar un mensaje..." button="Enviar" /> : <RequiredAccountBar value="¡Inicia sesión o regístrate para participar!" />}
                </div>
            </div>
        );
    }
}