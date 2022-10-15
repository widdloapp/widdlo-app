import React, { useState, useEffect } from 'react';
import RequiredAccountBar from "../../../../main/account/required-account-bar/required-account-bar";

import style from "./live-chat.module.css";

export default function LiveChat(props) {

    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [noMessages, setNoMessages] = useState(true);

    return (
        <div className={style["wrapper"]}>
            <div>
                <h2 className="unselectable">Chat en directo</h2>
                <div className={style["empty-chat-wrapper"]} hidden={chat.length > 0}>
                    <p>Ningún mensaje aún</p>
                </div>
                <div className={style["message-wrapper"]} id="chat">
                    {chat.map((message, key) =>
                        <div key={key} className={style["message"]}>
                            <div key={key} className={style["message"]}>






                                <p>: {message.body}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <p id={style["centred-text"]} hidden={!noMessages}>{props.logged}</p>
                {props.logged ? <form onSubmit={postMessage} autoComplete="off">
                    <input name="body" value={message} onChange={event => setMessage(event.target.value)} className={style["live-chat"]} placeholder="Comentar en la emisión en directo..." type="text"/>
                </form> : <RequiredAccountBar value="Inicia sesión para comentar"/>}
            </div>
        </div>
    );
}