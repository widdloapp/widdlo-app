import style from "./tips-sidebar.module.css";

export default function TipsSidebar(props) {

    return (
        <div className={style["wrapper"]}>
            {props.sidebar}
            {props.content}
        </div>
    );
}