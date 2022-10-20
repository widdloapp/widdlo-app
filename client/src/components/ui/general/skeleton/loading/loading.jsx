import style from "./loading.module.css";
import {Spinner} from "@chakra-ui/react";

export default function Loading() {

    return (
        <div className={style["container"]}>
            <Spinner className={style["spinner"]} />
        </div>
    );
}