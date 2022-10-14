import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

export default function Auth() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <button className="main" onClick={onOpen}>Inicia sesión o regístrate</button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
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
        </>
    )
}
