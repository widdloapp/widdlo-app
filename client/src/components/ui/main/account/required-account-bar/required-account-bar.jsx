import style from "./required-account-bar.module.css";

export default function RequiredAccountBar(props) {

    return (
        <div className={style["wrapper"]}>
            <p>{props.value}</p>
            <div className={style["content-wrapper"]}>
                <button className="main">Iniciar sesión</button>
                <button className="main">Regístrate</button>
            </div>
        </div>
    );
}