import style from "./profile-settings.module.css";
import {api} from "../../../../../../../../shared/utils/token/api.js";
import TipsSidebar from "../../../components/tips-sidebar/tips-sidebar";
import FileUpload from "../../../../../../general/file-upload/file-upload";
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";

export default function ProfileSettings() {

    const toast = useToast();
    const navigate = useNavigate();

    const postVideo = (event) => {
        event.preventDefault();

        const body = new FormData();
        body.append("title", event.target[0].value);
        body.append("description", event.target[1].value);
        body.append("thumbnail", event.target[2].files[0]);
        body.append("source", event.target[3].files[0]);
        api('POST', 'video', body).then(res => {
                try {
                    navigate(`/watch/${res.video.id}`);
                } catch (error) {
                    toast({
                        title: 'Error',
                        description: "No se ha podido completar el proceso.",
                        status: 'error',
                        position: 'bottom-right',
                        isClosable: true
                    });
                }
            }
        )
    };

    return (
        <div className={style["wrapper"]}>
            <TipsSidebar sidebar={
                <div className="tip-wrapper">
                    <div className="tip-box">
                        <p className="badge">Destacado</p>
                        <h1>Consigue mejores resultados</h1>
                        <hr className="spaced" />
                        <p>Consulta en este <a>artículo de nuestro blog</a> buenas prácticas a seguir para mejorar las estadísticas de tus vídeos.</p>
                    </div>
                    <div className="tip-box">
                        <h1>Asegúrate de cumplir la normativa</h1>
                        <hr className="spaced" />
                        <p>Revisa las <a>Normativa de Comunidad</a> para asegurarte que cumples con las directrices y evitar que tu contenido sea retirado.</p>
                    </div>
                </div>
            } content={
                <div>
                    <form className={style["wrapper"]} onSubmit={postVideo}>
                        <input required={true} name="title" className="main" type="text" placeholder="Título" />
                        <textarea name="description" className="main" placeholder="Descripción" />
                        <p>Miniatura</p>
                        <FileUpload />
                        <p>Archivo de vídeo</p>
                        <FileUpload />
                        <input type="submit" value="Publicar" className="important" />
                    </form>
                </div>
            } />
        </div>
    );
}