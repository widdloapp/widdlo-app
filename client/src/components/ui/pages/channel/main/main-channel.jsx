import style from "./main-channel.module.css";
import {Avatar} from "@douyinfe/semi-ui";

export default function MainChannel() {

    return (
        <div className={style["container"]}>
            <div>
                <Avatar style={{ margin: 4 }} alt='Ailakks'>Aa</Avatar>
                <p>Ailakks</p>
                <p>0 seguidores</p>
            </div>
        </div>
    );
}