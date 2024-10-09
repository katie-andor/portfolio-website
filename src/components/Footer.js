import React from 'react';
import './Footer.css'; // Optional: to apply custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="tabs">
          <p>START</p>
        </div>
        <div className="tabs">
          <p>MINESWEEPER</p>
        </div>
        <div className="tabs">
          <p>FILES</p>
        </div>
        <div className="tabs">
          <p>GALLERY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;