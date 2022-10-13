import style from "./sidebar-layout.module.css";

export default function SidebarLayout(props) {

    return (
        <div className={style["grid"]}>
            <header className={style["header"]}>
                header
            </header>

            <aside>
                1
            </aside>

            <aside className="sidebar">
                1
            </aside>

            <div className="container">
                1
            </div>
        </div>
    );
}
