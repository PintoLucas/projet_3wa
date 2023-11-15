import '../../styles/Account.css';
import Header from "../../components/Header";
import { useState } from 'react';
import Helmet from "react-helmet"

function Account() {
    let [newName, setNewName] = useState();
    let [newBiography, setNewBiography] = useState();
    let [newAvatarUrl, setNewAvatarUrl] = useState();
    let [newBannerUrl, setNewBannerUrl] = useState();
    let [newPassword, setNewPassWord] = useState();
    const accountInfos = JSON.parse(localStorage.getItem('accountInfos'));

    async function updateName(event) {
        setNewName(event.target.value);
    }
    
    async function updateBiography(event) {
        setNewBiography(event.target.value);
    }
    
    async function updateAvatarUrl(event) {
        setNewAvatarUrl(event.target.value);
    }
    
    async function updateBannerUrl(event) {
        setNewBannerUrl(event.target.value);
    }
    
    
    async function updatePassword(event) {
        // setNewPassword(event.target.value);
    }

    async function editAccount() {
        try {
            let headers = new Headers();
            let jwtToken = accountInfos.token;
            let userId = accountInfos.userId;
            console.log(userId);
            headers.append('Authorization', 'Bearer ' + jwtToken);
            headers.append('Content-type', 'application/json');
            let res = await fetch("http://localhost:3000/api/auth/" + userId, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify({
                    name: newName,
                    biography: newBiography,
                    avatarUrl: newAvatarUrl,
                    bannerUrl: newBannerUrl,
                    password: newPassword,
                }),
            });
            let response = await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Header />
        <Helmet>
            <title>Gam'r - Account</title>
            <meta name="description" content="Gam'r, the social network made by and for the gamers ! - Account page" />
            <meta name="keywords" content="gamr, social network, account page" />
            <meta charset="UTF-8" />
        </Helmet>
        <div className="gmr__align_items gmr__column gmr__my_account">
            <h1>Modify my informations</h1>
            <form className="gmr__column gmr__align_items gmr__modify_informations" onSubmit={editAccount}>
                <div className="gmr__column">
                    <label for="name">Name :</label>
                    <input type="text" placeholder="Change name" value={newName} onChange={updateName}/>
                </div>
                <div className="gmr__column">
                    <label for="biography">Biography :</label>
                    <textarea type="text" placeholder="Change biography" value={newBiography} onChange={updateBiography}/>
                </div>
                <div className="gmr__column">
                    <label for="avatar">Avatar :</label>
                    <input type="text" placeholder="Change avatar URL" value={newAvatarUrl} onChange={updateAvatarUrl}/>
                </div>
                <div className="gmr__column">
                    <label for="avatar">Banner :</label>
                    <input type="text" placeholder="Change banner URL" value={newBannerUrl} onChange={updateBannerUrl}/>
                </div>
                <div className="gmr__column">
                    <label for="password">Password :</label>
                    <input type="password" placeholder="Change password" value={newPassword} onChange={updatePassword}/>
                </div>
                <button type="submit">Change my informations</button>
            </form>
        </div>
        </>
    );
}

export default Account;