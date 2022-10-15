import style from "./login.module.css";

export default function Login() {

    return (
        <div className={style["wrapper"]}>
            <input className="main" type="email" placeholder="Correo electrónico" />
            <input className="main" type="password" placeholder="Contraseña" />
            <button className="main">Iniciar sesión</button>
        </div>
    )
}
