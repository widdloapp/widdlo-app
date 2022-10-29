import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import AccordionWrapper from "../../../../pages/channel/sidebar/accordion-wrapper/accordion-wrapper.jsx";

export default function StudioSidebar() {

    return (
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
    );
}