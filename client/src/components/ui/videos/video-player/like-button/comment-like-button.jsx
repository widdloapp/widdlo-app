import React, {useEffect, useState} from "react";
import {api} from "../../../../../shared/utils/token/api.js";

export default function CommentLikeButton(props) {

    const [loaded, setLoaded] = useState([]);
    const [like, setLike] = useState([]);
    const [liked, setLiked] = useState(false);

    const body = new URLSearchParams();
    body.append("target", props.comment.id);

    useEffect(() => {
        api('GET', `like/${props.comment.id}`).then(res => {
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
            <button onClick={() => unLikeVideo()} className="element">
                <div className="element">
                    <div hidden={!props.comment.likes > 0}>
                        <p>{props.comment.likes}</p>
                    </div>
                    <i className="fa-solid fa-heart" />
                </div>
            </button>
        );
    } else {
        return (
            <button onClick={() => likeVideo()} className="element">
                <div className="element">
                    <div hidden={!props.comment.likes > 0}>
                        <p>{props.comment.likes}</p>
                    </div>
                    <i id="disabled" className="fa-solid fa-heart" />
                </div>
            </button>
        );
    }
}