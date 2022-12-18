import React from "react";
import ReactDOM from "react-dom/client";
import useMockAdapter from "src/api/useMockAdapter";
import "src/styles/index.scss";
import App from "src/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const RootApp = () => {
    useMockAdapter();

    return <App />;
};

root.render(
    <React.StrictMode>
        <RootApp />,
    </React.StrictMode>,
);
