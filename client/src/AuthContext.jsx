import React, { createContext, useContext, useState, useEffect } from "react";
// import { logout } from "./api";
import { Snackbar, Alert } from "@mui/material";

const AuthContext = createContext();
import { checkStatus, logoutUser } from "./utils/Auth";

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
        console.log("user login successful");
        setUser(userData);
        showAlert(`Welcome, ${userData.name.split(" ")[0]}`, "success");
        setProfileStatus(userData.mbti ? true : false);
    };

    const handleLogout = async () => {
        console.log("Logout the user!");
        try {
            await logoutUser();
            showAlert("user has been logged out", "success");
            setUser(null);
        } catch (err) {
            showAlert(err.message, "error");
        }
    };

    const isLoggedIn = async () => {
        try {
            const res = await checkStatus();
            if (!res.data.user) return;
            console.log(res?.data);
            handleLogin(res?.data?.user);
        } catch (err) {
            console.log("status check fail");
            console.log(err.message);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, profileStatus, setProfileStatus, userLoad, setUserLoad, showAlert }}>
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
