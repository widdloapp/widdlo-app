import style from "./home-sidebar.module.css";
import {Link} from "react-router-dom";
import React from "react";

export default function HomeSidebar() {

    return (
        <div className={style["wrapper"]}>
            <Link><button className="section"><i className="fa-light fa-house" />Destacado</button></Link>
            <button className="section"><i className="fa-light fa-clock-two-thirty" />Reciente</button>
            <button className="section"><i className="fa-light fa-arrow-rotate-left" />Antiguo</button>
            <button className="section"><i className="fa-light fa-arrow-trend-up" />Más visto</button>
        </div>
    );
}