import {Popover, PopoverCloseButton, PopoverContent, PopoverTrigger} from "@chakra-ui/react";

import style from "./popover-wrapper.module.css";

export default function PopoverWrapper(props) {

    return (
        <Popover placement='right'>
            <PopoverTrigger>
                {props.trigger}
            </PopoverTrigger>
            <PopoverContent className={style["popover-content"]}>
                <PopoverCloseButton  className={style["popover-close-button"]} />
                {props.content}
            </PopoverContent>
        </Popover>
    );
}