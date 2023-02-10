import TextIconWrapper from "../text-icon-wrapper/text-icon-wrapper";

export default function VerifiedLabel(props) {

    if (props.data.badges[0]) {
        return (
            <TextIconWrapper first={<i className="fa-solid fa-user-check"></i>} second={<p>{props.data.badges[0].badge.label}</p>} />
        );
    }
}