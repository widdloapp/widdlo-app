import style from "./video-view.module.css";
import VideoPlayer from "../video-player/video-player";
import {useParams} from "react-router-dom";
import InlineVideoGrid from "../video-grid/inline-grid/inline-video-grid.jsx";
import {createContext} from "react";

export const CommentContext = createContext();

export default function VideoView() {

    const { id, comment } = useParams();

    return (
        <div>
            <div className={style["container"]}>
                <CommentContext.Provider value={comment}>
                    <div className={style["wrapper"]}>
                        <VideoPlayer id={id} />
                        <InlineVideoGrid />
                    </div>
                </CommentContext.Provider>
            </div>
        </div>
    );
}