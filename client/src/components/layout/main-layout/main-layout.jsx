import style from "./main-layout.module.css";

export default function MainLayout(props) {

    return (
        <div className={style["grid"]}>
            <header className={style["header"]}>
                {props.navbar}
            </header>

            <aside className="sidebar-left">
                1
            </aside>

            <div className={style["content"]}>
                {props.content}
            </div>
        </div>
    );
}
