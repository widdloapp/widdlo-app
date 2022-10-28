import Plyr from "plyr";
import {useEffect, useState} from "react";

import style from "./stream-view.module.css";
import ReactHlsPlayer from "react-hls-player";
import {api, stream, streamPath} from "../../../../../../shared/utils/token/api.js";
import {useParams} from "react-router-dom";
import Loading from "../../../../general/skeleton/loading/loading";
import OfflineStream from "./offline-stream/offline-stream";

export default function StreamView() {

    const { id } = useParams();

    const controls = ['play', 'rewind', 'restart', 'mute', 'volume', 'pip', 'airplay', 'fullscreen'];

    const [loaded, setLoaded] = useState(false);
    const [live, setLive] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', `stream/${id}`).then(res => {
            setData(res.stream);
            setLoaded(true);

            stream(res.stream.id).then(res => {
                if (res.status == 200) {
                    setLive(true);
                }
            })
        })
    }, [id]);

    useEffect(() => {
        new Plyr('.video-player', { controls });
    }, [live]);

    if (loaded) {
        if (live) {
            return (
                <div className={style["wrapper"]}>
                    <div className={style["video-wrapper"]}>
                        <ReactHlsPlayer hidden={!live} className="video-player" autoPlay={true} src={streamPath(data.id)} />
                        <h1>a</h1>
                    </div>
                </div>
            );
        } else {
            return (
                <OfflineStream channel={id} />
            )
        }
    } else {
        return (
            <Loading />
        )
    }
}