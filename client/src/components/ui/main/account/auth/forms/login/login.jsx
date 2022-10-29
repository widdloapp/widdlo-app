import style from "./login.module.css";
import {useToast} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {api} from "../../../../../../../shared/utils/token/api.js";
import {storeToken} from "../../../../../../../shared/utils/token/token.js";

export default function Login() {

    const toast = useToast();
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();

        api('POST', 'user/login', JSON.stringify({
            email: event.target[0].value,
            password: event.target[1].value
        })).then(res => {
            if (res.token) {
                storeToken(res.token);
                //navigate('/', { token: res.token });

                location.reload();
            } else {
                switch (res.statusCode) {
                    case 401:
                        toast({
                            title: 'Credenciales inválidas',
                            description: "Revisa los datos e inténtalo de nuevo.",
                            status: 'error',
                            position: 'bottom-right',
                            isClosable: true
                        })
                        break;
                    case 403:
                        toast({
                            title: 'Debe ser verificada',
                            description: "Completa la verificación para continuar.",
                            status: 'error',
                            position: 'bottom-right',
                            isClosable: true
                        })
                        break;
                    default:
                        toast({
                            title: 'Error',
                            description: "No se ha podido completar el proceso.",
                            status: 'error',
                            position: 'bottom-right',
                            isClosable: true
                        });
                }
            }
        })
    }

    return (
        <form className={style["wrapper"]} onSubmit={login}>
            <h1>Iniciar sesión</h1>
            <input name="email" required={true} className="main" type="email" placeholder="Correo electrónico" />
            <input name="password" required={true} className="main" type="password" placeholder="Contraseña" />
            <input type="submit" value="Iniciar sesión" className="main" />
        </form>
    )
}
