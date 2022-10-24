import style from "./channel-main.module.css";
import VideoGrid from "../../../videos/video-grid/grid/video-grid.jsx";
import StreamButton from "../stream/stream-button/stream-button";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../../../shared/utils/token/api.js";
import FollowButton from "../components/follow-button/follow-button";
import ChannelGrid from "../../../videos/video-grid/channel-grid/channel-grid";

export default function ChannelMain() {

    const { id } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', `channel/${id}`).then(res => {
            setData(res.channel);
            setLoaded(true);
        })
    }, [id]);

    return (
        <div className={style["header"]}>
            <img className={"undraggable unselectable"} src={`https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png`} />
            <div className={style["container"]}>
                <img className="avatar unselectable undraggable" src={data.avatar} />
                <div>
                    <p><mark>{data.username}</mark></p>
                    <p>{data.followers} seguidores</p>
                </div>
                <div className={style["buttons-wrapper"]}>
                    <StreamButton id={id} />
                    <FollowButton channel={id} />
                    <button className="main">Apoyar</button>
                    <button className="main">Reportar</button>
                </div>
            </div>
            <div className={style["content"]}>
                <ChannelGrid channel={data} />
            </div>
        </div>
    );
}