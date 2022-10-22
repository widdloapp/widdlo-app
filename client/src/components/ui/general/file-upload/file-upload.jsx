import style from "./file-upload.module.css";
import {Fragment} from "react";

export default function FileUpload() {

    return (
        <Fragment>
            <input className={style["uploader"]} type="file" />
        </Fragment>
    );
}