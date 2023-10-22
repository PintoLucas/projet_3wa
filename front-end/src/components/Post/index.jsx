import post_media from "../../assets/banner.jpg"
import avatar from "../../assets/joe.png"

function Post() {
    return (
        <article className="gmr__post">
            <div className="gmr__inline gmr__align_items">
                <img src={avatar} alt="Avatar d'utilisateur'" className="gmr__avatar_feed" />
                <div>
                    <p className="gmr__secondary_text gmr__pseudo">@Pseudonyme</p>
                    <p className="gmr__post_name">Lucas Pinto</p>
                </div>
            </div>
            <p>Bonjour, aujourd'hui je vous partage cette magnifique photo d'un paysage urbain de nuit. Ceci est également le premier post de ce site.</p>
            <img src={post_media} alt="Post media" className="gmr__post_media" />
            <div className="gmr__inline gmr__align_items gmr__post_answer">
                <img src={avatar} alt="Avatar d'utilisateur" className="gmr__avatar_feed" />
                <textarea className="gmr__post_textarea" placeholder="Tell us what you think about this post"></textarea>
                <i class="fa fa-heart"></i>
            </div>
        </article>
    );
  }
  
  export default Post;