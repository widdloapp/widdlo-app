import VideoGrid from "../../videos/video-grid/video-grid.jsx";

import style from "./home.module.css";
import {TabPane, Tabs} from "@douyinfe/semi-ui";

export default function Home() {

    return (
        <div className={style["container"]}>
            <Tabs type="button" className="main-tabs">
                <TabPane tab="Destacado" itemKey="1">
                    <VideoGrid />
                </TabPane>
                <TabPane tab="Destacado" itemKey="2">
                    <VideoGrid />
                </TabPane>
            </Tabs>
        </div>
    );
}