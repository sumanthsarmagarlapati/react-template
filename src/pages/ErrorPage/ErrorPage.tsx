import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorBoundry() {
    const error = useRouteError();
    
    if (isRouteErrorResponse(error)) {
        return (

            <div style={{ padding: "40px" }}>
                <h1>{error.status}</h1>
                <p>{error.statusText}</p>
            </div>
        )
    }

    return (
        <div style={{ padding: "40px" }}>
            <h1>Something went wronggg</h1>
            <p>Unexpected error occurred</p>
        </div>
    );

}