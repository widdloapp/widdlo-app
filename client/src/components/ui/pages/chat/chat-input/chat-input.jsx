import style from "./chat-input.module.css";

export default function ChatInput() {

    return (
        <div className={style["wrapper"]}>
            <textarea placeholder="¡Añade un mensaje a este chat!" />
            <div className={style["buttons-wrapper"]}>
                <div>
                    <p>200 caracteres máximo.</p>
                </div>
                <div>
                    <button className="util">Enviar</button>
                </div>
            </div>
        </div>
    );
}