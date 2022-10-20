import style from "./error.module.css";

export default function Error(props) {

    return (
        <div className={style["container"]}>
            <div className={style["box"]}>
                <h1>{props.title}</h1>
                <hr className="spaced" />
                <p>{props.body}</p>
            </div>
        </div>
    );
}