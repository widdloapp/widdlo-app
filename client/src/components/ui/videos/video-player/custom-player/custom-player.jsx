import style from "./custom-player.module.css";
import {useEffect, useState} from "react";

export default function CustomPlayer(props) {

    const alterPlay = () => {
        setPlaying(!playing);
        playing ? player.pause() : player.play();
    }

    const alterFullScreen = () => {
        /*setPictureInPicture(!pictureInPicture);*/
        player.requestPictureInPicture();
    }

    const alterPictureInPicture = () => {
        /*setPictureInPicture(!pictureInPicture);*/
        player.requestPictureInPicture();
    }

    const updateVideoProgress = () => {
        player.currentTime = videoRange.value * player.duration / 100;
    }

    const updateVideoVolume = () => {
        setVolume(player.volume);
        player.volume = videoVolume.value / 100;
    }

    const [player, setPlayer] = useState(null);
    const [videoRange, setVideoRange] = useState(null);
    const [volume, setVolume] = useState(100);
    const [videoVolume, setVideoVolume] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    /*const [pictureInPicture, setPictureInPicture] = useState(false);*/

    useEffect(() => {
        setPlayer(document.getElementById('video-player'));
        setVideoRange(document.getElementById('video-range'));
        setVideoVolume(document.getElementById('video-volume'));
    }, []);

    return (
        <div className={style["container"]}>
            <video id="video-player" className={style["player"]} src={props.source} />
            <div className={style["wrapper"]}>
                <div className={style["header"]}>
                    <h1>a</h1>
                </div>
                <div className={style["controls"]}>
                    <button onClick={() => alterPlay()} className={style["control"]}>{playing ? <i className="fa-solid fa-pause" /> : <i className="fa-solid fa-play" />}</button>
                    <input value={0} className={style["video-range"]} id="video-range" type="range" onChange={() => updateVideoProgress()} />
                    <button onClick={() => alterFullScreen()} className={style["control"]}>{volume == 0.01 ?
                        <i className="fa-solid fa-volume-xmark" /> :
                        <i className="fa-solid fa-volume" />}</button>
                    <input className={style["video-range"]} id="video-volume" type="range" onChange={() => updateVideoVolume()} />
                    <button onClick={() => alterPictureInPicture()} className={style["control"]}>
                        <i className="fa-sharp fa-solid fa-share-from-square" />
                    </button>
                    <button onClick={() => alterFullScreen()} className={style["control"]}>{fullScreen ?
                        <i className="fa-sharp fa-solid fa-down-left-and-up-right-to-center" /> :
                        <i className="fa-sharp fa-solid fa-up-right-and-down-left-from-center" />}</button>
                </div>
            </div>
        </div>
    );
}