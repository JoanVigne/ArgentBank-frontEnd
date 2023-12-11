import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Profile from "./routes/user/profile";
import "./css/main.css";
// REDUX
import { Provider } from "react-redux";
import store from "./store";
import Transactions from "./routes/user/transactions";
import Login from "./routes/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
