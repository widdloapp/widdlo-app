import SearchBar from "../../input/search-bar";
import Auth from "../account/auth/auth.jsx";

import style from "./navbar.module.css";
import {AccountContext} from "../../../../App.jsx";
import {useContext} from "react";

export default function Navbar() {

    const context = useContext(AccountContext);

    return (
        <div className={style["navbar"]}>
            <a href="/" className="unselectable">Widdlo</a>
            <div className={style["search-bar-wrapper"]}>
                <SearchBar />
            </div>
            <div className={style["buttons-wrapper"]}>
                <button className="main">Ayuda</button>
                <button className="main">{JSON.stringify(context)}</button>
                <Auth />
            </div>
        </div>
    );
}