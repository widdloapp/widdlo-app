import SidebarLayout from "./components/layout/sidebar-layout/sidebar-layout.jsx";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/layout/main-layout/main-layout.jsx";
import Navbar from "./components/ui/main/navbar/navbar.jsx";
import VideoGrid from "./components/ui/videos/video-grid/grid/video-grid.jsx";
import HomeSidebar from "./components/ui/pages/home/sidebar/home-sidebar.jsx";
import VideoView from "./components/ui/videos/video-view/video-view";
import NotFound from "./components/ui/general/error/not-found/not-found";
import MainChannel from "./components/ui/pages/channel/main/main-channel.jsx";
import ChannelSidebar from "./components/ui/pages/channel/sidebar/channel-sidebar/channel-sidebar.jsx";
import StreamLayout from "./components/layout/stream-layout/stream-layout";
import LiveChat from "./components/ui/pages/channel/stream/live-chat/live.chat";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SidebarLayout navbar={<Navbar />} sidebar={<HomeSidebar />} content={<VideoGrid />} />} />
                <Route path="/channel" element={<SidebarLayout />} />
                <Route path="/watch/:id" element={<MainLayout content={<VideoView />} />} />
                <Route path="/channel/:id" element={<SidebarLayout sidebar={<ChannelSidebar />} content={<MainChannel />} />} />
                <Route path="/channel/:id/stream" element={<StreamLayout sidebar={<LiveChat />} content={<h1>a</h1>} />} />
                <Route path="*" element={<MainLayout content={<NotFound />} />} />
            </Routes>
        </div>
    )
}

export default App