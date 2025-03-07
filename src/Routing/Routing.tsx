import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";

export const routing = [
  { path: "/", element: <Login /> },
  { path: "register", element: <Register /> },
];
