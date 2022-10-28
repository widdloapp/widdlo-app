export default function ErrorBoundary(props) {

    try {
        return (
            props.content
        );
    } catch (error) {
        return (
            <h1>a</h1>
        )
    }
}