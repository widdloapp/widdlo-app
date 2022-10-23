import Error from "../error/error";
import {Fragment} from "react";
import RequiredAccountBar from "../required-account-bar/required-account-bar";

import style from "./account-required.module.css";

export default function AccountRequired() {

    return (
        <Error title="¡Necesitas una cuenta!" body={
            <Fragment>
                <div className={style["wrapper"]}>
                    <p>Si ya tienes una cuenta, adelante. Si no, ¡Créatela! Sólo te tomará unos segundos :)</p>
                    <RequiredAccountBar value="Necesitas una cuenta para continuar." />
                </div>
            </Fragment>
        } />
    );
}