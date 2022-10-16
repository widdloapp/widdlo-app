import {useState, useEffect, useContext, Fragment} from "react";

import style from "./channel-list.module.css";
import {api} from "../../../../shared/utils/token/api.js";
import {AccountContext} from "../../../../App.jsx";

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
                            data.following.map((channel, key) =>
                                <div key={key} className={style["channel-wrap"]}>
                                    <img className="undraggable unselectable" src={channel.channel.avatar} />
                                </div>
                            )
                        }
                    </Fragment> : <Fragment>
                        {
                            data.videos.map((video, key) =>
                                <div key={key} className={style["channel-wrap"]}>
                                    <img className="undraggable unselectable" src={video.channel.avatar} />
                                </div>
                            )
                        }
                    </Fragment>
                }
            </div>
        );
    }
}