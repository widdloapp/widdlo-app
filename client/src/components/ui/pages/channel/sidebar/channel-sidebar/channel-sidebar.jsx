import style from "./channel-sidebar.module.css";
import {Button, Layout} from "@douyinfe/semi-ui";

export default function ChannelSidebar() {

    return (
        <div className={style["container"]}>
            <Button className="section">Inicio</Button>
            <Button className="section">Inicio</Button>
        </div>
    );
}