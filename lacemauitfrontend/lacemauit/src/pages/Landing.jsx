// Landing.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./landing.css";

const Landing = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <div id="landing">
            <h1>La ce ma mai uit?</h1>
            <Button variant="contained" onClick={handleClick}>
                Dive In
            </Button>
        </div>
    );
};

export default Landing;
