import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay, PopoverTrigger,
} from "@chakra-ui/react";
import {Fragment} from "react";

import style from "./drawer-wrapper.module.css";

export default function DrawerWrapper(props) {

    return (
        <Fragment>
            {props.trigger}
            <Drawer isOpen={props.isOpen}>
                <DrawerOverlay className={style["drawer-overlay"]} />
                <DrawerContent className={style["drawer-content"]}>
                    <DrawerCloseButton className={style["drawer-close-button"]} />

                    <DrawerBody>
                        {props.content}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Fragment>
    )
}