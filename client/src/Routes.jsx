import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";
import MbitForm from "./pages/MbtiForm/MbitForm";
import { useAuth } from "./AuthContext";

const AllRoutes = () => {
    const { user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            {/* Public Route */}
            {!user && <Route path="/" element={<Homepage />} />}

            {/* If logged in but no MBTI, force user to /form */}
            {((user && !user?.mbti) || (user?.mbti.length===0)) && <Route path="/form" element={<MbitForm />} />}

            {/* If logged in with MBTI, allow Dashboard */}
            {user && user?.mbti.length===3 && <Route path="/dashboard" element={<Dashboard />} />}

            {/* Redirect to correct page if user tries accessing an invalid route */}
            <Route
                path="*"
                element={
                    !user ? (
                        <Navigate to="/" />
                    ) : ((user && !user?.mbti) || (user?.mbti.length===0)) ? (
                        <Navigate to="/form" />
                    ) : (
                        <Navigate to="/dashboard" />
                    )
                }
            />
        </Routes>
    );
};

export default AllRoutes;
