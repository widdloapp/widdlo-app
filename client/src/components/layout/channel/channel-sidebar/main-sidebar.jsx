import style from "./main-sidebar.module.css";
import {Button, Divider} from "@chakra-ui/react";

export default function MainSidebar() {

    return (
        <div className={style["content-wrapper"]}>
            <Button className="selection">Último</Button>
            <Button className="selection">Antiguo</Button>
            <Button className="selection">Más visto</Button>
            <Divider />
            <Button className="selection">Estadísticas</Button>
            <Button className="selection">Información</Button>
        </div>
    );
}