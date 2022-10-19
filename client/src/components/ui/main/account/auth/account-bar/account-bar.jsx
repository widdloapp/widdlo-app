import {useContext} from "react";
import {AccountContext} from "../../../../../../App.jsx";

import style from "./account-bar.module.css";
import {removeStoredToken} from "../../../../../../shared/utils/token/token.js";

export default function AccountBar() {

    const account = useContext(AccountContext).user;

    const logout = () => {
        removeStoredToken();
    }

    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <p>¡Hola, {account.name}!</p>
                <button onClick={logout} className="main">Salir</button>
            </div>
        </div>
    )
}