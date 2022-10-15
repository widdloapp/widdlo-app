import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

import style from "./modal.module.css";

export default function Modal() {

    const { isOpen, onClose } = useDisclosure()

    return (
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay className={style["modal-overlay"]} />
                <ModalContent className={style["modal-content"]}>
                    <ModalCloseButton className={style["modal-close-button"]} />
                    <ModalBody>
                        {props.content}
                    </ModalBody>
                </ModalContent>
            </Modal>
    )
}
