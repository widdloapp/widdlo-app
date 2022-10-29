import style from "./channel-popup.module.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../../../shared/utils/token/api.js";

export default function ChannelPopup(props) {

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', `channel/${props.id}`).then(res => {
            setData(res.channel);
            setLoaded(true);
        })
    }, []);

    if (loaded) {return (
        <div className={style["wrapper"]}>
            <div className={style["wrapper"]}>
                <h1><mark>{data.username}</mark></h1>
                <p>{data.followers} seguidores</p>
            </div>
            <hr className="spaced" />
            <div className={style["wrapper"]}>
                <h2>Seguidor desde</h2>
                <h3>11 de mayo de 2022</h3>
            </div>
            <hr className="spaced" />
            <div className={style["wrapper"]}>
                <h2>En Widdlo desde</h2>
                <h3>{data.date}</h3>
            </div>
            <hr className="spaced" />
            <div className={style["footer"]}>
                <Link to={`/channel/${data.id}`} className="styled-text">
                    <button className="main full">Ir a su canal</button>
                </Link>
            </div>
        </div>
    );

    }
}