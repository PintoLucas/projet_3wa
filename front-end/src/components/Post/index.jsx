import { useState, useEffect } from 'react';

import avatar from "../../assets/joe.png"

function Post({description, imageUrl, numberOfPostLikes, usersLiked, postId, authorId}) {
    let [numberOfLikes, setLikes] = useState(numberOfPostLikes);
    let userId = JSON.parse(window.localStorage.getItem('accountInfos')).userId;
    let [authorInformations, setAuthorInformations] = useState('');
    const accountInfos = JSON.parse(localStorage.getItem('accountInfos'));
    // let isAdmin = JSON.parse(window.localStorage.getItem('accountInfos')).isAdmin;

    useEffect(() => {
        async function getInfos() {
            try {
                let headers = new Headers();
                headers.append('Content-type', 'application/json');
                let res = await fetch("http://localhost:3000/api/auth/getinfos", {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({
                        authorId: authorId
                    }),
                });
                const response = await res.json()
                setAuthorInformations(response);
            } catch (error) {
                console.log(error);
            }
        };
        getInfos();
      }, [authorId]);
    
      console.log(authorInformations);
    async function like() {
        try {
            let headers = new Headers();
            let jwtToken = JSON.parse(window.localStorage.getItem('accountInfos')).token;
            headers.append('Authorization', 'Bearer ' + jwtToken);
            headers.append('Content-type', 'application/json');
            let res = await fetch("http://localhost:3000/api/posts/" + postId + "/like", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    likes: setLikes(numberOfPostLikes),
                    userId: userId
                }),
            });
            const response = await res.json()
            setLikes(response.likes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <article className="gmr__post">
            <div className="gmr__inline gmr__align_items">
                <img src={authorInformations.avatarUrl} alt="Author's avatar" className="gmr__avatar_feed" />
                <div>
                    <p className="gmr__secondary_text gmr__pseudo">@{authorInformations.pseudo}</p>
                    <p className="gmr__post_name">{authorInformations.name}</p>
                </div>
            </div>
            <p>{description}</p>
            <img src={imageUrl} alt="Post media" className="gmr__post_media" />
            <div className="gmr__inline gmr__align_items gmr__post_answer">
                <img src={accountInfos.avatarUrl} alt="User's avatar" className="gmr__avatar_feed" />
                <textarea className="gmr__post_textarea" placeholder="Tell us what you think about this post"></textarea>
                <div className="gmr__column gmr__align_items">
                    <i class="fa fa-heart" onClick={like}></i>
                    <p>{numberOfLikes}</p>
                </div>
            </div>
        </article>
    );
  }
  
  export default Post;