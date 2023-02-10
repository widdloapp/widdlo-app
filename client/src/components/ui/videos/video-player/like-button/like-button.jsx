import {useEffect, useState} from "react";
import {api} from "../../../../../shared/utils/token/api.js";

export default function LikeButton(props) {

    const [loaded, setLoaded] = useState([]);
    const [like, setLike] = useState([]);
    const [liked, setLiked] = useState(false);

    const body = new URLSearchParams();
    body.append("target", props.video.id);

    useEffect(() => {
        api('GET', `like/${props.video.id}`).then(res => {
            setLiked(res.liked);
            setLoaded(true);
        })
    }, [props.video])

    const likeVideo = () => {
        api('POST', `like`, body).then(res => {
            setLiked(true);
        })
    }

    const unLikeVideo = () => {
        api('DELETE', `like`, body).then(res => {
            setLiked(false);
        })
    }

    if (liked) {
        return (
            <button onClick={() => unLikeVideo()} className="main">
                <div className="text-icon">
                    <i className="fa-duotone fa-thumbs-up"></i>
                    <p>Quitar me gusta | {props.video.likes}</p>
                </div>
            </button>
        );
    } else {
        return (
            <button onClick={() => likeVideo()} className="main">
                <div className="text-icon">
                    <i className="fa-duotone fa-thumbs-up"></i>
                    <p>Me gusta | {props.video.likes}</p>
                </div>
            </button>
        );
    }
}