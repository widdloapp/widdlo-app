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

export default function AuthModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Fragment>
            <button className="main" onClick={onOpen}>Inicia sesión o regístrate</button>

            <Modal bg={"gray"} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <h1>Comienza tu aventura.</h1>
                    <ModalCloseButton />
                    <ModalBody>
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
