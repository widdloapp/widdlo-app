import style from "./video-manager.module.css";
import {Link} from "react-router-dom";

export default function VideoManager() {

    return (
        <div className={style["wrapper"]}>
            <Link to="/studio/upload">
                <button className="important">Nuevo vídeo</button>
            </Link>
        </div>
    );
}