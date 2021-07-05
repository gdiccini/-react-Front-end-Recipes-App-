import React, { useState } from 'react';
import { Redirect } from 'react-router';

import '../styles/Header.css';

const Header = ({ title, fullHeader }) => {
  const [toProfile, setToProfile] = useState(false);

  const handleProfileBtn = () => {
    setToProfile(true);
  };

  return (
    <header>
      <button type="button" onClick={ handleProfileBtn }>
        <img src="profileIcon.svg" alt="profile-icon" data-testid="profile-top-btn" />
      </button>
      <h1 data-testid="page-title">{title}</h1>

      {(fullHeader) && (
        <buton type="button">
          <img src="searchIcon.svg" alt="search-icon" data-testid="search-top-btn" />
        </buton>
      )}
      {(toProfile) && <Redirect to="/perfil" />}
    </header>
  );
};

export default Header;
