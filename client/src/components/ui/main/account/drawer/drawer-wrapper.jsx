import {
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";
import {Fragment} from "react";

import style from "./drawer-wrapper.module.css";

export default function DrawerWrapper(props) {

    return (
        <Fragment>
            <DrawerOverlay className={style["drawer-overlay"]} />
            <DrawerContent className={style["drawer-content"]}>
                <DrawerCloseButton hidden={!props.closeable} className={style["drawer-close-button"]} />

                <DrawerBody>
                    {props.content}
                </DrawerBody>
            </DrawerContent>
        </Fragment>
    )
}