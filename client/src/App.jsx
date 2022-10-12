import {Route, Routes} from "react-router-dom";
import SidebarLayout from "./components/layout/sidebar-layout/sidebar-layout";
import MainLayout from "./components/layout/main-layout/main-layout";
import Home from "./components/ui/pages/home/home.jsx";
import MainChannel from "./components/ui/pages/channel/main/main-channel";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout content={<Home />} />} />} />
                <Route path="/channel" element={<MainLayout content={<SidebarLayout content={<MainChannel />} />} />} />
            </Routes>
        </div>
    )
}

export default App