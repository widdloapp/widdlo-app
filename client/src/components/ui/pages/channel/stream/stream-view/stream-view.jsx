import style from "./stream-view.module.css";
import {Accordion, AccordionButton, AccordionItem, AccordionPanel} from "@chakra-ui/react";

export default function StreamView() {

    return (
        <div className={style["wrapper"]}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        <h1>Inicio</h1>
                    </AccordionButton>
                    <AccordionPanel>
                        <button className="section">Destacado</button>
                        <button className="section">Reciente</button>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}