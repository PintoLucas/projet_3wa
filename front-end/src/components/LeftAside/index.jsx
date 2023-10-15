import banner from "../../assets/banner.jpg"
import avatar from "../../assets/joe.png"

function LeftAside() {
    return (
        <aside className="gmr__left_aside">
            <img src={banner} alt="Bannière de profil" className="gmr__banner" />
            <div className="gmr__inline gmr__follow_count">
                <div className="gmr__center">
                    <p className="gmr__bold gmr__aside_account_details">1900</p>
                    <p className="gmr__secondary_text">Followers</p>
                </div>
                <div>
                    <img src={avatar} alt="Avatar d'utilisateur'" className="gmr__avatar_aside" />
                </div>
                <div className="gmr__center">
                    <p className="gmr__bold gmr__aside_account_details">1400</p>
                    <p className="gmr__secondary_text">Following</p>
                </div>
            </div>
            <div className="gmr__center">
                <p className="gmr__aside_account_details">Lucas Pinto</p>
                <p className="gmr__secondary_text">@Pseudonyme</p>
            </div>
            <div className="gmr__center">
                <p>Biographie du profil de l'utilisateur</p>
            </div>
        </aside>
    );
  }
  
  export default LeftAside;