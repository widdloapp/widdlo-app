import SearchBar from "../../input/search-bar";
import {Button, Tooltip} from "@douyinfe/semi-ui";

import style from "./navbar.module.css";

export default function Navbar() {

    return (
        <div className={style["navbar"]}>
            <h1>Widdlo</h1>
            <SearchBar />
            <div>
                <Tooltip content="Aplicación móvil">
                    <Button className="main" icon={<i className="fa-light fa-mobile-button" />} aria-label="App"/>
                </Tooltip>
                <Tooltip content="Recursos">
                    <Button className="main" icon={<i className="fa-light fa-book" />} aria-label="Help"/>
                </Tooltip>
                <Button className="main">Iniciar sesión</Button>
                <Button className="main">Iniciar sesión</Button>
            </div>
        </div>
    );
}