import {
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";
import {Fragment} from "react";

export default function DrawerWrapper(props) {

    return (
        <Fragment>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                    {props.content}
                </DrawerBody>
            </DrawerContent>
        </Fragment>
    )
}