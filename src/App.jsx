// src/App.jsx
import "./App.css";
import BigBasketSignIn from "./app/sign-in/BigBasketSignIn";
import BigBasketOrders from "./app/viewOrders/BigBasketOrders";
import { useRoutes } from "react-router-dom";

export default function App() {
  const routes = useRoutes([
    { path: "/", element: <BigBasketSignIn /> },
    { path: "/orders", element: <BigBasketOrders /> },
    { path: "*", element: <BigBasketOrders /> },
  ]);

  return routes;
}
