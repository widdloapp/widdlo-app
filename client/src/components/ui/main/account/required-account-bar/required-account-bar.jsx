import style from "./required-account-bar.module.css";
import Auth from "../modal/auth/auth";

export default function RequiredAccountBar(props) {

    return (
        <div className={style["wrapper"]}>
            <p>{props.value}</p>
            <div className={style["content-wrapper"]}>
                <Auth />
            </div>
        </div>
    );
}