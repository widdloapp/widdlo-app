import {Fragment, useContext, useEffect, useState} from "react";
import {api} from "../../../../../../shared/utils/token/api.js";
import {AccountContext} from "../../../../../../App.jsx";

export default function FollowButton(props) {

    const account = useContext(AccountContext).user;

    const [loaded, setLoaded] = useState(false);
    const [following, setFollowing] = useState(false);
    const [date, setDate] = useState('');

    useEffect(() => {
        update();
    }, []);

    const update = () => {
        if (account) {
            api('GET', `follow/check?${new URLSearchParams({channel: props.channel})}`).then(res => {
                if (res.follow) {
                    setFollowing(true);
                    setDate(res.follow.date);
                }
                setLoaded(true);
            })
        }
    }

    const body = new URLSearchParams();
    body.append("channel", props.channel);

    const follow = () => {
        api('POST', `follow`, body).then(res => {
            setFollowing(true);
        })
    }

    const unfollow = () => {
        api('DELETE', `follow`, body).then(res => {
            setFollowing(false);
        })
    }

    if (loaded) {
        return (
            <Fragment>
                {following ? <button className="main" onClick={unfollow}>Dejar de seguir</button> : <button className="main" onClick={follow}>Seguir</button>}
            </Fragment>
        );
    }
}