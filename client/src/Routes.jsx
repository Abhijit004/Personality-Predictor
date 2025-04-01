import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import { useAuth } from "./AuthContext";
import PersonCard from "./components/PersonCard/PersonCard";

const AllRoutes = () => {
    const { user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route path="/test" element={<PersonCard person={{name: ' Abhijit Karmakar', email: 'email@gmail.com', mbti: ["INFP"]}}/>} />
            {/* Public Route */}
            {1 && <Route path="/" element={<Homepage />} />}
            {/* Redirect to correct page if user tries accessing an invalid route */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AllRoutes;
