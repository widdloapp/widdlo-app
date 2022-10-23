import {Fragment, useEffect, useState} from "react";
import {api} from "../../../../../../shared/utils/token/api.js";

export default function FollowButton(props) {

    const [loaded, setLoaded] = useState(false);
    const [following, setFollowing] = useState(false);

    useEffect(() => {
        api('GET', `follow/${props.channel}`).then(res => {
            if () {
                setFollowing(res.channel);
            }
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        return (
            <Fragment>
                {following ? <button className="main">Dejar de seguir</button> : <button className="main">Seguir</button>}
            </Fragment>
        );
    }
}