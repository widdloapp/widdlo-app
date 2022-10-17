import {Popover, PopoverCloseButton, PopoverContent, PopoverTrigger} from "@chakra-ui/react";

import style from "./popover-wrapper.module.css";

export default function PopoverWrapper(props) {

    return (
        <Popover>
            <PopoverTrigger>
                {props.trigger}
            </PopoverTrigger>
            <PopoverContent>
                <PopoverCloseButton />
                {props.content}
            </PopoverContent>
        </Popover>
    );
}