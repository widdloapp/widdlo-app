import style from "./channel-sidebar.module.css";
import AccordionWrapper from "../sidebar/accordion-wrapper/accordion-wrapper";
import React, {Fragment, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {api} from "../../../../../shared/utils/token/api.js";

export default function ChannelSidebar(props) {

    const { id } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', 'channel/' + id).then(res => {
            setData(res.channel);
            setLoaded(true);
        })
    }, []);

    if (loaded) {
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
                        {
                            data.chats.map((chat, key) =>
                                <Link key={key}>
                                    <button className="section">{chat.name}</button>
                                </Link>
                            )
                        }
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
}