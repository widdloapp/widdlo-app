import {useState, useEffect} from "react";

import Plyr from 'plyr';
import style from "./video-player.module.css";
import {api} from "../../../../shared/utils/token/api.js";
import ChannelCard from "../../pages/channel/channel-card/channel-card";
import CommentBox from "../comments/comment-box/comment-box";

export default function VideoPlayer(props) {

    const [loaded, setLoaded] = useState(false);
    const [video, setVideo] = useState([]);

    const controls = ['play', 'progress', 'current-time', 'mute', 'volume', 'pip', 'airplay', 'fullscreen'];

    useEffect(() => {
        api('GET', `video/${props.id}`).then(res => {
            setVideo(res.video);
            setLoaded(true);
        })
    }, [props.id]);

    useEffect(() => {
        new Plyr('.video-player', { controls });
    }, [video]);

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
                            <p>{video.views} visualizaciones • hace 1 día</p>
                        </div>
                        <div className={style["right"]}>
                            <button className="icon">
                                <i className="fa-duotone fa-thumbs-up"></i>
                            </button>
                        </div>
                    </div>
                    <ChannelCard channel={video.channel} />
                </div>
                <hr className="spaced" />
                <CommentBox id={props.id} />
            </div>
        );
    }
}