import style from "./required-account-bar.module.css";
import AuthModal from "../modal/auth/auth-modal.jsx";

export default function RequiredAccountBar(props) {

    return (
        <div className={style["wrapper"]}>
            <p>{props.value}</p>
            <div className={style["content-wrapper"]}>
                <AuthModal />
            </div>
        </div>
    );
}