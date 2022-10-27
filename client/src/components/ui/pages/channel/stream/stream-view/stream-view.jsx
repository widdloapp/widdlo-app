import Plyr from "plyr";
import {useEffect, useState} from "react";
import {api} from "../../../../../../shared/utils/token/api.js";

import style from "./stream-view.module.css";
import ReactHlsPlayer from "react-hls-player";

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
                <ReactHlsPlayer className="video-player" autoPlay={true} src="http://localhost:8888/uabxg8xgyqutf8p5epc1kxbv01ti38lkzil9asfr8501jpjjm2ydgm9gmvbia82rtf8ov9pf/index.m3u8" />
            </div>
            <h1>aaaa</h1>
        </div>
    );
}