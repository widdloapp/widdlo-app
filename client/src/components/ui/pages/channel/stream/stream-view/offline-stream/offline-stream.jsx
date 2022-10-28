import ChannelGrid from "../../../../../videos/video-grid/channel-grid/channel-grid";
import style from "./offline-stream.module.css";

export default function OfflineStream(props) {


    return (
        <div className={style["wrapper"]}>
            <h1>¡Fuera de línea!</h1>
            <p>Ahora mismo, no hay ninguna emisión en este canal. Descubre más contenido aquí:</p>
            <hr className="spaced" />
            <ChannelGrid channel={props.channel} />
        </div>
    );
}