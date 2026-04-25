import React from 'react';
import './Fotter.css'

const Footer = () => {
  return (
    <footer className="footer-copyright">
      <p>&copy; {new Date().getFullYear()}  Portraits By Couple. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
