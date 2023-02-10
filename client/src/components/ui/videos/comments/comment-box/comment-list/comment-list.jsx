import style from "./comment-list.module.css";
import {Drawer, useDisclosure} from "@chakra-ui/react";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import CommentDrawer from "../../comment-drawer/comment-drawer.jsx";
import NoComments from "../no-comments/no-comments.jsx";
import CommentElement from "../comment-element/comment-element";

export default function CommentList(props) {

    const navigate = useNavigate();
    const { isOpen, onOpen } = useDisclosure()
    const { id, comment } = useParams();

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
                <Drawer isOpen={isOpen} placement='right' onClose={() => navigate(props.isComment ? `/watch/${id}` : `/channel/${id}/posts`)}>
                    <CommentDrawer id={id} comment={comment} />
                </Drawer>
                {props.data.comments.length > 0 ?
                    props.data.comments.map((comment, key) =>
                        <div key={key} className={style["comment-box"]}>
                            <CommentElement updateComment={updateComment} id={id} isComment={props.isComment} comment={comment} />
                        </div>
                    ) :
                    <NoComments />
                }
        </div>
    );
}