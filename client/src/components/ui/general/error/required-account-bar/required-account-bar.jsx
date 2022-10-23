import style from "./required-account-bar.module.css";
import Auth from "../../../main/account/auth/auth.jsx";

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