import Bar from "./components/layout/bar/bar";
import SidebarLayout from "./components/layout/bar/sidebar-layout";

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

                <body className="content">
                <SidebarLayout/>
                </body>
            </div>
        </div>
    )
}

export default App