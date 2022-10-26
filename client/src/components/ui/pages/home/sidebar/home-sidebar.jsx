import style from "./home-sidebar.module.css";
import {Link} from "react-router-dom";
import React, {Fragment, useContext} from "react";
import AccordionWrapper from "../../channel/sidebar/accordion-wrapper/accordion-wrapper.jsx";
import {AccountContext} from "../../../../../App.jsx";

export default function HomeSidebar() {

    const account = useContext(AccountContext).user;

    return (
        <div className={style["wrapper"]}>
            <AccordionWrapper title="Inicio" content={
                <Fragment>
                    <Link to="/"><button className="section"><i className="fa-light fa-house" />Destacado</button></Link>
                    <Link to="/feed/latest"><button className="section"><i className="fa-light fa-clock-two-thirty" />Reciente</button></Link>
                    <Link to="/feed/older"><button className="section"><i className="fa-light fa-arrow-rotate-left" />Antiguo</button></Link>
                    <Link to="/feed/popular"><button className="section"><i className="fa-light fa-arrow-trend-up" />Más visto</button></Link>
                </Fragment>
            } />
            <div hidden={!account}>
                <AccordionWrapper title="Widdlo Studio" content={
                    <Fragment>
                        <Link to="/studio/manage">
                            <button className="section"><i className="fa-light fa-video" /><p>Gestor de vídeos</p></button>
                        </Link>
                        <button className="section"><i className="fa-light fa-chart-simple" />Estadísticas</button>
                        <Link to="/studio/streams">
                            <button className="section"><i className="fa-light fa-signal-stream" />Emitir en directo</button>
                        </Link>
                        <Link to="/studio/profile">
                            <button className="section"><i className="fa-light fa-gear" />Ajustes</button>
                        </Link>
                    </Fragment>
                } />
            </div>
        </div>
    );
}