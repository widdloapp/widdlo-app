import SidebarLayout from "../../../../layout/sidebar-layout/sidebar-layout.jsx";
import ChannelSidebar from "../channel-sidebar/channel-sidebar.jsx";
import {OrderContext} from "../../home/home-discovery/home-discovery";
import ChannelMain from "../channel-main/channel-main.jsx";

export default function ChannelView(props) {

    return (
        <OrderContext.Provider value={props.order}>
            <SidebarLayout sidebar={<ChannelSidebar />} content={<ChannelMain />} />
        </OrderContext.Provider>
    );
}