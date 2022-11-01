
import style from "./main-layout.module.css";
import Navbar from "../../ui/main/navbar/navbar.jsx";
import ChannelList from "../../ui/main/channel-list/channel-list";
import {CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import {useLocation} from "react-router-dom";

export default function MainLayout(props) {

    let location = useLocation();

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
        </div>
    );
}