import {useEffect} from "react";

import Plyr from 'plyr';
import style from "./video-player.module.css";
import ChannelCard from "../../pages/channel/channel-card/channel-card";
import CommentBox from "../comments/comment-box/comment-box";
import ErrorBoundary from "../../main/error/error-boundary/error-boundary";
import LikeButton from "./like-button/like-button.jsx";

export default function VideoPlayer(props) {

    const controls = ['play', 'progress', 'current-time', 'mute', 'volume', 'pip', 'airplay', 'fullscreen'];

    useEffect(() => {
        new Plyr('.video-player', { controls });
    }, [props.video]);

    return (
        <ErrorBoundary content={
            <div>
                <div className={style["container"]}>
                    <div className={style["video-wrapper"]}>
                        {/*<CustomPlayer source={props.video.source}*/}
                        <video className="video-player" autoPlay playsInline controls src={props.video.source}/>
                    </div>
                    <div className={style["wrapper"]}>
                        <div className={style["left"]}>
                            <h3>{props.video.title}</h3>
                            <p>{props.video.views} visualizaciones • hace 1 día</p>
                        </div>
                        <div className={style["right"]}>
                            <LikeButton video={props.video} />
                        </div>
                    </div>
                    <ChannelCard channel={props.video.channel} />
                </div>
                <hr className="spaced" />
                <CommentBox isComment={true} id={props.video.id} />
            </div>
        } />
    );
}