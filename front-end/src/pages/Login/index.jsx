import Login from "../../components/Login";
import React from "react";
import '../../styles/Login.css';
import Register from "../../components/Register";


function LoginPage() {
    return (
        <div className="gmr__align_items gmr__column gmr__text_align">
            <div>
                <h1>Welcome on Gam'r</h1>
                <h2>The brand new social network for Gamers !</h2>
            </div>
            <h2>Connexion</h2>
            <Login />
            <h2>Inscription</h2>
            <Register />
        </div>
    )
}

export default LoginPage
