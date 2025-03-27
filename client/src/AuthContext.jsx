import React, { createContext, useContext, useState } from "react";
// import { logout } from "./api";
import { Snackbar, Alert } from "@mui/material";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoad, setUserLoad] = useState(null);
    
    const [profileStatus, setProfileStatus] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });

    const showAlert = (message, severity = "info") => {
        setAlert({ open: true, message, severity });
    };

    const handleClose = () => {
        setAlert({ ...alert, open: false });
    };

    const handleLogin = (userData) => {
        setUserLoad(true)
        console.log("user login successful");
        setUser(userData);
        showAlert(`Welcome, ${userData.role} ${userData.name.split(" ")[0]}`, "success");
        setProfileStatus(userData.mbti ? true : false);
        setUserLoad(false)
    };

    const handleLogout = async () => {
        console.log("Logout the user!");
        try {
            // await logout();
            showAlert("user has been logged out", "success");
            setUser(null);
        } catch (err) {
            showAlert(err.message, "error");
        }
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, profileStatus, setProfileStatus, userLoad, setUserLoad }}>
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
