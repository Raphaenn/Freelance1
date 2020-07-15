import React from "react";
import Background from "./components/background";

import CreateRoutes from "./routes";

export default function App() {

    const Routes = CreateRoutes;

    return (
        <Routes />
    )
}