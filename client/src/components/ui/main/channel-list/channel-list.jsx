import {useState, useEffect, useContext, Fragment} from "react";

import style from "./channel-list.module.css";
import {api} from "../../../../shared/utils/token/api.js";
import {AccountContext} from "../../../../App.jsx";
import {Link} from "react-router-dom";
import DynamicAvatar from "../../general/avatar/dynamic-avatar.jsx";

export default function ChannelList() {

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    const account = useContext(AccountContext).user;

    useEffect(() => {
        if (account) {
            api('GET', 'follow').then(res => {
                setData(res);
                setLoaded(true);
            })
        } else {
            api('GET', 'video').then(res => {
                setData(res);
                setLoaded(true);
            })
        }
    }, []);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                {
                    account ? <Fragment>
                        {
                            data.following.map((follow, key) =>
                                <div key={key} className={style["channel-wrap"]}>
                                    <Link to={`/channel/${follow.channel.id}`}>
                                        <DynamicAvatar size={25} source={follow.channel.avatar} id={follow.channel.id} />
                                    </Link>
                                </div>
                            )
                        }
                    </Fragment> : <Fragment>
                        {
                            data.videos.map((video, key) =>
                                <div key={key} className={style["channel-wrap"]}>
                                    <Link to={`/channel/${video.channel.id}`}>
                                        <DynamicAvatar size={25} source={video.channel.avatar} id={video.channel.id} />
                                    </Link>
                                </div>
                            )
                        }
                    </Fragment>
                }
            </div>
        );
    }
}