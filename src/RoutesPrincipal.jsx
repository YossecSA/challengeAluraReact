import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaBase from "./Pages/PaginaBase/PaginaBase";

export default function RoutesPrincipal() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
