import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Project from "./src/pages/Project";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/about", element: <About />},
    {path: "/contact", element: <Contact />},
    {path: "/project", element: <Project />},
])