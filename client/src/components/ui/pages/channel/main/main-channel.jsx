import style from "./main-channel.module.css";
import {Avatar, Layout} from "@douyinfe/semi-ui";

export default function MainChannel() {

    return (
        <div className={style["container"]}>
            <Layout>
                <div className={style["channel-header"]}>
                    <Avatar style={{ margin: 4 }} alt='Ailakks'>Aa</Avatar>
                    <p>Ailakks</p>
                    <p>0 seguidores</p>
                </div>
            </Layout>
        </div>
    );
}