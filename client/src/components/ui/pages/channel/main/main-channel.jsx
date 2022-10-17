import style from "./main-channel.module.css";
import VideoGrid from "../../../videos/video-grid/grid/video-grid.jsx";
import StreamButton from "../stream/stream-button/stream-button";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../../../shared/utils/token/api.js";

export default function MainChannel() {

    const { id } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', 'channel/' + id).then(res => {
            setData(res.channel);
            setLoaded(true);
        })
    }, []);

    return (
        <div className={style["header"]}>
            <img className={"undraggable unselectable"} src={`https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png`} />
            <div className={style["container"]}>
                <img className="avatar unselectable undraggable" src={data.avatar} />
                <div>
                    <p><mark>{data.name}</mark></p>
                    <p>{data.followers} seguidores</p>
                </div>
                <div className={style["buttons-wrapper"]}>
                    <StreamButton id={id} />
                    <button className="main">Seguir</button>
                    <button className="main">Apoyar</button>
                    <button className="main">Reportar</button>
                </div>
            </div>
            <div className={style["content"]}>
                <VideoGrid detailed={false} />
            </div>
        </div>
    );
}