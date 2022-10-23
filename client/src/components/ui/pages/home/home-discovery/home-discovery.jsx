import {createContext} from "react";
import Navbar from "../../../main/navbar/navbar.jsx";
import HomeSidebar from "../sidebar/home-sidebar.jsx";
import SidebarLayout from "../../../../layout/sidebar-layout/sidebar-layout.jsx";
import Home from "../home.jsx";

export const OrderContext = createContext();

export default function HomeDiscovery(props) {

    return (
        <OrderContext.Provider value={props.order}>
            <SidebarLayout navbar={<Navbar />} sidebar={<HomeSidebar />} content={<Home order={props.order} />} />
        </OrderContext.Provider>
    );
}