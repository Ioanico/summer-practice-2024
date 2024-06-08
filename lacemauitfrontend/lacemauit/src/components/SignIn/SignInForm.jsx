import React, { useEffect, useState } from "react";
import "./signin.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ onRouteChange, loadUser }) => {
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
        // console.log("email: ", event.target.value);
    };

    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
        // console.log("pass: ", event.target.value);
    };

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(e);
    };

    return (
        <div id="container-signin">
            <div id="sign-in-form">
                <p>Sign In</p>
                <TextField
                    required
                    onChange={onEmailChange}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{
                        color: "#D90D32",
                    }}
                />
                <TextField
                    required
                    onChange={onPasswordChange}
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <div className="sign_in_button">
                    <Button
                        onClick={() => {
                            handleClick("/home");
                            onSubmitSignIn();
                        }}
                        variant="outlined"
                    >
                        Sign In
                    </Button>
                </div>
                <div className="register_button">
                    <Button
                        onClick={() => {
                            handleClick("/register");
                        }}
                        variant="text"
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
