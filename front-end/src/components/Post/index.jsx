import post_media from "../../assets/banner.jpg"
import avatar from "../../assets/joe.png"

function Post() {
    return (
        <div className="gmr__post">
            <div className="gmr__inline">
                <img src={avatar} alt="Avatar d'utilisateur'" className="gmr__avatar_feed" />
                <div>
                    <p className="gmr__secondary_text gmr__pseudo">@Pseudonyme</p>
                    <p className="gmr__post_name">Lucas Pinto</p>
                </div>
            </div>
            <img src={post_media} alt="Post media" className="gmr__post_media" />
        </div>
    );
  }
  
  export default Post;