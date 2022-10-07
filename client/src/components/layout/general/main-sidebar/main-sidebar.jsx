import style from "./main-sidebar.module.css";
import {Button, Divider} from "@chakra-ui/react";

export default function MainSidebar() {

    return (
        <div className={style["content-wrapper"]}>
            <Button className="selection">Inicio</Button>
            <Button className="selection">Inicio</Button>
        </div>
    );
}