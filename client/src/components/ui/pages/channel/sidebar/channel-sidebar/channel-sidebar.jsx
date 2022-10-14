import style from "./channel-sidebar.module.css";
import {Accordion, AccordionButton, AccordionItem, AccordionPanel} from "@chakra-ui/react";

export default function ChannelSidebar() {

    return (
        <div className={style["wrapper"]}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        <h1>Inicio</h1>
                    </AccordionButton>
                    <AccordionPanel>
                        <button className="section">Destacado</button>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <button className="section">Reciente</button>
        </div>
    );
}