import React, { useState, useRef, useEffect } from 'react';

function AccountMenu({items}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const accountInfos = JSON.parse(localStorage.getItem('accountInfos'));

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add mousedown to hide menu
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
        <div className="gmr__align_items">
          <img src={accountInfos.imageUrl} alt="User's avatar" className="gmr__avatar"/>
        </div>
        <div>
          <p>{accountInfos.name}</p>
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