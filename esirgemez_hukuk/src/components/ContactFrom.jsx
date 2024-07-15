// Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactFrom.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>İletişim Bilgileri</h2>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} className="info-icon" size="2x" />
          <p>0232 422 21 22</p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" size="2x" />
          <p>info@turkoglu.av.tr</p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" size="2x" />
          <p>Alsancak Mah. 1476 Sokak Tibaş Apt. No:1 K:7, D:14, 35220 Konak/İzmir</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-card">
          
          <h2 >İletişim Formu</h2>
          <form>
            <input type="text" placeholder="Adınız Soyadınız" />
            <input type="email" placeholder="Email Adresiniz" />
            <input type="tel" placeholder="Telefon" />
            <input type="text" placeholder="Konu" />
            <textarea placeholder="Mesajınız"></textarea>
            <button type="submit">Formu Gönder</button>
          </form>
        </div>
        <div className="contact-map">
          <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3104.2098908585953!2d27.1178997206534!3d38.45530086108947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8878e5d9a63%3A0x4a5771b0e02d1f6d!2sDonanmac%C4%B1%2C%20Ulvi%20Ba%C5%9Fman%20Sk.%20No%3A18%2C%2035520%20Kar%C5%9F%C4%B1yaka%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1699351209134!5m2!1str!2str`}             width="500" 
            height="550" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
