import {useState, useEffect} from "react";

import {api} from "../../../../../shared/utils/token/api.js";
import {Link} from "react-router-dom";

import style from "./inline-video-grid.module.css";

export default function InlineVideoGrid() {

    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        api('GET', 'video').then(res => {
            setVideos(res);
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                {
                    videos.videos.map((video, key) =>
                        <Link key={key} to={`/watch/${video.id}`}>
                            <div className={style["video-card"]}>
                                <img className="undraggable" width={150} height={100} src={video.thumbnail} />
                                <div className={style["container"]}>
                                    <div className={style["wrapper"]}>
                                        <p>{video.title}</p>
                                        <p>{video.views} visualizaciones</p>
                                        <p>{video.channel.name}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        );
    }
}