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
import Login from "./forms/login/login.jsx";
import Register from "./forms/register/register";

export default function Auth() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Fragment>
            <button className="main" onClick={onOpen}>Inicia sesión o regístrate</button>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose} >
                <DrawerWrapper closeable={true} content={
                    <Tabs>
                        <div className={style["header"]}>
                            <TabList className={style["tab-list"]}>
                                <Tab className={style["tab"]}>Inciar sesión</Tab>
                                <Tab className={style["tab"]}>Regístrate</Tab>
                            </TabList>
                        </div>

                        <TabPanels>
                            <TabPanel className={style["tab-panel"]}>
                                <Login />
                            </TabPanel>
                            <TabPanel className={style["tab-panel"]}>
                                <Register />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                } />
            </Drawer>
        </Fragment>
    )
}
