import style from "./search-bar.module.css";

export default function SearchBar() {

    return (
        <div>
            <input className={style["search-bar"]} placeholder="Búsqueda..." prefix={<i className="fa-light fa-magnifying-glass" />} showClear></input>
        </div>
    );
}