import style from "./main-layout.module.css";

export default function MainLayout(props) {

    return (
        <div className={style["full-layout"]}>
            <aside className={style["sidebar-left"]}>
                ae
            </aside>
            {props.content}
        </div>
    );
}
