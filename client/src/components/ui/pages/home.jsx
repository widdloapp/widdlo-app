import {useState, useEffect} from "react";
import {api} from "../../../shared/utils/token/api.js";

export default function Home() {

    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(async () => {
        setVideos(await api('GET', 'video'));
        setLoaded(true)
    }, []);

    if (loaded) {
        return (
            <div>
                {
                    videos.videos.map((video, key) =>
                        <h1>{JSON.stringify(video)}</h1>
                    )
                }
            </div>
        );
    }
}