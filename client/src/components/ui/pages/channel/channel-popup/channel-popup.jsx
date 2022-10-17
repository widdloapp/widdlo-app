import style from "./channel-popup.module.css";
import {Link} from "react-router-dom";

export default function ChannelPopup(props) {

    return (
        <div className={style["wrapper"]}>
            <div className={style["wrapper"]}>
                <h1>a</h1>
                <p>a seguidores</p>
            </div>
            <hr className="spaced" />
            <div className={style["wrapper"]}>
                <h2>Seguidor desde</h2>
                <h3>11 de mayo de 2022</h3>
            </div>
            <hr className="spaced" />
            <div className={style["wrapper"]}>
                <h2>En Widdlo desde</h2>
                <h3>a</h3>
            </div>
            <hr className="spaced" />
            <div className={style["footer"]}>
                <Link to={`/channel/${props.id}`} className="styled-text">
                    <button className="main full">Ir a su canal</button>
                </Link>
            </div>
        </div>
    );
}