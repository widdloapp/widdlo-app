import {Progress} from "@chakra-ui/react";
import {useGlobal} from "reactn";

import style from "./loading-bar.module.css";

export default function LoadingBar() {

    const [loading, setLoading] = useGlobal("loading");

    if (loading) {
        return (
            <div className={style["container"]}>
                <Progress className={style["bar"]} isIndeterminate />
            </div>
        );
    }
}