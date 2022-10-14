import style from "./not-found.module.css";

export default function NotFound() {

    return (
        <div className={style["container"]}>
            <div className={style["box"]}>
                <h1>¡Nada por aquí!</h1>
                <p>Hemos buscado por todas partes, de esquina a esquina, incluso por debajo de los sofás, pero no hemos encontrado nada.</p>
            </div>
        </div>
    );
}