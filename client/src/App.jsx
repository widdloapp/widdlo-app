import Layout from "./components/layout/layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout path="/" sidebar={<h1>a</h1>} body={<h1>b</h1>} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App