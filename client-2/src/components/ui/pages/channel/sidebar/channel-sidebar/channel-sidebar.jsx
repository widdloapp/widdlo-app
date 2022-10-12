import style from "./channel-sidebar.module.css";
import {Button} from "@douyinfe/semi-ui";

export default function ChannelSidebar() {

    return (
        <div className={style["container"]}>
            <Button className="section">Destacado</Button>
            <Button className="section">Reciente</Button>
        </div>
    );
}