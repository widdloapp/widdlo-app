import style from "./stream-layout.module.css";
import ChannelList from "../../ui/main/channel-list/channel-list.jsx";
import Navbar from "../../ui/main/navbar/navbar.jsx";

export default function StreamLayout(props) {

    return (
        <div className={style["grid"]}>
            <header className={style["header"]}>
                <Navbar />
            </header>

            <aside className="sidebar-left">
                <ChannelList />
            </aside>

            <div className={style["content"]}>
                {props.content}
            </div>

            <aside className="sidebar">
                {props.sidebar}
            </aside>
        </div>
    );
}