import {useState, useEffect} from "react";

import style from "./video-grid.module.css";
import {api} from "../../../../shared/utils/token/api.js";

export default function VideoGrid() {

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
                        <div key={key} className={style["video-card"]}>
                            <img width={250} height={150}
                                src={`https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png`} />
                            <div className={style["box"]}>
                                <p>{video.title}</p>
                                <p>{video.views} views</p>
                                <p>{video.channel.name}</p>
                                <p>{video.channel.followers} followers</p>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}