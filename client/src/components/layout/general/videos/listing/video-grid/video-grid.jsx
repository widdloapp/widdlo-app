import style from "./video-grid.module.css";

import { useState, useEffect } from "react";
import {IconButton, Input, InputGroup, InputLeftElement, Skeleton, Tooltip} from "@chakra-ui/react";

export default function VideoGrid() {

    const [loaded, setLoaded] = useState(true);

    return (
        <div className={style["wrapper"]}>
            <Skeleton isLoaded={loaded}>
                <h1>a</h1>
            </Skeleton>
        </div>
    );
}