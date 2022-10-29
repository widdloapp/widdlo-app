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
                    <Link to="/feed/latest"><button className="section"><i className="fa-light fa-clock-two-thirty" />Reciente</button></Link>
                    <Link to="/feed/older"><button className="section"><i className="fa-light fa-arrow-rotate-left" />Antiguo</button></Link>
                    <Link to="/feed/popular"><button className="section"><i className="fa-light fa-arrow-trend-up" />Más visto</button></Link>
                </Fragment>
            } />
        </div>
    );
}