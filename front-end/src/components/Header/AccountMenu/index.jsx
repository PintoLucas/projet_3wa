import React, { useState, useRef, useEffect } from 'react';
import avatar from "../../../assets/joe.png"

function AccountMenu({items}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Gère la fermeture du menu lorsque l'utilisateur clique en dehors
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="gmr__dropdown" onClick={toggleMenu} ref={dropdownRef}>
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
      {isOpen && (
        <div>
          <menu className="gmr__menu">
            <ul>
              <a href="/">Mon Compte</a>
            </ul>
            <ul>
              <a href="/">Se déconnecter</a>
            </ul>
          </menu>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;