import Plyr from "plyr";
import {useEffect, useState} from "react";
import {api} from "../../../../../../shared/utils/token/api.js";

import style from "./stream-view.module.css";

export default function StreamView() {

    const controls = ['play', 'rewind', 'restart', 'mute', 'volume', 'pip', 'airplay', 'fullscreen'];
    
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', 'video/').then(res => {
            setData(data);
        })
    }, []);

    useEffect(() => {
        new Plyr('.video-player', { controls });
    }, [data]);

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