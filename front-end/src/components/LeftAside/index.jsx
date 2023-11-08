function LeftAside() {

    const accountInfos = JSON.parse(localStorage.getItem('accountInfos'));

    return (
        <aside className="gmr__left_aside">
            <img src={accountInfos.bannerUrl} alt="Bannière de profil" className="gmr__banner" />
            <div className="gmr__inline gmr__follow_count">
                {/* <div className="gmr__center">
                    <p className="gmr__bold gmr__aside_account_details">1900</p>
                    <p className="gmr__secondary_text">Followers</p>
                </div> */}
                <div>
                    <img src={accountInfos.avatarUrl} alt="User's avatar" className="gmr__avatar_aside" />
                </div>
                {/* <div className="gmr__center">
                    <p className="gmr__bold gmr__aside_account_details">1400</p>
                    <p className="gmr__secondary_text">Following</p>
                </div> */}
            </div>
            <div className="gmr__center">
                <p className="gmr__aside_account_details">{accountInfos.name}</p>
                <p className="gmr__secondary_text">@{accountInfos.pseudo}</p>
            </div>
            <div className="gmr__center">
                <p>{accountInfos.biography}</p>
            </div>
        </aside>
    );
  }
  
  export default LeftAside;