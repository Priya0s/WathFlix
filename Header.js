import React, { useState } from 'react';

// import data from './image.json';

import './Header.css'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="footerlogo (3).png" alt="Netflix Logo" />
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="/">Movies</a>
        <a href="/">TV Shows</a>
        <a href="/">Documentories</a>
        <a href="/">Categories</a>
        <a href="/">My List</a>
      </div>
      <div className="navbar-user-icons">
       
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
       <p> <button>SignIn</button></p>
        </div>
      <div className="navbar-mobile-menu" onClick={toggleMobileMenu}>
       
      </div>
    </nav>
  );
};

export default Header;


