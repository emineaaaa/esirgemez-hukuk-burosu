import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Hakkımızda</h2>
          <p>Esirgemez Hukuk Bürosu, 1991 yılında Avukat Erhan Esirgemez tarafından İzmir’de kurulmuştur...</p>
        </div>
        <div className="footer-section">
          <h2>Site Bağlantıları</h2>
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/about">Hakkında</a></li>
            <li><a href="/practice-areas">Çalışma Alanları</a></li>
            <li><a href="/contact">İletişim</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Bize Ulaşın</h2>
          <address>
            <p>Adres: Alsancak Mahallesi 1476 Sokak Tibas Alsancak Apt. No:1 K:7, D:14, 35220 Konak/İzmir</p>
            <p>Telefon: +90 232 422 21 22</p>
            <p>Email: <a href="mailto:info@turkoglu.av.tr">info@turkoglu.av.tr</a></p>
          </address>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/erhan-esirgemez-7a929494/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Esirgemez Hukuk Bürosu. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
