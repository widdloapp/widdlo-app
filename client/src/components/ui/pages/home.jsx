import {useState, useEffect} from "react";
import {api} from "../../../shared/utils/token/api.js";
import {Card} from "@douyinfe/semi-ui";

import style from "./home.module.css";

export default function Home() {

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
            <div>
                {
                    videos.videos.map((video, key) =>
                        <Card key={key} className={style["box"]}>
                            <p>{video.title}</p>
                            <p>{video.description}</p>
                            <p>{video.views} visualizaciones</p>
                            <h1>{video.author.name}</h1>
                        </Card>
                    )
                }
            </div>
        );
    }
}