import style from "./login.module.css";
import {useToast} from "@chakra-ui/react";
import {api} from "../../../../../../shared/utils/token/api.js";

export default function Login() {

    const toast = useToast()

    const login = (event) => {
        event.preventDefault();

        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })

        api('POST', 'user/login').then(res => {
            setVideos(res);
            setLoaded(true);
        })
    }

    return (
        <form className={style["wrapper"]} onSubmit={login}>
            <input name="email" className="main" type="email" placeholder="Correo electrónico" />
            <input name="password" className="main" type="password" placeholder="Contraseña" />
            <input type="submit" value="Iniciar sesión" className="main" />
        </form>
    )
}
