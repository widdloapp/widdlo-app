import Error from "../error/error";
import {Fragment} from "react";
import RequiredAccountBar from "../../../main/account/required-account-bar/required-account-bar";

export default function AccountRequired() {

    return (
        <Error title="¡Necesitas una cuenta!" body={
            <Fragment>
                <p>Si ya tienes una cuenta, adelante. Si no, ¡Créatela! Sólo te tomará unos segundos :)</p>
                <RequiredAccountBar value="Necesitas una cuenta para continuar." />
            </Fragment>
        } />
    );
}