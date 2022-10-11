import {useEffect} from "react";
import SidebarLayout from "./sidebar-layout.jsx";

export default function Bar() {

    useEffect(() => {
    }, []);

    return (
        <div>
            <aside className="sidebar-left">
                left sidebar
            </aside>

            <body className="content">
            a
            </body>
        </div>
    );
}
