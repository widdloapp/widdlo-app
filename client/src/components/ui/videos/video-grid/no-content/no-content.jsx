import Error from "../../../general/error/error/error";

export default function NoContent() {

    return (
        <Error title="Sin contenido" body="Todavía no hay contenido disponible en este canal." />
    );
}