import {useState, useEffect} from "react";

import Plyr from 'plyr';
import style from "./video-player.module.css";
import {api} from "../../../../shared/utils/token/api.js";
import {Link, useParams} from "react-router-dom";
import ChannelCard from "../../pages/channel/channel-card/channel-card";

export default function VideoPlayer() {

    const { id } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [video, setVideo] = useState([]);

    new Plyr('.video-player');

    useEffect(() => {

        api('GET', 'video/' + id).then(res => {
            setVideo(res.video);
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        return (
            <div>
                <div className={style["container"]}>
                    <div className={style["video-wrapper"]}>
                        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.2/plyr.css"/>
                        <video className="video-player" autoPlay playsInline controls src={video.source}/>
                    </div>
                    <div className={style["wrapper"]}>
                        <div className={style["left"]}>
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                        </div>
                        <div className={style["right"]}>
                            <button className="main">Like</button>
                        </div>
                    </div>
                    <ChannelCard name={video.channel.name} followers={video.channel.followers} />
                </div>
            </div>
        );
    }
}