import style from "./channel-card.module.css";
import {Link} from "react-router-dom";

export default function ChannelCard(props) {

    return (
        <div className={style["wrapper"]}>
            <Link to={`/channel/${props.channel.id}`}>
                <img className="avatar unselectable undraggable" src={props.channel.avatar} />
            </Link>
            <div>
                <a href={`/channel/${props.channel.id}`}><mark>{props.channel.name}</mark></a>
                <p>{props.channel.followers} seguidores</p>
            </div>
            <div>
                <button className="main">Seguir</button>
            </div>
        </div>
    );
}