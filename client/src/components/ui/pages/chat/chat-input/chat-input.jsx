import style from "./chat-input.module.css";

export default function ChatInput(props) {

    return (
        <form onSubmit={props.submit} className={style["wrapper"]}>
            <textarea name="body" placeholder="¡Añade un mensaje a este chat!" />
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