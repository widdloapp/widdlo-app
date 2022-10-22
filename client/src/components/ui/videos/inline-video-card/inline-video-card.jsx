import style from "./inline-video-card.module.css";
import {Link} from "react-router-dom";

export default function InlineVideoCard(props) {

    return (
        <Link to={`/watch/${props.video.id}`}>
            <div className={style["video-card"]}>
                <img className="undraggable" width={150} height={100} src={props.video.thumbnail} />
                <div className={style["container"]}>
                    <div className={style["wrapper"]}>
                        <p>{props.video.title}</p>
                        <p>{props.video.views} visualizaciones</p>
                        <p>{props.video.channel.name}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
