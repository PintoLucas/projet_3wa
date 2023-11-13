import Login from "../../components/Login";
import { useState } from "react";
import '../../styles/Login.css';
import Register from "../../components/Register";


function LoginPage() {
    let [openLogin, setOpenLogin] = useState(true);
    let [openRegister, setOpenRegister] = useState(false);

    async function handleShowLogin() {
        setOpenLogin(!openLogin);
        setOpenRegister(!openRegister);
    }

    async function handleShowRegister() {
        setOpenRegister(!openRegister);
        setOpenLogin(!openLogin);
    }


    return (
        <div className="gmr__align_items gmr__column gmr__text_align">
            <div>
                <h1>Welcome on Gam'r</h1>
                <h2>The brand new social network for Gamers !</h2>
            </div>
            <button className="gmr__login_button" onClick={handleShowLogin}>I already have an account</button>
            <div className={`gmr__login_form ${openLogin ? "gmr__show_login" : ""}`}>
                <Login />
            </div>
            <button className="gmr__login_button" onClick={handleShowRegister}>I want to register</button>
            <div className={`gmr__register_form ${openRegister ? "gmr__show_register" : ""}`}>
                <Register />
            </div>
        </div>
    )
}

export default LoginPage
