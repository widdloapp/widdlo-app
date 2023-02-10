import style from "./stream-settings.module.css";
import TipsSidebar from "../../../components/tips-sidebar/tips-sidebar";
import {Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {api} from "../../../../../../../../shared/utils/token/api.js";

export default function StreamSettings() {

    const [loaded, setLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});

    const handleClick = () => setShow(!show);

    useEffect(() => {
        api('GET', 'stream').then(res => {
                setData(res);
                setLoaded(true);
            }
        )
    }, []);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                <TipsSidebar sidebar={
                    <div className="tip-wrapper">
                        <div className="tip-box">
                            <h1>¿Cómo gestionar mis vídeos?</h1>
                            <hr className="spaced" />
                            <p>Obtén consejos <a>aquí</a> sobre cómo mejorar la visibilidad de tu canal y su actividad.</p>
                        </div>
                    </div>
                } content={
                    <div>
                        <p>Comienza una retransmisión en directo e impresiona al público. Comparte con ellos momentos únicos con interacción en tiempo real.</p>
                        <hr className="spaced" />
                        <h1>Servidor RTMP</h1>
                        <p>rtmp://stream.widdlo.com</p>
                        <hr className="spaced" />
                        <h1>Clave de retransimisión</h1>
                        <p>IMPORTANTE: No la compartas con nadie en quien no confíes, cualquiera con esta clave podrá comenzar a retransmitir en tu canal.</p>
                        <InputGroup size='md'>
                            <input className={style["key"]} disabled={true} type={show ? 'text' : 'password'} value={data.stream.key} />
                            <InputRightElement>
                                <button className="tool" onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>
                            </InputRightElement>
                        </InputGroup>
                        <h1>Obs Studio</h1>
                        <InputGroup size='md'>
                            <input className={style["key"]} disabled={true} type={show ? 'text' : 'password'} value={`${data.stream.id}?pass=${data.stream.key}`} />
                            <InputRightElement>
                                <button className="tool" onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>
                            </InputRightElement>
                        </InputGroup>
                    </div>
                } />
            </div>
        );
    }
}