import React, { useState } from 'react';
import avatar from "../../../assets/joe.png"

function AccountMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="gmr__dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="gmr__header_account">
            <div>
              <img src={avatar} alt="Avatar d'utilisateur'" className="gmr__avatar"/>
            </div>
            <div>
              <p>Lucas Pinto</p>
            </div>
            <div>
              <i class="fa fa-chevron-down"></i>
            </div>
          </div>
      {isHovered && (
        <menu className="gmr__menu">
          <ul>Mon Compte</ul>
          <ul>Se déconnecter</ul>
        </menu>
      )}
    </div>
  );
}

export default AccountMenu;