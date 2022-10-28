import ChannelGrid from "../../../../../videos/video-grid/channel-grid/channel-grid";
import style from "./offline-stream.module.css";
import {Fragment} from "react";
import PageHeader from "../../../../../main/page-header/page-header";

export default function OfflineStream(props) {


    return (
        <div className={style["wrapper"]}>
            <PageHeader title="¡Fuera de línea!" content={
                <Fragment>
                    <p>Ahora mismo, no hay ninguna emisión en este canal. Descubre más contenido aquí.</p>
                    <ChannelGrid channel={props.channel} />
                </Fragment>
            } />
        </div>
    );
}