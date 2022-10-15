import {useContext} from "react";
import {AccountContext} from "../../../../../../App.jsx";

import style from "./account-bar.module.css";

export default function AccountBar() {

    const account = useContext(AccountContext).user;

    return (
        <button className="main">Hola, {account.name}</button>
    )
}