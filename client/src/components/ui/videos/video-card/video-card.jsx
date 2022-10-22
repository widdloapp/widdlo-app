import style from "./video-card.module.css";
import {Link} from "react-router-dom";

export default function VideoCard(props) {

    return (
        <Link to={`/watch/${props.video.id}`}>
            <div className={style["video-card"]}>
                <div className={style["zoom-img"]}>
                    <img className="undraggable" src={props.video.thumbnail} />
                </div>
                <div className={style["box"]}>
                    <p>{props.video.title}</p>
                    <p>{props.video.views} visualizaciones</p>
                    <div hidden={!props.detailed}>
                        <p>{props.video.channel.name}</p>
                        <p>{props.video.channel.followers} seguidores</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}