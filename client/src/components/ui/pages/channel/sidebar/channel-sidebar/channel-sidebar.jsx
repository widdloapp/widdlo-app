import style from "./channel-sidebar.module.css";
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel} from "@chakra-ui/react";

export default function ChannelSidebar() {

    return (
        <div className={style["wrapper"]}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem className={style["accordion"]}>
                    <AccordionButton className={style["accordion-button"]}>
                        <h1>Inicio</h1>
                        <AccordionIcon className={style["accordion-icon"]} />
                    </AccordionButton>
                    <AccordionPanel className={style["accordion-panel"]}>
                        <button className="section">Destacado</button>
                        <button className="section">Reciente</button>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}