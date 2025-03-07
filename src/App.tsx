import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { routing } from "./Routing/Routing";

function App() {
  const route = createBrowserRouter(routing);
  return (
    <RouterProvider router={route} >
      </RouterProvider>
  );
}

export default App;
