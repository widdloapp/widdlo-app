import {useContext} from "react";
import {AccountContext} from "../../../../../../App.jsx";

import style from "./account-bar.module.css";
import {removeStoredToken} from "../../../../../../shared/utils/token/token.js";
import {Link, useNavigate} from "react-router-dom";
import DynamicAvatar from "../../../../general/avatar/dynamic-avatar.jsx";

export default function AccountBar() {

    const channel = useContext(AccountContext).channel;

    const navigate = useNavigate();

    const logout = () => {
        removeStoredToken();
        location.reload();
    }

    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <Link className={style["account-data"]} to={`/channel/${channel.id}`}>
                    <DynamicAvatar size={20} source={channel.avatar} id={channel.id} />
                    <p>{channel.username}</p>
                </Link>
                <button onClick={logout} className="main">Salir</button>
            </div>
        </div>
    )
}