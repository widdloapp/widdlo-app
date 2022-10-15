import {
    Drawer,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, useDisclosure
} from "@chakra-ui/react";
import {Fragment} from "react";
import DrawerWrapper from "../drawer/drawer-wrapper.jsx";

import style from "./auth.module.css";
import Login from "./forms/login";

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
                            <Tab className={style["tab"]}>Regístrate</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel className={style["tab-panel"]}>
                                <Login />
                            </TabPanel>
                            <TabPanel className={style["tab-panel"]}>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                } />
            </Drawer>
        </Fragment>
    )
}
