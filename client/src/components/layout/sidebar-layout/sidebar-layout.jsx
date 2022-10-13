import style from "./sidebar-layout.module.css";

export default function SidebarLayout(props) {

    return (
        <div>
            <div className={style["slider"]}>{props.sidebar}</div>
        </div>
    );
}
