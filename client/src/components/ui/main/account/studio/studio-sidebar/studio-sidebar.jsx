import React, {Fragment} from "react";
import AccordionWrapper from "../../../../pages/channel/sidebar/accordion-wrapper/accordion-wrapper.jsx";
import {NavLink} from "react-router-dom";

export default function StudioSidebar() {

    return (
        <AccordionWrapper title="Widdlo Studio" content={
            <Fragment>
                <NavLink to="/studio/manage">
                    <button className="section"><i className="fa-light fa-video" /><p>Gestor de vídeos</p></button>
                </NavLink>
                <button className="section"><i className="fa-light fa-chart-simple" />Estadísticas</button>
                <NavLink to="/studio/streams">
                    <button className="section"><i className="fa-light fa-signal-stream" />Emitir en directo</button>
                </NavLink>
                <NavLink to="/studio/profile">
                    <button className="section"><i className="fa-light fa-gear" />Ajustes</button>
                </NavLink>
            </Fragment>
        } />
    );
}