import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login"
import { Register } from "../components/pages/Register"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}