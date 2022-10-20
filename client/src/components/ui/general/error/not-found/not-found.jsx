import Error from "../error/error";

export default function NotFound() {

    return (
        <Error title="¡Nada por aquí!" body="Hemos buscado por todas partes, de esquina a esquina, incluso por debajo de los sofás, pero no hemos encontrado nada." />
    );
}