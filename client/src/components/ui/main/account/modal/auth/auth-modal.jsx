import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {Fragment} from "react";

import style from "./auth-modal.module.css";

export default function AuthModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Fragment>
            <button className="main" onClick={onOpen}>Inicia sesión o regístrate</button>

            <Modal  className={style["modal"]}closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className={style["modal-overlay"]}>
                    <ModalCloseButton />
                    <ModalBody>
                        <h1>Comienza tu aventura.</h1>
                        <hr className="spaced" />
                        <p>a</p>
                    </ModalBody>

                    <ModalFooter>
                        <p>¿Necesitas ayuda?</p>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}
