import {Input} from "@douyinfe/semi-ui";

import style from "./search-bar.module.css";

export default function SearchBar() {

    return (
        <div>
            <Input className={style["search-bar"]} placeholder="Búsqueda..." prefix={<i className="fa-light fa-magnifying-glass" />} showClear></Input>
        </div>
    );
}