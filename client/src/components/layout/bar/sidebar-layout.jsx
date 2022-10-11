import {useEffect} from "react";

export default function SidebarLayout() {

    useEffect(() => {
    }, []);

    return (
        <div>
            <aside className="sidebar">
                sidebar
            </aside>

            <body className="content">
            content
            </body>
        </div>
    );
}