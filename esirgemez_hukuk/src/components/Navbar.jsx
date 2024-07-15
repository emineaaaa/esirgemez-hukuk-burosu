import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Esirgemez Hukuk Bürosu</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="/" className="nav-link">Ana Sayfa</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">Hakkında</a></li>
          <li className="nav-item"><a href="/calisma" className="nav-link">Çalışma Alanları</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
