import {useState, useEffect, Fragment, useContext} from "react";

import style from "./channel-grid.module.css";
import {api} from "../../../../../shared/utils/token/api.js";
import VideoCard from "../../video-card/video-card";
import {OrderContext} from "../../../pages/home/home-discovery/home-discovery.jsx";

export default function ChannelGrid(props) {

    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);

    const order = useContext(OrderContext);

    useEffect(() => {
        api('GET', `video/channel/${props.channel.id}?${new URLSearchParams({order: order})}`).then(res => {
            setVideos(res.videos);
            setLoaded(true);
        })
    }, [order]);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
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