import SidebarLayout from "./components/layout/sidebar-layout/sidebar-layout.jsx";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/layout/main-layout/main-layout.jsx";
import Navbar from "./components/ui/main/navbar/navbar.jsx";
import VideoGrid from "./components/ui/videos/video-grid/grid/video-grid.jsx";
import HomeSidebar from "./components/ui/pages/home/sidebar/home-sidebar.jsx";
import VideoView from "./components/ui/videos/video-view/video-view";
import NotFound from "./components/ui/general/error/not-found/not-found";
import MainChannel from "./components/ui/pages/channel/main/main-channel.jsx";
import StreamLayout from "./components/layout/stream-layout/stream-layout";
import StreamView from "./components/ui/pages/channel/stream/stream-view/stream-view";
import ChannelSidebar from "./components/ui/pages/channel/channel-sidebar/channel-sidebar.jsx";
import MainChat from "./components/ui/pages/chat/main-chat/main-chat";
import {api} from "./shared/utils/token/api.js";
import {createContext, useState} from "react";
import LiveChat from "./components/ui/pages/channel/stream/live-chat/live-chat";

export const AccountContext = createContext();

function App() {

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState({});

    api('GET', 'user').then(res => {
        setData(res);
        setLoaded(true);
    })

    if (loaded) {
        return (
            <div className="App">
                <AccountContext.Provider value={data}>
                    <Routes>
                        <Route path="/" element={<SidebarLayout navbar={<Navbar />} sidebar={<HomeSidebar />} content={<VideoGrid detailed={true} />} />} />
                        <Route path="/channel" element={<SidebarLayout />} />
                        <Route path="/watch/:id" element={<MainLayout content={<VideoView />} />} />
                        <Route path="/channel/:id" element={<SidebarLayout sidebar={<ChannelSidebar />} content={<MainChannel />} />} />
                        <Route path="/channel/:id/:chat" element={<SidebarLayout sidebar={<ChannelSidebar />} content={<MainChat />} />} />
                        <Route path="/channel/:id/stream" element={<StreamLayout sidebar={<LiveChat />} content={<StreamView />} />} />
                        <Route path="*" element={<MainLayout content={<NotFound />} />} />
                    </Routes>
                </AccountContext.Provider>
            </div>
        )
    }
}

export default App