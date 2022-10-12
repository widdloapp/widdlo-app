import MainLayout from "./components/layout/general/main-layout";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout content={<h1>a</h1>} />} />
            </Routes>
        </div>
    )
}

export default App