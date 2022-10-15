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

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay className={style["modal-overlay"]} />
                <ModalContent className={style["modal-content"]}>
                    <ModalCloseButton className={style["modal-close-button"]} />
                    <ModalBody>
                        <h1>Comienza tu aventura.</h1>
                        <hr className="spaced" />
                        <p>a</p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}
