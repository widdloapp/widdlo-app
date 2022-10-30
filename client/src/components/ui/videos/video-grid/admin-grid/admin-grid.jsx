import {useState, useEffect} from "react";

import style from "./admin-grid.module.css";
import {api} from "../../../../../shared/utils/token/api.js";
import {Link} from "react-router-dom";
import Loading from "../../../general/skeleton/loading/loading";
import NoContent from "../no-content/no-content";

export default function AdminGrid(props) {

    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        api('GET', `video/channel/${props.channel}`).then(res => {
            setVideos(res.videos);
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        if (videos.length > 0) {
            return (
                <div className={style["wrapper"]}>
                    {
                        videos.map((video, key) =>
                            <Link key={key} to={`/watch/${video.id}`}>
                                <div className={style["video-card"]}>
                                    <div className={style["img"]}>
                                        <img className="undraggable" src={video.thumbnail} />
                                    </div>
                                    <div className={style["box"]}>
                                        <p>{video.title}</p>
                                        <p>{video.description}</p>
                                    </div>
                                    <div className={style["elements-wrapper"]}>
                                        <button className={style["element"]}>{video.views}</button>
                                        <button className={style["element"]}>{video.likes}</button>
                                    </div>
                                </div>
                                <hr className="spaced" />
                            </Link>
                        )
                    }
                </div>
            );
        } else {
            return(
                <NoContent />
            )
        }
    } else {
        return (
            <Loading />
        );
    }
}