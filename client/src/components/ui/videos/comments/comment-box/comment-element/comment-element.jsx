import style from "./comment-element.module.css";
import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import ChannelPopup from "../../../../pages/channel/channel-popup/channel-popup.jsx";
import PopoverWrapper from "../../../../pages/channel/sidebar/popover-wrapper/popover-wrapper.jsx";

export default function CommentElement(props) {

    return (
        <Fragment>
            <PopoverWrapper trigger={<Link><img className="avatar undraggable unselectable" src={props.comment.author.avatar} /></Link>} content={<ChannelPopup id={props.comment.author.id} />} />
            <div className={style["content"]}>
                <p><mark>{props.comment.author.username}</mark> hace 1 día</p>
                <p>{props.comment.body}</p>
                <div className={style["button-wrapper"]}>
                    <Link to={`/watch/${props.id}/${props.comment.id}`} onClick={props.updateComment}>
                        <button className="paper">Responder</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}