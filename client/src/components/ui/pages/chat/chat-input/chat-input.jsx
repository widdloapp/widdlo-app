import style from "./chat-input.module.css";
import {useState} from "react";

export default function ChatInput(props) {

    const [body, setBody] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.submit(event)
            setBody('')
        }} className={style["wrapper"]}>
            <textarea value={body} onChange={event => setBody(event.target.value)} type="a" name="body" placeholder="¡Añade un mensaje a este chat!" />
            <div className={style["buttons-wrapper"]}>
                <div>
                    <p>200 caracteres máximo.</p>
                </div>
                <div>
                    <input type="submit" value="Enviar" className="main" />
                </div>
            </div>
        </form>
    );
}