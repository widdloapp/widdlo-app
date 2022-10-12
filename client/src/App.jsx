import {Route, Routes} from "react-router-dom";
import SidebarLayout from "./components/layout/sidebar-layout/sidebar-layout";
import MainLayout from "./components/layout/main-layout/main-layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout content={<SidebarLayout content={<h1>a</h1>} />} />} />
            </Routes>
        </div>
    )
}

export default App