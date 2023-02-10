import style from "./text-icon-wrapper.module.css";

export default function TextIconWrapper(props) {

    return (
        <div className={style["wrapper"]}>
            {props.first}
            {props.second}
        </div>
    );
}