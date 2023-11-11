import { useState, useEffect } from 'react';

function Post({description, imageUrl, numberOfPostLikes, usersLiked, postId, authorId, listOfComments}) {
    let [numberOfLikes, setLikes] = useState(numberOfPostLikes);
    let [comment, setComment] = useState('');
    let [openComments, setOpenComments] = useState(false);
    let userId = JSON.parse(window.localStorage.getItem('accountInfos')).userId;
    let userName = JSON.parse(window.localStorage.getItem('accountInfos')).name;
    let userAvatar = JSON.parse(window.localStorage.getItem('accountInfos')).avatarUrl;

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
    
    async function addLike() {
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

    async function addComment(event) {
        console.log("Inside");
        try {
            let headers = new Headers();
            let jwtToken = JSON.parse(window.localStorage.getItem('accountInfos')).token;
            headers.append('Authorization', 'Bearer ' + jwtToken);
            headers.append('Content-type', 'application/json');
            let res = await fetch("http://localhost:3000/api/posts/" + postId + "/comment", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    comments: comment,
                    userName: userName,
                    userAvatar: userAvatar
                }),
            });
            const response = await res.json()
            setLikes(response.likes);
        } catch (error) {
            console.log(error);
        }
    };

    async function handleShowComments() {
        setOpenComments(!openComments);
    }

    return (
        <article className="gmr__post">
            <div className="gmr__inline gmr__align_items">
                <img src={authorInformations.avatarUrl} alt="Author's avatar" className="gmr__avatar_feed" />
                <div>
                    <p className="gmr__post_name">{authorInformations.name}</p>
                    <p className="gmr__secondary_text gmr__pseudo">@{authorInformations.pseudo}</p>
                </div>
            </div>
            <p>{description}</p>
            <img src={imageUrl} alt="Post media" className="gmr__post_media" />
            <div className="gmr__inline gmr__align_items gmr__post_answer">
                <img src={accountInfos.avatarUrl} alt="User's avatar" className="gmr__avatar_feed" />
                <form onSubmit={addComment}>
                    <textarea className="gmr__post_textarea" placeholder="Tell us what you think about this post"
                              value={comment} onChange={(e) => setComment(e.target.value)}v/>
                    <button className="gmr__comment_button">Comment</button>
                </form>
                <div className="gmr__column gmr__align_items">
                    <i class="fa fa-heart" onClick={addLike}></i>
                    <p>{numberOfLikes}</p>
                </div>
            </div>
            <button onClick={handleShowComments} className="gmr__show_comments_button">Display comments ...</button>
            <div className={`gmr__list_comments ${openComments ? "gmr__show_comments" : ""}`} id={"gmr__comments_" + postId}>{listOfComments.map((comment, index) => (
                <div className="gmr__comment gmr__column">
                    <hr />
                    <p className="gmr__comment_author">{comment[0]}</p>
                    <div className="gmr__avatar_and_comment gmr__inline">
                        <img src={comment[1]} alt="Comment's user's avatar" />
                        <p className="gmr__comment_text">{comment[2]}</p>
                    </div>
                </div>))}
            </div>
        </article>
    );
  }
  
  export default Post;