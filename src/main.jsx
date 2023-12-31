import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Dashboard from "./components/Dashboard.jsx";

import Students from "./components/Students.jsx";
import TeacherProfile from "./components/TeacherProfile.jsx";
import "flowbite";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
    <App />

    {/* <Dashboard /> */}
    {/* <TeacherProfile /> */}
    {/* {/* <Students /> */}
  </React.StrictMode>
);
