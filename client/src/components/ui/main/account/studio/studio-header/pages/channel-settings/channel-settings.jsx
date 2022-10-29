import style from "./channel-settings.module.css";
import {api} from "../../../../../../../../shared/utils/token/api.js";
import TipsSidebar from "../../../components/tips-sidebar/tips-sidebar";
import FileUpload from "../../../../../../general/file-upload/file-upload";
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";

export default function ChannelSettings() {

    const toast = useToast();
    const navigate = useNavigate();

    const postVideo = (event) => {
        event.preventDefault();

        const body = new FormData();
        body.append("name", event.target[0].value);
        body.append("avatar", event.target[1].files[0]);
        try {
            api('PATCH', 'channel', body).then(res => {
                toast({
                    title: 'Hecho',
                    description: "Completado.",
                    status: 'success',
                    position: 'bottom-right',
                    isClosable: true
                });
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: "No se ha podido completar el proceso.",
                status: 'error',
                position: 'bottom-right',
                isClosable: true
            });
        }
    };

    return (
        <div className={style["wrapper"]}>
            <TipsSidebar sidebar={
                <div className="tip-wrapper">
                    <div className="tip-box">
                        <h1>Privacidad</h1>
                        <hr className="spaced" />
                        <p>Consulta en este <a>artículo de nuestro blog</a> el tratamiento de tus datos.</p>
                    </div>
                </div>
            } content={
                <div>
                    <form className={style["wrapper"]} onSubmit={postVideo}>
                        <input required={true} name="name" className="main" type="text" placeholder="Nombre" />
                        <p>Avatar</p>
                        <FileUpload />
                        <input type="submit" value="Continuar" className="important" />
                    </form>
                </div>
            } />
        </div>
    );
}