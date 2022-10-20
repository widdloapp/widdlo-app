import style from "./tips-sidebar.module.css";
import {Link} from "react-router-dom";

export default function TipsSidebar(props) {

    return (
        <div className={style["wrapper"]}>
            {props.sidebar}
            {props.content}
        </div>
    );
}