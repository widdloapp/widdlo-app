import style from "./video-view.module.css";
import VideoPlayer from "../video-player/video-player";
import {useParams} from "react-router-dom";
import InlineVideoGrid from "../video-grid/inline-grid/inline-video-grid.jsx";
import {createContext, useEffect, useState} from "react";
import {api} from "../../../../shared/utils/token/api.js";
import Loading from "../../general/skeleton/loading/loading";
import NotFound from "../../general/error/not-found/not-found";

export const CommentContext = createContext();

export default function VideoView() {

    const { id, comment } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [video, setVideo] = useState([]);

    useEffect(() => {
        api('GET', `video/${id}`).then(res => {
            setVideo(res.video);
            setLoaded(true);
        })
    }, [id]);

    if (loaded) {
        if (video) {
            return (
                <div>
                    <div className={style["container"]}>
                        <CommentContext.Provider value={comment}>
                            <div className={style["wrapper"]}>
                                <VideoPlayer video={video} />
                                <InlineVideoGrid />
                            </div>
                        </CommentContext.Provider>
                    </div>
                </div>
            );
        } else {
            return (
                <NotFound />
            )
        }
    } else {
        return (
            <Loading />
        )
    }
}