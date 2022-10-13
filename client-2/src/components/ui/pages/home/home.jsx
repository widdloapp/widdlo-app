import VideoGrid from "../../videos/video-grid/video-grid.jsx";

import style from "./home.module.css";

export default function Home() {

    return (
        <div className={style["container"]}>
            <VideoGrid />
        </div>
    );
}