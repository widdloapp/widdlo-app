import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {stream} from "../../../../../../shared/utils/token/api.js";

export default function StreamButton(props) {

    const [live, setLive] = useState(false);

    useEffect(() => {
        stream(props.id).then(res => {
            if (res.status == 200) {
                setLive(true)
            }
        })
    }, []);

    if (live) {
        return (
            <button>En directo</button>
        );
    } else {
        return (
            <Link to={"/channel/" + props.id + "/stream"}><button className="main">Desconectado</button></Link>
        );
    }
}