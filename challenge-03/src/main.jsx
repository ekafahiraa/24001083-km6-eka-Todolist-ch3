import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import HolidayList from "./HolidayList.jsx";
import AddNewTask from "./AddNewTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/holiday-list",
    element: <HolidayList />,
  },
  {
    path: "/add-new-task",
    element: <AddNewTask />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
