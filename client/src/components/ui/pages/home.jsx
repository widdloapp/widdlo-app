import {useState, useEffect} from "react";
import {api} from "../../../shared/utils/token/api.js";

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
                <p>{JSON.stringify(videos)}</p>
            </div>
        );
    }
}