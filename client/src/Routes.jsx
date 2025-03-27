import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";
import MbitForm from "./pages/MbtiForm/MbitForm";

const AllRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Routes>
            <Route path="/" element={ <Homepage />} />
            <Route path="/dashboard" element={ <Dashboard />} />
            <Route path="/form" element={ <MbitForm />} />
            {/* <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route> */}
        </Routes>
    );
};

export default AllRoutes;
