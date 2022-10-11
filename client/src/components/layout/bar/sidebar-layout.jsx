import {useEffect} from "react";
import style from "./bar.module.css";

export default function SidebarLayout() {

    useEffect(() => {
    }, []);

    return (
        <div className={style["grid"]}>
            <aside className={style["sidebar-left"]}>
                left sidebar
            </aside>
        </div>
    );
}