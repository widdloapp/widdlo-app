import VideoGrid from "../../videos/video-grid/grid/video-grid.jsx";

import style from "./home.module.css";
import FeaturedWrapper from "../../general/featured-wrapper/featured-wrapper";

export default function Home() {

    return (
        <div className={style["container"]}>
            <FeaturedWrapper label="Destacado esta semana" />
            <FeaturedWrapper label="No deberías perderte" />
            <VideoGrid detailed={true} />
        </div>
    );
}