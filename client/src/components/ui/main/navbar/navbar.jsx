import SearchBar from "../../input/search-bar";

import style from "./navbar.module.css";
import AuthModal from "../account/modal/auth/auth-modal.jsx";

export default function Navbar() {

    return (
        <div className={style["navbar"]}>
            <a href="/" className="unselectable">Widdlo</a>
            <div className={style["search-bar-wrapper"]}>
                <SearchBar />
            </div>
            <div className={style["buttons-wrapper"]}>
                <button className="main">Ayuda</button>
                <button className="main">App</button>
                <AuthModal />
            </div>
        </div>
    );
}