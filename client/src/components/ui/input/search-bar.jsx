import style from "./search-bar.module.css";

export default function SearchBar() {

    return (
        <div className={style["search-bar"]}>
            <i className="fa-light fa-magnifying-glass"></i>
            <input placeholder="Búsqueda..."/>
        </div>
    );
}