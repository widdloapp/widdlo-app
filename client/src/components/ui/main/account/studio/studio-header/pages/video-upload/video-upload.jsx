import style from "./video-upload.module.css";
import {api} from "../../../../../../../../shared/utils/token/api.js";

export default function VideoUpload() {

    const postVideo = (event) => {
        event.preventDefault();

        const body = new URLSearchParams();
        body.append("title", event.target[0].value);
        body.append("description", event.target[1].value);
        body.append("channel", "634c76b0b957c861d4741f28");
        api('POST', 'video', body).then(res => {

            }
        )
    };

    return (
        <div className={style["wrapper"]}>
            <p>¡Estamos deseando ver tu vídeo circulado por Widdlo!<br />Antes de nada, asegúrate que tu vídeo cumple con las <mark>Normas de la Comunidad</mark>.</p>
            <form className={style["wrapper"]} onSubmit={postVideo}>
                <input name="title" className="main" type="text" placeholder="Título" />
                <textarea name="description" className="main" placeholder="Descripción" />
                <input type="submit" value="Publicar" className="main" />
            </form>
        </div>
    );
}