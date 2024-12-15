//import React, { useState } from "react";
import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Button } from "@mui/material";
import theme from "../../../styles/theme";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
/* import { jwtDecode, JwtPayload } from "jwt-decode";
import { useState } from "react"; */

const clientId =
    "906381579345-isaccfgghf04iaer1ggmtjlt9j4hk86d.apps.googleusercontent.com";

type GoogleLoginBtnProps = {
    setStatus: (status: boolean) => void;
};

const GoogleLoginBtn: React.FC<GoogleLoginBtnProps> = ({ setStatus }) => {
    const login = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            const { access_token } = credentialResponse;
            //const credentialResponseDecoded = jwtDecode<JwtPayload>(credentialResponse.access_token);
            try {
                // Fetch user info from Google API
                const userInfo = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                        },
                    }
                );
                console.log("User Info:", userInfo.data);

                const sessionResponse = await axios.post(
                    "/api/session",
                    {
                        access_token,
                        userInfo,
                    },
                    { withCredentials: true }
                );
                if (sessionResponse.status === 200) {
                    console.log("Session created:", sessionResponse.data);
                    setStatus(true);
                } else {
                    console.error(
                        "Session creation failed:",
                        sessionResponse.data
                    );
                    setStatus(false);
                }
            } catch (error) {
                console.error("Failed to fetch user info:", error);
                setStatus(false);
            }
        },
        onError: () => {
            console.log("Login Failed");
            setStatus(false);
        },
    });
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Button
                sx={{
                    mb: "1px",
                    width: "130px",
                    borderRadius: "30px",
                    textTransform: "none",
                    color: theme.palette.textWhite.main,
                    bgcolor: theme.palette.primary.main,
                    fontSize: 16,
                    ":hover": {
                        transition: "ease-in-out 0.15s",
                        transform: "scale(1.05)",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                }}
                onClick={() => login()}
                startIcon={<GoogleIcon />}
            >
                Log In
            </Button>
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginBtn;
