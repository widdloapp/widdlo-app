import {useContext} from "react";
import {AccountContext} from "../../../../../../App.jsx";

import style from "./account-bar.module.css";
import {removeStoredToken} from "../../../../../../shared/utils/token/token.js";
import {useNavigate} from "react-router-dom";

export default function AccountBar() {

    const account = useContext(AccountContext).user;

    const navigate = useNavigate();

    const logout = () => {
        removeStoredToken();
        location.reload();
    }

    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <p>¡Hola, {account.username}!</p>
                <button onClick={logout} className="main">Salir</button>
            </div>
        </div>
    )
}