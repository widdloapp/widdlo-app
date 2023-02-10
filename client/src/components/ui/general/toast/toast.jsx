import style from "./text-icon-wrapper.module.css";

export default function Toast(props) {

    return (
        <div className={style["wrapper"]}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}