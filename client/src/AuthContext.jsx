import React, { createContext, useContext, useState } from "react";
// import { logout } from "./api";
import { Snackbar, Alert } from "@mui/material";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [profileStatus, setProfileStatus] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });

    const showAlert = (message, severity = "info") => {
        setAlert({ open: true, message, severity });
    };

    const handleClose = () => {
        setAlert({ ...alert, open: false });
    };

    const handleLogin = (adminData) => {
        console.log("Admin login successful");
        setAdmin(adminData);
        showAlert(`Welcome, ${adminData.role} ${adminData.name.split(" ")[0]}`, "success");
        setProfileStatus(adminData.team ? true : false);
    };

    const handleLogout = async () => {
        console.log("Logout the Admin!");
        try {
            // await logout();
            showAlert("Admin has been logged out", "success");
            setAdmin(null);
        } catch (err) {
            showAlert(err.message, "error");
        }
    };

    return (
        <AuthContext.Provider value={{ admin, handleLogin, handleLogout, profileStatus, setProfileStatus }}>
            {children}

            {/* MUI Snackbar for notifications */}
            <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClose} severity={alert.severity} variant="filled">
                    {alert.message}
                </Alert>
            </Snackbar>
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
