import style from "./page-header.module.css";
import {useContext} from "react";
import {AccountContext} from "../../../../App.jsx";
import AccountRequired from "../../general/error/account-required/account-required.jsx";

export default function PageHeader(props) {

    const account = useContext(AccountContext).user;

    if (account) {
        return (
            <div className={style["wrapper"]}>
                <h1>{props.title}</h1>
                <hr className="spaced" />
                {props.content}
            </div>
        );
    } else {
        return (
            <AccountRequired />
        );
    }
}