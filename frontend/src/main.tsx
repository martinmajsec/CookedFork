import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import ExplorePage from "./pages/ExplorePage";
import RecipePage from "./pages/RecipePage";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import NotFoundPage from "./pages/NotFoundPage";
import { SessionProvider } from "./data/SessionContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
        errorElement: <NotFoundPage></NotFoundPage>,
    },
    { path: "/collection", element: <CollectionPage></CollectionPage> },
    { path: "/explore", element: <ExplorePage></ExplorePage> },
    {
        path: "/recipe",
        element: <RecipePage></RecipePage>,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <SessionProvider>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </SessionProvider>
    </StrictMode>
);
