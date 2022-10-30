import style from "./custom-player.module.css";
import {useEffect} from "react";

export default function CustomPlayer(props) {

    let player;
    useEffect(() => player = document.getElementById('video-player'));

    return (
        <div className={style["container"]}>
            <video id="video-player" className={style["player"]} src={props.source} />
            <div className={style["wrapper"]}>
                <div className={style["header"]}>
                    <h1>a</h1>
                </div>
                <div className={style["controls"]}>
                    <button onClick={() => player.play()} className={style["control"]}><i className="fa-solid fa-play" /></button>
                </div>
            </div>
        </div>
    );
}