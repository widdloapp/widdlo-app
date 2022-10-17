import {useState, useEffect, useContext, Fragment} from "react";

import style from "./channel-list.module.css";
import {api} from "../../../../shared/utils/token/api.js";
import {AccountContext} from "../../../../App.jsx";
import {Link} from "react-router-dom";

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
                                <div className={style["channel-wrap"]}>
                                    <Link key={key} to={"/channel/" + follow.channel.id}>
                                        <img className="undraggable unselectable" src={follow.channel.avatar} />
                                    </Link>
                                </div>
                            )
                        }
                    </Fragment> : <Fragment>
                        {
                            data.videos.map((video, key) =>
                                <Link key={key} to={"/channel/" + video.channel.id} className={style["channel-wrap"]}>
                                    <img className="undraggable unselectable" src={video.channel.avatar} />
                                </Link>
                            )
                        }
                    </Fragment>
                }
            </div>
        );
    }
}