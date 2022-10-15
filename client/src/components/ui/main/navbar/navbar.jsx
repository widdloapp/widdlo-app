import SearchBar from "../../input/search-bar";
import Auth from "../account/auth/auth.jsx";

import style from "./navbar.module.css";
import {AccountContext} from "../../../../App.jsx";
import {useContext} from "react";
import AccountBar from "../account/auth/account-bar/account-bar";

export default function Navbar() {

    const account = useContext(AccountContext).user;

    return (
        <div className={style["navbar"]}>
            <a href="/" className="unselectable">Widdlo</a>
            <div className={style["search-bar-wrapper"]}>
                <SearchBar />
            </div>
            <div className={style["buttons-wrapper"]}>
                <button className="main">Ayuda</button>
                <button className="main">App</button>
                {account ? <AccountBar /> : <Auth/>}
            </div>
        </div>
    );
}