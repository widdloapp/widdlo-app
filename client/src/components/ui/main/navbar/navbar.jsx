import SearchBar from "../../input/search-bar";
import {Button} from "@douyinfe/semi-ui";

import style from "./navbar.module.css";

export default function Navbar() {

    return (
        <div className={style["navbar"]}>
            <SearchBar />
            <Button>Iniciar sesión</Button>
        </div>
    );
}