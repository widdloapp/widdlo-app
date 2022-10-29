import {useGlobal} from "reactn";

import style from "./progress-bar.module.css";

import {useEffect, useState} from "react";
import LoadingBar from "react-top-loading-bar";

export default function ProgressBar() {

    const [loading, setLoading] = useGlobal("loading");
    const [progress,setProgress] = useState(0);

    useEffect(() => {
        loading ? setProgress(30) : setProgress(100);
    }, [loading])

    return (
        <LoadingBar className={style["bar"]} progress={progress} onLoaderFinished={() => setProgress(0)} />
    );
}