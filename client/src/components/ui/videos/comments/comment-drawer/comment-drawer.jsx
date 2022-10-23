import DrawerWrapper from "../../../main/account/drawer/drawer-wrapper.jsx";
import CommentBox from "../comment-box/comment-box.jsx";
import {Fragment} from "react";

export default function CommentDrawer(props) {

    if (props.comment) {
        return (
            <DrawerWrapper content={
                <Fragment>
                    <CommentBox reply={true} id={props.comment} closeable={false} />
                </Fragment>
            } />
        );
    }
}