import style from "./channel-card.module.css";
import {Link} from "react-router-dom";
import FollowButton from "../components/follow-button/follow-button";
import DynamicAvatar from "../../../general/avatar/dynamic-avatar.jsx";

export default function ChannelCard(props) {

    return (
        <div className={style["wrapper"]}>
            <Link to={`/channel/${props.channel.id}`}>
                <DynamicAvatar size={20} source={props.channel.avatar} id={props.channel.id} />
            </Link>
            <div>
                <a href={`/channel/${props.channel.id}`}><mark>{props.channel.username}</mark></a>
                <p>{props.channel.followers} seguidores</p>
            </div>
            <div>
                <FollowButton channel={props.channel.id} />
            </div>
        </div>
    );
}