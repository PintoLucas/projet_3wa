import React from 'react';
import { useState } from "react";
import '../../styles/Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    async function login(event) {
        event.preventDefault();

        try {
            let res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {"Content-type": 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            let response = await res.json();
            if (res.status === 200) {
                localStorage.setItem("accountInfos", JSON.stringify(response));
                navigate('/feed');
            } else {
                alert(response.error);
            }
        } catch(error) {
            alert(error);
        }
    };


    return (
        <form onSubmit={login} className="gmr__form_field gmr__column gmr__align_items">
            <div className="gmr__column">
                <label for="email">Email :</label>
                <input value={email} type="text" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="gmr__column">
                <label for="password">Password :</label>
                <input value={password} type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button className="gmr__validate_button" type="submit">Login</button>
        </form>
    )
}


export default Login
