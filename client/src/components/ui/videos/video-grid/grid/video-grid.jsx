import {useState, useEffect} from "react";

import style from "./video-grid.module.css";
import {api} from "../../../../../shared/utils/token/api.js";
import VideoCard from "../../video-card/video-card";

export default function VideoGrid(props) {

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
                        <div key={key}>
                            <VideoCard video={video} />
                        </div>
                    )
                }
            </div>
        );
    }
}