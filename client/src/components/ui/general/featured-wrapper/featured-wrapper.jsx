import {useState, useEffect, Fragment} from "react";

import style from "./featured-wrapper.module.css";
import {api} from "../../../../shared/utils/token/api.js";
import VideoCard from "../../videos/video-card/video-card";

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
                <h1>Destacado este semana</h1>
                {
                    videos.map((video, key) =>
                        <Fragment key={key}>
                            <VideoCard video={video} />
                        </Fragment>
                    )
                }
            </div>
        );
    }
}