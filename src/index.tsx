import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginRegister from "./pages/LoginRegister";
import SearchMap from "./pages/SearchMap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/searchMap" element={<SearchMap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
