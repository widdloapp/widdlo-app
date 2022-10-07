import style from "./navbar.module.css";
import {IconButton, Input, InputGroup, InputLeftElement, Tooltip} from "@chakra-ui/react";

export default function Navbar() {

    return (
        <div className={style["wrapper"]}>
            <Tooltip label="Aplicación móvil">
                <IconButton icon={<i className="fa-light fa-mobile"></i>} />
            </Tooltip>
            <Tooltip label="Centro de recursos">
                <IconButton icon={<i className="fa-light fa-book"></i>} />
            </Tooltip>
            <InputGroup className={style["input-wrapper"]}>
                <InputLeftElement pointerEvents='none' children={<i className="fa-light fa-book"></i>} />
                <Input className={style["search-bar"]} variant='filled' autoComplete="false" type="text" placeholder='Búsqueda...' />
            </InputGroup>
        </div>
    );
}