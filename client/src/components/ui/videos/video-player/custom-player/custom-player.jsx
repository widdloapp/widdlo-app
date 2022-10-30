import style from "./custom-player.module.css";

export default function CustomPlayer(props) {

    return (
        <div className={style["container"]}>
            <video className={style["player"]} src={props.source} />
            <div className={style["wrapper"]}>
                <div className={style["header"]}>
                    <h1>a</h1>
                </div>
                <div className={style["controls"]}>
                    <h1>aaa</h1>
                </div>
            </div>
        </div>
    );
}