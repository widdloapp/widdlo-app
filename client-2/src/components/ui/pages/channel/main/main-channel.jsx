import style from "./main-channel.module.css";

export default function MainChannel() {

    return (
        <div className={style["container"]}>
            <div>
                <div className={style["channel-header"]}>
                    <p>Ailakks</p>
                    <p>0 seguidores</p>
                </div>
            </div>
        </div>
    );
}