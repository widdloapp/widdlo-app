import {useEffect, useState} from "react";

import style from "./main-chat.module.css";
import {api} from "../../../../../shared/utils/token/api.js";
import {useParams} from "react-router-dom";
import ChatInput from "../chat-input/chat-input";

export default function MainChat() {
    let { chat } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        api('GET', 'message/' + chat).then(res => {
            setMessages(res.messages);
            setLoaded(true);
        })
    }, []);

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
                <ChatInput />
            </div>
        );
    }
}