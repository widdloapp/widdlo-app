import style from "./channel-card.module.css";

export default function ChannelCard(props) {

    return (
        <div className={style["wrapper"]}>
            <img className="avatar unselectable undraggable" src={props.channel.avatar} />
            <div>
                <a href={"/channel/" + props.channel.id}>{props.channel.name}</a>
                <p>{props.channel.followers} seguidores</p>
            </div>
            <div>
                <button className="main">Seguir</button>
            </div>
        </div>
    );
}