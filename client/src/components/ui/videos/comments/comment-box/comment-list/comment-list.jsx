import style from "./comment-list.module.css";
import {Drawer, useDisclosure} from "@chakra-ui/react";
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import CommentDrawer from "../../comment-drawer/comment-drawer.jsx";
import NoComments from "../no-comments/no-comments.jsx";
import ChannelPopup from "../../../../pages/channel/channel-popup/channel-popup.jsx";
import PopoverWrapper from "../../../../pages/channel/sidebar/popover-wrapper/popover-wrapper.jsx";

export default function CommentList(props) {

    const navigate = useNavigate();

    const { id, comment } = useParams();

    const { isOpen, onOpen } = useDisclosure()

    const updateComment = () => {
        if (!props.reply && comment) {
            onOpen();
        }
    }

    useEffect(() => {
        updateComment();
    }, [comment]);

    return (
        <div className={style["comment-wrapper"]}>
                <Drawer isOpen={isOpen} placement='right' onClose={() => navigate(`/watch/${id}`)}>
                    <CommentDrawer id={id} comment={comment} />
                </Drawer>
                {props.data.comments.length > 0 ?
                    props.data.comments.map((comment, key) =>
                        <div key={key} className={style["comment-box"]}>
                            <PopoverWrapper trigger={<Link><img className="avatar undraggable unselectable" src={comment.author.avatar} /></Link>} content={<ChannelPopup id={comment.author.id} />} />
                            <div className={style["content"]}>
                                <p><mark>{comment.author.name}</mark> hace 1 día</p>
                                <p>{comment.body}</p>
                                <div className={style["button-wrapper"]}>
                                    <Link to={`/watch/${id}/${comment.id}`} onClick={updateComment}>
                                        <button className="paper">Responder</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) :
                    <NoComments />
                }
        </div>
    );
}