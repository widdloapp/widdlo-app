import style from "./navbar.module.css";
import {Button, Divider, Icon, IconButton, Tooltip} from "@chakra-ui/react";

export default function Navbar() {

    return (
        <div className={style["content-wrapper"]}>
            <Tooltip label="Aplicación móvil">
                <IconButton className="icon" icon={<i className="fa-light fa-mobile"></i>} />
            </Tooltip>
        </div>
    );
}