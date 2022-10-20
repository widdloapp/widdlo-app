import style from "./video-upload.module.css";
import {api} from "../../../../../../../../shared/utils/token/api.js";
import TipsSidebar from "../../../components/tips-sidebar/tips-sidebar";
import {Fragment} from "react";

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
            <TipsSidebar sidebar={
                <div className="tip-wrapper">
                    <div className="tip-box">
                        <h1>Consigue mejores resultados</h1>
                        <hr className="spaced" />
                        <p>Consulta en este <a>artículo de nuestro blog</a> buenas prácticas a seguir para mejorar las estadísticas de tus vídeos.</p>
                    </div>
                    <div className="tip-box">
                        <h1>Consigue mejores resultados</h1>
                        <hr className="spaced" />
                        <p>Consulta en este <a>artículo de nuestro blog</a> buenas prácticas a seguir para mejorar las estadísticas de tus vídeos.</p>
                    </div>
                </div>
            } content={
                <div>
                    <p>¡Estamos deseando ver tu vídeo circulado por Widdlo!<br />Antes de nada, asegúrate que tu vídeo cumple con las <a href="https://google.es">Normas de la Comunidad</a>.</p>
                    <form className={style["wrapper"]} onSubmit={postVideo}>
                        <input required={true} name="title" className="main" type="text" placeholder="Título" />
                        <textarea name="description" className="main" placeholder="Descripción" />
                        <input type="submit" value="Publicar" className="main" />
                    </form>
                </div>
            } />
        </div>
    );
}