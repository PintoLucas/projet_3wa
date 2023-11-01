import React from 'react';
import {useEffect, useState} from "react";
import '../../styles/Login.css';
import {useNavigate} from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();
    // const account = {email, password};

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
                navigate('/listposts');
            } else {
                alert(response.error);
            }
        } catch(error) {
            alert(error);
        }
    };

    async function register(event) {
        event.preventDefault();
        try {
            let res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {"Content-type": 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password,
                    isAdmin: false
                }),
            });
            let response = await res.json();
            if (res.status === 201) {
            } else {
                alert(response.error);
            }
        } catch(error) {
            alert(error);
        }
    };

    return (
        <div className="gmr__form_field gmr__login_field">
            <form onSubmit={login} className="gmr__column gmr__align-items gmr__responsive_width_100">
                <input value={email} type="text" placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)} required/>
                <input value={password} type="password" placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)} required/>
                <button className="gmr__validate_button" type="submit">Connexion</button>
                <hr />
            </form>
            <button className="gmr__register_button" onClick={register}>
                Créer un compte
            </button>
        </div>
    )
}


export default Login
