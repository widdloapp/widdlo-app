import {useState, useEffect} from "react";

import Plyr from 'plyr';
import style from "./video-player.module.css";
import {api} from "../../../../shared/utils/token/api.js";
import {Link, useParams} from "react-router-dom";

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
                <title>{"Widdlo - " + video.title}</title>
                <div className={style["container"]}>
                    <div className={style["video-wrapper"]}>
                        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.2/plyr.css"/>
                        <div className={style["player-wrapper"]}>
                            <video className="video-player" autoPlay playsInline controls src={video.source}/>
                        </div>

                        <div className={style["data-wrapper"]}>
                            <div className={style["data-elements"]}>
                                <div className={style["data-wrap"]}>
                                    <h1>{video.title}</h1>
                                    <p>{video.views} visualizaciones • hace 1 día</p>
                                </div>
                                <div className={style["right"]}>
                                    <div className={style["buttons-wrapper"]}>
                                        <div className="utility">
                                            <i className="fa-duotone fa-thumbs-up"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style["data-elements"]} id={style["channel"]}>
                                <div className={style["data-wrap"]}>
                                    <Link to={video.channel.id} className="styled-text">
                                        <h3>{video.channel.username}</h3>
                                    </Link>



                                    <p>{video.channel.followers} seguidores</p>
                                </div>
                                <div className={style["buttons-wrapper"]}>



                                </div>
                            </div>
                            <p>{video.description}</p>





                        </div>
                    </div>
                </div>
            </div>
        );
    }
}