import {
    Drawer,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, useDisclosure
} from "@chakra-ui/react";
import {Fragment} from "react";

import style from "./auth.module.css";
import DrawerWrapper from "../drawer/drawer-wrapper.jsx";

export default function Auth() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Fragment>
            <button className="main" onClick={onOpen}>Inicia sesión o regístrate</button>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerWrapper content={
                    <Tabs>
                        <TabList>
                            <Tab className={style["tab"]}>Inciar sesión</Tab>
                            <Tab>Regístrate</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                } />
            </Drawer>
        </Fragment>
    )
}
