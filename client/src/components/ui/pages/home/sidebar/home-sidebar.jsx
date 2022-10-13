import style from "./home-sidebar.module.css";

export default function HomeSidebar() {

    return (
        <div className={style["wrapper"]}>
            <button className="section">Descubrimiento</button>
            <button className="section">Reciente</button>
            <button className="section">Tendencia</button>
        </div>
    );
}