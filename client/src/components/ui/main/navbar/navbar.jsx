import {Input} from "@douyinfe/semi-ui";

export default function Navbar() {

    return (
        <div>
            <Input prefix={<i className="fa-light fa-magnifying-glass" />} showClear></Input>
        </div>
    );
}