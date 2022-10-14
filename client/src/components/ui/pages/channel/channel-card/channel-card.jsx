import style from "./channel-card.module.css";

export default function ChannelCard(props) {

    return (
        <div className={style["wrapper"]}>
            <div className={style["left"]}>
                <p>{props.name}</p>
                <p>{props.followers} seguidores</p>
            </div>
            <div className={style["right"]}>
                <button className="main">Seguir</button>
            </div>
        </div>
    );
}