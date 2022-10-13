import SearchBar from "../../input/search-bar";

import style from "./navbar.module.css";

export default function Navbar() {

    return (
        <div className={style["navbar"]}>
            <a href="/">Widdlo</a>
            <SearchBar />
            <div>
                <button className="main">Ayuda</button>
                <button className="main">App</button>
                <button className="main">Iniciar sesión</button>
            </div>
        </div>
    );
}