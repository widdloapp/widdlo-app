import style from "./comment-list.module.css";
import {Drawer, useDisclosure} from "@chakra-ui/react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import CommentDrawer from "../../comment-drawer/comment-drawer.jsx";
import NoComments from "../no-comments/no-comments.jsx";

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
                            <img className="avatar" src={comment.author.avatar} />
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