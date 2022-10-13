import style from "./sidebar-layout.module.css";

export default function SidebarLayout(props) {

    return (
        <div className={style["grid"]}>
            <header className={style["header"]}>
                {props.navbar}
            </header>

            <aside>
                1
            </aside>

            <aside className="sidebar">

            </aside>

            <div className="container">
                1
            </div>
        </div>
    );
}
