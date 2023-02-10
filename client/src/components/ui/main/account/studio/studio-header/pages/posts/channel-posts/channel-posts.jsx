import ChannelSidebar from "../../../../../../../pages/channel/channel-sidebar/channel-sidebar.jsx";
import {OrderContext} from "../../../../../../../pages/home/home-discovery/home-discovery";
import SidebarLayout from "../../../../../../../../layout/sidebar-layout/sidebar-layout.jsx";
import PostDisplay from "../post-display/post-display";
import TipsSidebar from "../../../../components/tips-sidebar/tips-sidebar.jsx";
import PageHeader from "../../../../../../page-header/page-header";


export default function ChannelPosts(props) {

    return (
        <OrderContext.Provider value={props.order}>
            <SidebarLayout sidebar={<ChannelSidebar />} content={<PageHeader title="Publicaciones" content={
                <TipsSidebar sidebar={
                    <div className="tip-wrapper">
                        <div className="tip-box">
                            <h1>Tendencias</h1>
                            <hr className="spaced" />
                        </div>
                    </div>
                } content={<PostDisplay />} />} /> } />
        </OrderContext.Provider>
    );
}