import {useState, useEffect, Fragment} from "react";

import {api} from "../../../../../shared/utils/token/api.js";
import {Link} from "react-router-dom";

import style from "./inline-video-grid.module.css";
import InlineVideoCard from "../../inline-video-card/inline-video-card";

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
                        <Fragment key={key}>
                            <InlineVideoCard video={video} />
                        </Fragment>
                    )
                }
            </div>
        );
    }
}