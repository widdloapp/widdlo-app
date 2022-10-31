import Avatar from "boring-avatars";

export default function DynamicAvatar(props) {

    if (props.source) {
        return (
            <img className="avatar undraggable unselectable" height={props.size} width={props.size} src={props.source} />
        );
    } else {
        return(
            <Avatar size={props.size * 2} variant="beam" name={props.id} colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]} />
        )
    }
}