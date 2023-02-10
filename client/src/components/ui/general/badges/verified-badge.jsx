import {Link} from "react-router-dom";

export default function VerifiedBadge(props) {

    if (props.verified) {
        return (
            <Link to="/one" ><i className="fa-solid fa-badge-check"></i></Link>
        );
    }
}