import banner from "../../assets/banner.jpg"
import avatar from "../../assets/joe.png"
function LeftAside() {
    return (
        <div className="gmr__left_aside">
            <p>Left Aside</p>
            <img src={banner} alt="Bannière de profil" className="gmr__banner" />
            <div className="gmr__inline">
                <div className="gmr__center">
                    <p>1900</p>
                    <p>Followers</p>
                </div>
                <div>
                    <img src={avatar} alt="Avatar de Joe Dalton" className="gmr__avatar_aside" />
                </div>
                <div className="gmr__center">
                    <p>1400</p>
                    <p>Following</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default LeftAside;