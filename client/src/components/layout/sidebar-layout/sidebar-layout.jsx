import style from "./sidebar-layout.module.css";

export default function SidebarLayout(props) {

    return (
        <div className={style["grid"]}>
            <header className={style["header"]}>
                {props.navbar}
            </header>

            <aside className="sidebar-left">
                1
            </aside>

            <aside className="sidebar">
                p
            </aside>

            <div className={style["content"]}>
                {props.content}
            </div>
        </div>
    );
}
