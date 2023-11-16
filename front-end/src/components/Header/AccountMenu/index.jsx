import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const accountInfos = JSON.parse(localStorage.getItem('accountInfos'));
  const navigate = useNavigate();

  // Close the menu if we click outside of it
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

  function signOut() {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="gmr__dropdown" onClick={toggleMenu} ref={dropdownRef}>
      <div className="gmr__header_account">
        <div className="gmr__align_items">
          <img src={accountInfos.avatarUrl} alt="User's avatar" className="gmr__avatar"/>
        </div>
        <div>
          <p>{accountInfos.name}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faChevronDown} className="fa-chevron-down" />
        </div>
      </div>
      {isOpen && (
        <menu className="gmr__menu">
          <ul>
            <li>
              <a href="/account" className="gmr__menu_link">Mon Compte</a>
            </li>
            <li onClick={signOut} className="gmr__menu_link">Se déconnecter</li>
          </ul>
        </menu>
      )}
    </div>
  );
};

export default AccountMenu;