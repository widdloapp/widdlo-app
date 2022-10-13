import style from "./channel-sidebar.module.css";

export default function ChannelSidebar() {

    return (
        <div className={style["container"]}>
            <button className="section">Destacado</button>
            <button className="section">Reciente</button>
        </div>
    );
}