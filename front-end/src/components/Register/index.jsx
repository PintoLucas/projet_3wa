import React from 'react';
import {useEffect, useState} from "react";
import '../../styles/Login.css';
import {useNavigate} from "react-router-dom";

function Register() {
    let [name, setName] = useState("");
    let [pseudo, setPseudo] = useState("");
    let [biography, setBiography] = useState("");
    let [avatarUrl, setAvatarUrl] = useState("");
    let [bannerUrl, setBannerUrl] = useState("");

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();
    // const account = {email, password};

    
    async function register(event) {
        event.preventDefault();
        try {
            let res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {"Content-type": 'application/json'},
                body: JSON.stringify({
                    name: name,
                    pseudo: pseudo,
                    biography: biography,
                    avatarUrl: avatarUrl,
                    bannerUrl: bannerUrl,
                    email: email,
                    password: password,
                    isAdmin: false
                }),
            });
            let response = await res.json();
            if (res.status === 201) {
                alert("User successfully created, login to continue.");
            } else {
                alert(response.error);
            }
        } catch(error) {
            alert(error);
        }
    };


    return (
        <form onSubmit={register} className="gmr__form_field gmr__column gmr__align_items">
            <div className="gmr__column">
                <label for="name">Name :</label>
                <input value={name} type="text" placeholder="Name"
                        onChange={(e) => setName(e.target.value)} required/>
            </div>
            
            <div className="gmr__column">
                <label for="pseudo">Pseudo :</label>
                <input value={pseudo} type="text" placeholder="Pseudo"
                        onChange={(e) => setPseudo(e.target.value)} required/>
            </div>
            <div className="gmr__column">
                <label for="biography">Biography :</label>
                <textarea value={biography} type="text" placeholder="Short bio"
                        onChange={(e) => setBiography(e.target.value)} required/>
            </div>
            <div className="gmr__column">
                <label for="avatar">Avatar :</label>
                <input value={avatarUrl} type="text" placeholder="Profile picture"
                        onChange={(e) => setAvatarUrl(e.target.value)} required/>
            </div>
            <div className="gmr__column">
                <label for="banner">Banner :</label>
                <input value={bannerUrl} type="text" placeholder="Banner profile picture"
                        onChange={(e) => setBannerUrl(e.target.value)} required/>
            </div>
            <div className="gmr__column">
                <label for="email">Email :</label>
                <input value={email} type="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="gmr__column">
                <label for="password">Password :</label>
                <input value={password} type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button className="gmr__validate_button" type="submit">Register</button>
        </form>
    )
}


export default Register
