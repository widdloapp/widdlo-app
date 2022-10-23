import style from "./register.module.css";
import {useToast} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {api} from "../../../../../../../shared/utils/token/api.js";
import {storeToken} from "../../../../../../../shared/utils/token/token.js";

export default function Register() {

    const toast = useToast();
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();

        const body = new URLSearchParams();
        body.append("name", event.target[0].value);
        body.append("username", event.target[1].value);
        body.append("email", event.target[2].value);
        body.append("password", event.target[3].value);

        api('POST', 'user/register', body).then(res => {
            if (res.token) {
                storeToken(res.token);
                //navigate('/', { token: res.token });

                location.reload();
            } else {
                toast({
                    title: 'Error',
                    description: "No se ha podido completar el proceso.",
                    status: 'error',
                    position: 'bottom-right',
                    isClosable: true
                })
            }
        })
    }

    return (
        <form className={style["wrapper"]} onSubmit={login}>
            <h1>Comencemos</h1>
            <input name="name" required={true} className="main" type="text" placeholder="Nombre completo" />
            <input name="username" required={true} className="main" type="text" placeholder="Nombre de usuario" />
            <input name="email" required={true} className="main" type="email" placeholder="Correo electrónico" />
            <input name="password" required={true} className="main" type="password" placeholder="Contraseña" />
            <input type="submit" value="Iniciar sesión" className="main" />
        </form>
    )
}
