import style from "./channel-sidebar.module.css";
import AccordionWrapper from "../sidebar/accordion-wrapper/accordion-wrapper";
import {Fragment} from "react";

export default function ChannelSidebar() {

    return (
        <div className={style["wrapper"]}>
            <AccordionWrapper title="Inicio" content={
                <Fragment>
                    <button className="section">Destacado</button>
                    <button className="section">Reciente</button>
                    <button className="section">Antiguo</button>
                    <button className="section">Más visto</button>
                </Fragment>
            } />
            <AccordionWrapper title="Chat" content={
                <Fragment>
                    <button className="section">Destacado</button>
                    <button className="section">Reciente</button>
                    <button className="section">Antiguo</button>
                    <button className="section">Más visto</button>
                </Fragment>
            } />
            <AccordionWrapper title="Widdlo Studio" content={
                <Fragment>
                    <button className="section">Gestor de vídeos</button>
                    <button className="section">Estadísticas</button>
                    <button className="section">Emitir en directo</button>
                    <button className="section">Ajustes</button>
                </Fragment>
            } />
        </div>
    );
}