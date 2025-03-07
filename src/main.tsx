import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routing } from "./Routing/Routing.tsx";

const route = createBrowserRouter(routing);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={route} >
    <App />
  </RouterProvider>
);
