import style from "./home-sidebar.module.css";
import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import AccordionWrapper from "../../channel/sidebar/accordion-wrapper/accordion-wrapper.jsx";

export default function HomeSidebar() {

    return (
        <div className={style["wrapper"]}>
            <AccordionWrapper title="Inicio" content={
                <Fragment>
                    <Link to="/"><button className="section"><i className="fa-light fa-house" />Destacado</button></Link>
                    <button className="section"><i className="fa-light fa-clock-two-thirty" />Reciente</button>
                    <button className="section"><i className="fa-light fa-arrow-rotate-left" />Antiguo</button>
                    <button className="section"><i className="fa-light fa-arrow-trend-up" />Más visto</button>
                </Fragment>
            } />
            <AccordionWrapper title="Widdlo Studio" content={
                <Fragment>
                    <Link to="/studio/manage">
                        <button className="section"><i className="fa-light fa-video" /><p>Gestor de vídeos</p></button>
                    </Link>
                    <button className="section"><i className="fa-light fa-chart-simple" />Estadísticas</button>
                    <button className="section"><i className="fa-light fa-signal-stream" />Emitir en directo</button>
                    <button className="section"><i className="fa-light fa-gear" />Ajustes</button>
                </Fragment>
            } />
        </div>
    );
}