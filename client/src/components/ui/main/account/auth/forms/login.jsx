import style from "./login.module.css";
import {useToast} from "@chakra-ui/react";
import {api} from "../../../../../../shared/utils/token/api.js";
import {storeToken} from "../../../../../../shared/utils/token/token.js";

export default function Login() {

    const toast = useToast()

    const login = (event) => {
        event.preventDefault();

        const body = new URLSearchParams();
        body.append("email", event.target[0].value);
        body.append("password", event.target[1].value);
        api('POST', 'user/login', body).then(res => {
            if (res.token) {
                storeToken(res.token);

                toast({
                    title: 'Correcto',
                    description: "Has iniciado sesión correctamente.",
                    status: 'success',
                    position: 'bottom-right',
                    isClosable: true
                })
            } else if (res.statusCode == 401) {
                toast({
                    title: 'Credenciales inválidas',
                    description: "Revisa los datos e inténtalo de nuevo.",
                    status: 'error',
                    position: 'bottom-right',
                    isClosable: true
                })
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
            <input name="email" required={true} className="main" type="email" placeholder="Correo electrónico" />
            <input name="password" required={true} className="main" type="password" placeholder="Contraseña" />
            <input type="submit" value="Iniciar sesión" className="main" />
        </form>
    )
}
