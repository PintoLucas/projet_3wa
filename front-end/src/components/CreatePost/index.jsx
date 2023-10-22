import avatar from "../../assets/joe.png"


function CreatePost() {
    return (
        <div className="gmr__create_post">
            <div className="gmr__inline gmr__align_items">
                <img src={avatar} alt="Avatar d'utilisateur'" className="gmr__avatar_feed" />
                <textarea className="gmr__post_textarea" placeholder="Tell us what you think about your most liked game"></textarea>
            </div>
            <div className="gmr__inline gmr__create_post_buttons">
                <div className="gmr__add_media gmr__inline">
                    <i class="fa fa-image"></i>
                    <p>Image</p>
                </div>
                <div className="gmr__add_media gmr__inline">
                    <i class="fa fa-play-circle"></i>
                    <p>Vidéo</p>
                </div>
                <button className="gmr__publish">Publier</button>
            </div>
        </div>
    );
  }
  
  export default CreatePost;