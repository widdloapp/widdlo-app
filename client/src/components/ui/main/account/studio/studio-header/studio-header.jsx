import style from "./studio-header.module.css";

export default function StudioHeader(props) {

    return (
        <div className={style["wrapper"]}>
            <h1>{props.title}</h1>
            <hr className="spaced" />
            {props.content}
        </div>
    );
}