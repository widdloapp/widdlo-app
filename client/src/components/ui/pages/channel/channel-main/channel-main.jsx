import style from "./channel-main.module.css";
import StreamButton from "../stream/stream-button/stream-button";
import FollowButton from "../components/follow-button/follow-button";
import ChannelGrid from "../../../videos/video-grid/channel-grid/channel-grid";
import DynamicAvatar from "../../../general/avatar/dynamic-avatar.jsx";
import TextIconWrapper from "../../../general/text-icon-wrapper/text-icon-wrapper";
import VerifiedBadge from "../../../general/badges/verified-badge";
import VerifiedLabel from "../../../general/badges/VerifiedLabel";

export default function ChannelMain(props) {

    return (
        <div>
            <div className={style["header"]}>
                <div className={style["channel-wrap"]}>
                    <img className={"undraggable unselectable"} src={`https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png`} />
                    <div className={style["container"]}>
                        <DynamicAvatar size={40} source={props.data.avatar} id={props.data.id} />
                        <div>
                            <TextIconWrapper first={<p><mark>{props.data.username}</mark></p>} second={<VerifiedBadge verified={props.data.verified} />} />
                            <p>{props.data.followers} seguidores</p>
                            <VerifiedLabel data={props.data} />
                        </div>
                        <div className={style["buttons-wrapper"]}>
                            <StreamButton id={props.id} />
                            <FollowButton channel={props.id} />
                            <button className="main">Apoyar</button>
                            <button className="main">Reportar</button>
                        </div>
                    </div>
                </div>
                <div className={style["header-background"]} />
            </div>
            <div className={style["content"]}>
                <ChannelGrid channel={props.data.id} />
            </div>
        </div>

    );
}