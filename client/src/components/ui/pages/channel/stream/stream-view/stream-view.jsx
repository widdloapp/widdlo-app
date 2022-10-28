import Plyr from "plyr";
import {useEffect, useState} from "react";

import style from "./stream-view.module.css";
import ReactHlsPlayer from "react-hls-player";
import {api} from "../../../../../../shared/utils/token/api.js";
import {useParams} from "react-router-dom";
import Loading from "../../../../general/skeleton/loading/loading";

export default function StreamView() {

    const { id } = useParams();

    const controls = ['play', 'rewind', 'restart', 'mute', 'volume', 'pip', 'airplay', 'fullscreen'];

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', `channel/${id}`).then(res => {
            setData(res.channel);
            setLoaded(true);
        })
    }, [id]);

    useEffect(() => {
        new Plyr('.video-player', { controls });
    }, [data]);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                <div className={style["video-wrapper"]}>
                    <link rel="stylesheet" href="https://cdn.plyr.io/3.7.2/plyr.css"/>
                    <ReactHlsPlayer className="video-player" autoPlay={true} src={`http://localhost:8888/${data.stream[0].id}/index.m3u8`} />
                </div>
                <h1>aaaa</h1>
            </div>
        );
    } else {
        return (
            <Loading />
        )
    }
}