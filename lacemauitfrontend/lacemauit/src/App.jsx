import { useState } from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ParticlesBg from "particles-bg";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import { useNavigate } from "react-router-dom";
import React from "react";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
