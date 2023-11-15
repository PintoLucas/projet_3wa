import { useState, useEffect } from 'react';

function Post({description, imageUrl, numberOfPostLikes, usersLiked, postId, authorId, listOfComments}) {
    let [numberOfLikes, setLikes] = useState(numberOfPostLikes);
    let [comment, setComment] = useState('');
    let [isCommentsOpen, setIsCommentsOpen] = useState(false);
    let userId = JSON.parse(window.localStorage.getItem('accountInfos')).userId;
    let userName = JSON.parse(window.localStorage.getItem('accountInfos')).name;
    let userAvatar = JSON.parse(window.localStorage.getItem('accountInfos')).avatarUrl;
    let [authorInformations, setAuthorInformations] = useState('');
    const accountInfos = JSON.parse(localStorage.getItem('accountInfos'));
    let displayButtons = false;
    let [isModifyPostPopupOpen, setIsModifyPostPopupOpen] = useState(false);
    let [isDeletePostPopupOpen, setIsDeletePostPopupOpen] = useState(false);
    let [newPostDescription, setNewPostDescription] = useState(description);
    let [newPostImageUrl, setNewPostImageUrl] = useState(imageUrl);
    if (authorId === userId) {
        displayButtons = true;
    }

    const openModifyPostPopup = () => {
        setIsModifyPostPopupOpen(true);
    };
    
    const closeModifyPostPopup = () => {
        setIsModifyPostPopupOpen(false);
    };

    const openDeletePostPopup = () => {
        setIsDeletePostPopupOpen(true);
    };
    
    const closeDeletePostPopup = () => {
        setIsDeletePostPopupOpen(false);
    };

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

    async function openShowComments() {
        setIsCommentsOpen(!isCommentsOpen);
    }

    async function updateDescription(event) {
        setNewPostDescription(event.target.value);
    }

    async function updateImageUrl(event) {
        setNewPostImageUrl(event.target.value);
    }

    async function editPost() {
        try {
            let headers = new Headers();
            let jwtToken = JSON.parse(window.localStorage.getItem('accountInfos')).token;
            headers.append('Authorization', 'Bearer ' + jwtToken);
            headers.append('Content-type', 'application/json');
            let res = await fetch("http://localhost:3000/api/posts/" + postId, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify({
                    description: newPostDescription,
                    imageUrl: newPostImageUrl
                }),
            });
            let response = await res.json();
        } catch (error) {
            console.log(error);
        }
        setIsModifyPostPopupOpen(false);
    }

    async function deletePost() {
        try {
            let headers = new Headers();
            let jwtToken = JSON.parse(window.localStorage.getItem('accountInfos')).token;
            headers.append('Authorization', 'Bearer ' + jwtToken);
            headers.append('Content-type', 'application/json');
            let res = await fetch("http://localhost:3000/api/posts/" + postId, {
                method: "DELETE",
                headers: headers,
                body: JSON.stringify({
                    postId: postId
                }),
            });
            const response = await res.json();
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
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
            <div className="gmr__inline gmr__align_items gmr__post_answer gmr__responsive_column">
                <img src={accountInfos.avatarUrl} alt="User's avatar" className="gmr__avatar_feed" />
                <form onSubmit={addComment}>
                    <div className="gmr__column">
                        <label for="comment">Comment :</label>
                        <textarea className="gmr__post_textarea" placeholder="Tell us what you think about this post"
                              value={comment} onChange={(e) => setComment(e.target.value)}v/>
                    </div>
                    <button className="gmr__comment_button">Comment</button>
                </form>
                <div className="gmr__column gmr__align_items gmr__responsive_inline">
                    <i class="fa fa-heart" onClick={addLike}></i>
                    <p>{numberOfLikes}</p>
                </div>
            </div>
            <div className="gmr__inline gmr__justify_content gmr__responsive_column">
                <button onClick={openShowComments} className="gmr__show_comments_button">Display comments</button>
                {displayButtons &&
                <div className="gmr__inline gmr__update_post">
                    <button onClick={openModifyPostPopup}>Modify post</button>
                    <i className="fa fa-trash" onClick={openDeletePostPopup}></i>
            </div>
            }
            </div>
            <div className={`gmr__list_comments ${isCommentsOpen ? "gmr__show_comments" : ""}`} id={"gmr__comments_" + postId}>{listOfComments.map((comment, index) => (
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
        {isModifyPostPopupOpen && (
            <div className="gmr__post_popup gmr__modify_post_popup">
                <div className="gmr__modify_post_popup_content">
                    <div className="gmr__close_post_popup" onClick={closeModifyPostPopup}>
                    x
                    </div>
                    <form className="gmr__column gmr__align_items" onSubmit={editPost}>
                        <h2>Update your post</h2>
                        <div className="gmr__column">
                            <label for="description">Description :</label>
                            <textarea type="text" placeholder="Update description" value={newPostDescription} onChange={updateDescription} />
                        </div>
                        <div className="gmr__column">
                            <label for="image">Image :</label>
                            <input type="text" placeholder="Update image URL" value={newPostImageUrl} onChange={updateImageUrl} />
                        </div>
                        
                        <button type="submit">Update my post</button>
                    </form>
                </div>
            </div>
        )}
        {isDeletePostPopupOpen && (
            <div className="gmr__post_popup gmr__delete_post_popup">
                <div className="gmr__delete_post_popup_content gmr__column gmr__align_items">
                    <div className="gmr__close_post_popup" onClick={closeDeletePostPopup}>
                    x
                    </div>
                    <h2>Are you sure to delete your post ?</h2>
                    <div className="gmr__inline">
                        <button className="gmr__cancel_button" onClick={closeDeletePostPopup}>Cancel</button>
                        <button className="gmr__delete_button" onClick={deletePost}>Delete</button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
  }
  
  export default Post;