import SidebarLayout from "./components/layout/sidebar-layout/sidebar-layout.jsx";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/layout/main-layout/main-layout.jsx";
import Navbar from "./components/ui/main/navbar/navbar.jsx";
import VideoGrid from "./components/ui/videos/video-grid/video-grid.jsx";
import HomeSidebar from "./components/ui/pages/home/sidebar/home-sidebar";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SidebarLayout navbar={<Navbar />} sidebar={<HomeSidebar />} content={<VideoGrid />} />} />
                <Route path="/channel" element={<SidebarLayout />} />
                <Route path="*" element={<MainLayout />} />
            </Routes>
        </div>
    )
}

export default App