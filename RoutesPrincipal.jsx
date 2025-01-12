import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaBase from "./src/Pages/PaginaBase/PaginaBase";

export default function RoutesPrincipal() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
