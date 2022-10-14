import {useState, useEffect} from "react";

import style from "./channel-list.module.css";
import {api} from "../../../../shared/utils/token/api.js";

export default function ChannelList() {

    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(api('GET', 'video').then(res => {
            setVideos(res);
            setLoaded(true);
        }))
    }, []);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                {
                    videos.videos.map((video, key) =>
                        <div key={key} className={style["channel-wrap"]}>
                            <img width={50} height={50}
                                 src={`https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png`} />
                        </div>
                    )
                }
            </div>
        );
    }
}