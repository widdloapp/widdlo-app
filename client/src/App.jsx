import SidebarLayout from "./components/layout/sidebar-layout/sidebar-layout.jsx";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/layout/main-layout/main-layout.jsx";
import Navbar from "./components/ui/main/navbar/navbar.jsx";
import HomeSidebar from "./components/ui/pages/home/sidebar/home-sidebar.jsx";
import VideoView from "./components/ui/videos/video-view/video-view";
import NotFound from "./components/ui/general/error/not-found/not-found";
import MainChannel from "./components/ui/pages/channel/main/main-channel.jsx";
import StreamLayout from "./components/layout/stream-layout/stream-layout";
import StreamView from "./components/ui/pages/channel/stream/stream-view/stream-view";
import ChannelSidebar from "./components/ui/pages/channel/channel-sidebar/channel-sidebar.jsx";
import MainChat from "./components/ui/pages/chat/main-chat/main-chat";
import {api} from "./shared/utils/token/api.js";
import {createContext, useEffect, useState} from "react";
import LiveChat from "./components/ui/pages/channel/stream/live-chat/live-chat";
import {getStoredToken} from "./shared/utils/token/token.js";
import StudioHeader from "./components/ui/main/account/studio/studio-header/studio-header";
import VideoUpload from "./components/ui/main/account/studio/studio-header/pages/video-upload/video-upload";
import VideoManager from "./components/ui/main/account/studio/studio-header/pages/video-manager/video-manager";
import Loading from "./components/ui/general/skeleton/loading/loading";
import Home from "./components/ui/pages/home/home.jsx";
import HomeDiscovery from "./components/ui/pages/home/home-discovery/home-discovery";

export const AccountContext = createContext();

function App() {

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
            api('GET', 'user').then(res => {
                if (getStoredToken()) {
                    setData(res);
                }
                setLoaded(true);
            })
    }, []);

    if (loaded) {
        return (
            <div className="App">
                <AccountContext.Provider value={data}>
                    <Routes>
                        <Route path="/" element={<HomeDiscovery order='featured' />} />
                        <Route path="/feed/latest" element={<HomeDiscovery order='latest' />} />
                        <Route path="/feed/older" element={<HomeDiscovery order='older' />} />
                        <Route path="/feed/popular" element={<HomeDiscovery order='popular' />} />
                        <Route path="/channel" element={<SidebarLayout />} />
                        <Route path="/watch/:id" element={<MainLayout content={<VideoView />} />} />
                        <Route path="/watch/:id/:comment" element={<MainLayout content={<VideoView />} />} />
                        <Route path="/channel/:id" element={<SidebarLayout sidebar={<ChannelSidebar />} content={<MainChannel />} />} />
                        <Route path="/channel/:id/:chat" element={<SidebarLayout sidebar={<ChannelSidebar />} content={<MainChat />} />} />
                        <Route path="/channel/:id/stream" element={<StreamLayout sidebar={<LiveChat />} content={<StreamView />} />} />
                        <Route path="/studio/manage" element={<SidebarLayout sidebar={<HomeSidebar />} content={<StudioHeader
                            title="Gestionar vídeos" content={<VideoManager />} />} />} />
                        <Route path="/studio/upload" element={<SidebarLayout sidebar={<HomeSidebar />} content={<StudioHeader
                            title="Publicar vídeo" content={<VideoUpload />} />} />} />
                        <Route path="*" element={<MainLayout content={<NotFound />} />} />
                    </Routes>
                </AccountContext.Provider>
            </div>
        )
    } else {
        return (
            <Loading />
        );

    }
}

export default App