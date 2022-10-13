import MainLayout from "./components/layout/main-layout/main-layout.jsx";

function App() {
    return (
        <div className="App">
            <div className="grid">
                <header>
                    header
                </header>

                <aside className="sidebar-left">
                    left sidebar
                </aside>

                <body>
                <MainLayout />
                </body>
            </div>
        </div>
    )
}

export default App