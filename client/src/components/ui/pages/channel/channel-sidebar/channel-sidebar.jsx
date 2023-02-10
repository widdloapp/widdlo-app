import style from "./channel-sidebar.module.css";
import AccordionWrapper from "../sidebar/accordion-wrapper/accordion-wrapper";
import React, {Fragment, useContext, useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {api} from "../../../../../shared/utils/token/api.js";
import {AccountContext} from "../../../../../App.jsx";
import StudioSidebar from "../../../main/account/studio/studio-sidebar/studio-sidebar";

export default function ChannelSidebar() {

    const channel = useContext(AccountContext).channel;

    const { id } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', `channel/${id}`).then(res => {
            setData(res.channel);
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                <AccordionWrapper title="Inicio" content={
                    <Fragment>
                        <NavLink to={`/channel/${id}`} end><button className="section"><i className="fa-light fa-house" />Destacado</button></NavLink>
                        <NavLink to={`/channel/${id}/feed/latest`}><button className="section"><i className="fa-light fa-clock-two-thirty" />Reciente</button></NavLink>
                        <NavLink to={`/channel/${id}/feed/older`}><button className="section"><i className="fa-light fa-arrow-rotate-left" />Antiguo</button></NavLink>
                        <NavLink to={`/channel/${id}/feed/popular`}><button className="section"><i className="fa-light fa-arrow-trend-up" />Más visto</button></NavLink>
                    </Fragment>
                } />
                <AccordionWrapper title="Chat" content={
                    <Fragment>
                        {
                            data.chats.map((chat, key) =>
                                <NavLink key={key} to={"/channel/" + id + "/" + chat.id}>
                                    <button className="section uppercased"><i className="fa-light fa-message" />{chat.name}</button>
                                </NavLink>
                            )
                        }
                    </Fragment>
                } />
                <AccordionWrapper title="Comunidad" content={
                    <Fragment>
                    </Fragment>
                } />
                <div hidden={channel && channel.id !== id}>
                    <StudioSidebar />
                </div>
            </div>
        );
    }
}