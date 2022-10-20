import style from "./video-upload.module.css";

export default function VideoUpload() {

    return (
        <div className={style["wrapper"]}>
            <form className={style["wrapper"]}>
                <input name="email" className="main" type="email" placeholder="Correo electrónico" />
                <input name="password" className="main" type="password" placeholder="Contraseña" />
                <input type="submit" value="Iniciar sesión" className="main" />
            </form>
        </div>
    );
}