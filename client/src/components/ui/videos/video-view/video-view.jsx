import style from "./video-view.module.css";
import VideoPlayer from "../video-player/video-player";
import {useParams} from "react-router-dom";
import VideoGrid from "../video-grid/video-grid.jsx";

export default function VideoView() {

    const { id } = useParams();

    return (
        <div>
            <div className={style["container"]}>
                <VideoPlayer id={id} />
                <VideoGrid />
            </div>
        </div>
    );
}