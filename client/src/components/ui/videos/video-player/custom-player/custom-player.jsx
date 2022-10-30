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
                    <button className={style["control"]}><i className="fa-solid fa-play" /></button>
                </div>
            </div>
        </div>
    );
}