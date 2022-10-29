import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {api, stream} from "../../../../../../shared/utils/token/api.js";

export default function StreamButton(props) {

    const [live, setLive] = useState(false);

    useEffect(() => {
        setLive(false);
        api('GET', `stream/${props.id}`).then(res => {
            if (res.stream) {
                stream(res.stream.id).then(res => {
                    if (res.status == 200) {
                        setLive(true);
                    }
                })
            }
        })
    }, [props.id]);

    if (live) {
        return (
            <Link to={"/channel/" + props.id + "/stream"}><button className="main live">En directo</button></Link>
        );
    } else {
        return (
            <Link to={"/channel/" + props.id + "/stream"}><button className="main">Desconectado</button></Link>
        );
    }
}