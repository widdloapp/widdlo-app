import {Link} from "react-router-dom";
import DrawerWrapper from "../../../main/account/drawer/drawer-wrapper.jsx";
import CommentBox from "../comment-box/comment-box.jsx";
import {Fragment} from "react";

export default function CommentDrawer(props) {

    if (props.comment) {
        return (
            <DrawerWrapper content={
                <Fragment>
                    <Link to={`/watch/${props.id}`}>
                        <p>Volver</p>
                    </Link>
                    <CommentBox reply={true} id={props.comment} closeable={false} />
                </Fragment>
            } />
        );
    }
}