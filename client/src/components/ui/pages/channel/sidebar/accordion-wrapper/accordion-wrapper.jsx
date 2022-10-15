import style from "./accordion-wrapper.module.css";
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel} from "@chakra-ui/react";

export default function AccordionWrapper(props) {

    return (
        <div className={style["wrapper"]}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem className={style["accordion"]}>
                    <AccordionButton className={style["accordion-button"]}>
                        <h1>{props.title}</h1>
                        <AccordionIcon className={style["accordion-icon"]} />
                    </AccordionButton>
                    <AccordionPanel className={style["accordion-panel"]}>
                        {props.content}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}