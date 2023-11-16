import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
    const accountInfos = JSON.parse(localStorage.getItem('accountInfos'));
    let [description, setDescription] = useState("");
    let [imageUrl, setImageUrl] = useState("");
    let navigate = useNavigate();

    // Call the back-end to create a new post with the data typed
    async function createpost(event) {
        event.preventDefault();
        const newPost = {description, imageUrl};
        let getUserId = JSON.parse(window.localStorage.getItem('accountInfos')).userId;

        try {
            let headers = new Headers();
            let jwtToken = JSON.parse(window.localStorage.getItem('accountInfos')).token;
            headers.append('Authorization', 'Bearer ' + jwtToken);
            headers.append('Content-type', 'application/json');
            let res = await fetch("http://localhost:3000/api/posts/createpost", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    description: description,
                    imageUrl: imageUrl,
                    userId: getUserId
                }),
            });
            let response = await res.json();
            window.location.reload();
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <form className="gmr__create_post" onSubmit={createpost}>
            <div className="gmr__inline gmr__align_items gmr__responsive_column">
                <img src={accountInfos.avatarUrl} alt="User's avatar" className="gmr__avatar_feed" />
                <div className="gmr__column">
                    <label for="description">Description :</label>
                    <textarea className="gmr__createpost_textarea" placeholder="Tell us what you think about your most liked game" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
            <div className="gmr__inline gmr__create_post_buttons gmr__responsive_column">
                {/* <div className="gmr__add_media gmr__inline">
                    <i class="fa fa-image"></i>
                    <p>Image</p>
                </div>
                <div className="gmr__add_media gmr__inline">
                    <i class="fa fa-play-circle"></i>
                    <p>Vidéo</p>
                </div> */}
                <div className="gmr__column">
                    <label for="image">Image :</label>
                    <input className="gmr__post_input_add_image" placeholder="Link for an image" value={imageUrl} type="text" onChange={(e) => setImageUrl(e.target.value)}/>
                </div>
                <button className="gmr__publish" type="submit">Publier</button>
            </div>
        </form>
    );
  }
  
  export default CreatePost;