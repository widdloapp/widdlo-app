import style from "./sidebar-layout.module.css";
import ChannelList from "../../ui/main/channel-list/channel-list.jsx";
import Navbar from "../../ui/main/navbar/navbar.jsx";

export default function SidebarLayout(props) {

    return (
        <div className={style["grid"]}>
            <header className={style["header"]}>
                <Navbar />
            </header>

            <aside className="sidebar-left">
                <ChannelList />
            </aside>

            <aside className="sidebar">
                {props.sidebar}
            </aside>

            <div className={style["content"]}>
                {props.content}
            </div>
        </div>
    );
}
