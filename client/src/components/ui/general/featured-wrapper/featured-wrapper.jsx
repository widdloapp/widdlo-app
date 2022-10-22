import {useState, useEffect} from "react";

import style from "./featured-wrapper.module.css";
import {Link} from "react-router-dom";
import {api} from "../../../../shared/utils/token/api.js";

export default function FeaturedWrapper(props) {

    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        api('GET', 'video').then(res => {
            setVideos(res.videos);
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                {
                    videos.map((video, key) =>
                        <Link key={key} to={`/watch/${video.id}`}>
                            <div className={style["video-card"]}>
                                <div className={style["zoom-img"]}>
                                    <img className="undraggable" src={video.thumbnail} />
                                </div>
                                <div className={style["box"]}>
                                    <p>{video.title}</p>
                                    <p>{video.views} visualizaciones</p>
                                    <div hidden={!props.detailed}>
                                        <p>{video.channel.name}</p>
                                        <p>{video.channel.followers} seguidores</p>
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