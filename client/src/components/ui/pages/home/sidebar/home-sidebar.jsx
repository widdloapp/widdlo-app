import style from "./home-sidebar.module.css";
import {NavLink} from "react-router-dom";
import React, {Fragment} from "react";
import AccordionWrapper from "../../channel/sidebar/accordion-wrapper/accordion-wrapper.jsx";
import StudioSidebar from "../../../main/account/studio/studio-sidebar/studio-sidebar.jsx";

export default function HomeSidebar() {

    return (
        <div className={style["wrapper"]}>
            <AccordionWrapper title="Inicio" content={
                <Fragment>
                    <NavLink to="/" end><button className="section"><i className="fa-light fa-house" />Destacado</button></NavLink>
                    <NavLink to="/feed/latest"><button className="section"><i className="fa-light fa-clock-two-thirty" />Reciente</button></NavLink>
                    <NavLink to="/feed/older"><button className="section"><i className="fa-light fa-arrow-rotate-left" />Antiguo</button></NavLink>
                    <NavLink to="/feed/popular"><button className="section"><i className="fa-light fa-arrow-trend-up" />Más visto</button></NavLink>
                </Fragment>
            } />
            <StudioSidebar />
        </div>
    );
}