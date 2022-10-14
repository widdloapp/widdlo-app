import style from "./channel-card.module.css";

export default function ChannelCard(props) {

    return (
        <div className={style["wrapper"]}>
            <div className={style["left"]}>
                <a href={"/channel/" + props.channel.id}>{props.channel.name}</a>
                <p>{props.channel.followers} seguidores</p>
            </div>
            <div className={style["right"]}>
                <button className="main">Seguir</button>
            </div>
        </div>
    );
}