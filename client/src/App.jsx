import {Route, Routes} from "react-router-dom";
import SidebarLayout from "./components/layout/sidebar-layout/sidebar-layout";
import MainLayout from "./components/layout/main-layout/main-layout";
import Home from "./components/ui/pages/home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout content={<SidebarLayout content={<Home />} />} />} />
            </Routes>
        </div>
    )
}

export default App