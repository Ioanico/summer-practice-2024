import React, { useState } from "react";
import "./register.css";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = ({ onRouteChange, loadUser }) => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");

    const onNameChange = (event) => {
        setRegisterName(event.target.value);
    };

    const onPasswordChange = (event) => {
        setRegisterPassword(event.target.value);
    };

    const onEmailChange = (event) => {
        setRegisterEmail(event.target.value);
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    const onSubmitSignIn = () => {
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: registerEmail,
                parola: registerPassword,
                nume: registerName,
            }),
        })
            .then((response) => response.json())
            .then((user) => {
                if (user) {
                    handleClick();
                } else {
                    console.error("User registration failed");
                }
            })
            .catch((err) => {
                console.error("Error during registration: ", err);
            });
    };

    return (
        <div id="container-signin">
            <div id="sign-in-form">
                <p>Register</p>
                <TextField
                    onChange={onNameChange}
                    label="Name"
                    variant="outlined"
                />
                <TextField
                    onChange={onEmailChange}
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    onChange={onPasswordChange}
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <div className="sign_in_button">
                    <Button onClick={onSubmitSignIn} variant="outlined">
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;
