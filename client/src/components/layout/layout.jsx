export default function Layout(props) {

    return (
        <div className="grid">
            <header>
                header
            </header>

            <aside className="sidebar-left">
                left sidebar
            </aside>

            <aside className="sidebar">
                {props.sidebar}
            </aside>

            <div className="content">
                {props.body}
            </div>
        </div>
    );
}
