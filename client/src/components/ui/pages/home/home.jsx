import VideoGrid from "../../videos/video-grid/grid/video-grid.jsx";

import style from "./home.module.css";
import FeaturedWrapper from "../../general/featured-wrapper/featured-wrapper";
import {createContext} from "react";

export const OrderContext = createContext();

export default function Home(props) {

    return (
        <OrderContext.Provider value={props.order}>
            <div className={style["container"]}>
                <FeaturedWrapper />
                <VideoGrid detailed={true} />
            </div>
        </OrderContext.Provider>
    );
}