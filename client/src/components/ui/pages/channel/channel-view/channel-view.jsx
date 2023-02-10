import SidebarLayout from "../../../../layout/sidebar-layout/sidebar-layout.jsx";
import ChannelSidebar from "../channel-sidebar/channel-sidebar.jsx";
import {OrderContext} from "../../home/home-discovery/home-discovery";
import ChannelMain from "../channel-main/channel-main.jsx";
import {useEffect, useState} from "react";
import {api} from "../../../../../shared/utils/token/api.js";
import {useParams} from "react-router-dom";
import Loading from "../../../general/skeleton/loading/loading";

export default function ChannelView(props) {

    const [loaded, setLoaded] = useState(false);

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', `channel/${id}`).then(res => {
            setData(res.channel);
            setLoaded(true);
        })
    }, [id]);

    if (loaded) {
        return (
            <OrderContext.Provider value={props.order}>
                <SidebarLayout sidebar={<ChannelSidebar />} content={<ChannelMain id={id} data={data} />} />
            </OrderContext.Provider>
        );
    } else {
        return(
            <Loading />
        )
    }
}