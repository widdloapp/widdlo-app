import SidebarLayout from "../../../../layout/sidebar-layout/sidebar-layout.jsx";
import ChannelSidebar from "../channel-sidebar/channel-sidebar.jsx";
import MainChannel from "../main/main-channel.jsx";
import {OrderContext} from "../../home/home-discovery/home-discovery";

export default function ChannelView(props) {

    return (
        <OrderContext.Provider value={props.order}>
            <SidebarLayout sidebar={<ChannelSidebar />} content={<MainChannel />} />
        </OrderContext.Provider>
    );
}