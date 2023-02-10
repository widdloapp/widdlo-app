import SearchBar from "../../input/search-bar";
import Auth from "../account/auth/auth.jsx";

import style from "./navbar.module.css";
import {AccountContext} from "../../../../App.jsx";
import {Fragment, useContext} from "react";
import AccountBar from "../account/auth/account-bar/account-bar";
import {Tooltip} from "@chakra-ui/react";

export default function Navbar() {

    const account = useContext(AccountContext).user;

    return (
        <Fragment>
            <div className={style["navbar"]}>
                <a href="/" className="title unselectable">Widdlo</a>
                <div className={style["search-bar-wrapper"]}>
                    <SearchBar />
                </div>
                <div className={style["buttons-wrapper"]}>
                    <button className="main">Ayuda</button>
                    <Tooltip label='Obtener aplicación' placement='bottom'>
                        <button className="main">App</button>
                    </Tooltip>
                    {account ? <AccountBar /> : <Auth />}
                </div>
            </div>
        </Fragment>
    );
}