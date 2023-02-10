import style from "./comment-element.module.css";
import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import ChannelPopup from "../../../../pages/channel/channel-popup/channel-popup.jsx";
import PopoverWrapper from "../../../../pages/channel/sidebar/popover-wrapper/popover-wrapper.jsx";
import DynamicAvatar from "../../../../general/avatar/dynamic-avatar.jsx";
import CommentLikeButton from "../../../video-player/like-button/comment-like-button.jsx";

export default function CommentElement(props) {

    return (
        <Fragment>
            <PopoverWrapper trigger={<Link><DynamicAvatar size={20} source={props.comment.author.avatar} id={props.comment.author.id} /></Link>} content={<ChannelPopup id={props.comment.author.id} />} />
            <div className={style["content"]}>
                <div>
                    <p><mark>{props.comment.author.username}</mark> hace 1 día</p>
                    <p>{props.comment.body}</p>
                </div>
                <div className={style["button-wrapper"]}>
                    <CommentLikeButton comment={props.comment} />
                    <Link className="element" to={props.isComment ? `/watch/${props.id}/${props.comment.id}` : `/post/${props.id}/${props.comment.id}`} onClick={props.updateComment}>
                        <i className="fa-solid fa-message" />
                        <div hidden={!props.comment.comments > 0}>
                            <p>{props.comment.comments}</p>
                        </div>
                    </Link>
                    <div className="element">
                        <i className="fa-solid fa-share" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}