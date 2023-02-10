import VideoGrid from "../../videos/video-grid/grid/video-grid.jsx";

import style from "./home.module.css";
import FeaturedWrapper from "../../general/featured-wrapper/featured-wrapper";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {useContext} from "react";
import {AccountContext} from "../../../../App.jsx";

export default function Home() {

    const account = useContext(AccountContext).user;

    return (
        <div className={style["container"]}>
            {account ?
                <div className={style["featured-content"]}>
                <h1>¡Hola de nuevo, {account.name}!</h1>
                <p>¿Listo para descubrir nuevo contenido hoy?</p>
                </div> :
                <div className={style["featured-content"]}>
                <h1>¡Te damos la bienvenida!</h1>
                <p>¿Listo para descubrir nuevo contenido hoy?</p>
                <p>Pst! Inicia sesión o registrate para una mejor experiencia.</p>
                </div>
            }
            <Tabs>
                <TabList className={style["tab-list"]}>
                    <Tab className={style["tab"]}>Inicio</Tab>
                    <Tab className={style["tab"]}>Publicaciones</Tab>
                    <Tab className={style["tab"]}>Notas</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <FeaturedWrapper label="Destacado esta semana" />
                        <FeaturedWrapper label="No deberías perderte" />
                        <VideoGrid detailed={true} />
                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}