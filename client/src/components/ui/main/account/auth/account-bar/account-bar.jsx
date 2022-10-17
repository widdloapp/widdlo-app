import {useContext} from "react";
import {AccountContext} from "../../../../../../App.jsx";

import style from "./account-bar.module.css";

export default function AccountBar() {

    const account = useContext(AccountContext).user;

    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <p>¡Hola, {account.name}!</p>
                <button className="main">Salir</button>
            </div>
        </div>
    )
}