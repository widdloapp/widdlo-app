import style from "./custom-player.module.css";
import {useEffect, useState} from "react";

export default function CustomPlayer(props) {

    const alterPlay = () => {
        setPlaying(!playing);
        playing ? player.play() : player.pause();
    }

    const [player, setPlayer] = useState(null);

    const [playing, setPlaying] = useState(false);

    useEffect(() => setPlayer(document.getElementById('video-player')));


    return (
        <div className={style["container"]}>
            <video id="video-player" className={style["player"]} src={props.source} />
            <div className={style["wrapper"]}>
                <div className={style["header"]}>
                    <h1>a</h1>
                </div>
                <div className={style["controls"]}>
                    <button onClick={() => alterPlay()} className={style["control"]}><i className="fa-solid fa-play" /></button>
                </div>
            </div>
        </div>
    );
}