import { Box, Button, ThemeProvider} from "@mui/material";
import theme from "../../styles/theme";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Logo from "../HomePageComponents/Logo/Logo";
import GoogleLoginBtn from "../Buttons/LoginBtn/GoogleLoginBtn";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CreateRecipeBtn from "../Buttons/CreateRecipeBtn/CreateRecipeBtn";
import { useSession } from "../../data/SessionContext";
import axios from "axios";

const clientId =
    "906381579345-isaccfgghf04iaer1ggmtjlt9j4hk86d.apps.googleusercontent.com";

const Header = () => {
    const {isLoggedIn, setIsLoggedIn}= useSession();

    const logOut = async () => {
        try {
            const response = await axios.post("/api/logout", {}, {withCredentials:true});
            if(response.status === 200){

                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error("Logout error: ", error);
        }
    }

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        backgroundColor: theme.palette.textWhite.main,
                        width: "100dvw",
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 1000,
                        
                    }}
                >
                    <Box
                        sx={{
                            width: "1200px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            height: "60px",
                        }}
                    >
                        <Logo />
                        <NavigationMenu />
                        {isLoggedIn ? (
                            <Box>
                                <Button onClick={() => logOut()} sx={{borderRadius: "30px", marginRight: "0.5rem", padding:"0.5rem"}}>Log Out</Button>
                                <CreateRecipeBtn></CreateRecipeBtn>
                            </Box>
                        ) : (
                            <GoogleLoginBtn
                                setStatus={setIsLoggedIn}
                            ></GoogleLoginBtn>
                        )}
                    </Box>
                </Box>
            </ThemeProvider>
        </GoogleOAuthProvider>
    );
};

export default Header;
