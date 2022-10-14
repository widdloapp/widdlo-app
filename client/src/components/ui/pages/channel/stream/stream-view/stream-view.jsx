import style from "./stream-view.module.css";
import Plyr from "plyr";

export default function StreamView() {

    new Plyr('.video-player');

    return (
        <div className={style["wrapper"]}>
            <div className={style["video-wrapper"]}>
                <link rel="stylesheet" href="https://cdn.plyr.io/3.7.2/plyr.css"/>
                <video className="video-player" autoPlay playsInline controls src=""/>
            </div>
            <h1>aaaa</h1>
        </div>
    );
}