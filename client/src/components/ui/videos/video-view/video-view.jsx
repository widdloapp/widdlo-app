import style from "./video-view.module.css";
import VideoPlayer from "../video-player/video-player";
import {useParams} from "react-router-dom";
import InlineVideoGrid from "../video-grid/inline-grid/inline-video-grid.jsx";

export default function VideoView() {

    const { id } = useParams();

    return (
        <div>
            <div className={style["container"]}>
                <div className={style["wrapper"]}>
                    <VideoPlayer id={id} />
                    <InlineVideoGrid />
                </div>
            </div>
        </div>
    );
}