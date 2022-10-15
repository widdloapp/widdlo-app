import style from "./chat-input.module.css";

export default function ChatInput() {

    return (
        <div className={style["wrapper"]}>
            <textarea placeholder="¡Añade un mensaje a este chat!" />
        </div>
    );
}