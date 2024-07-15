import React from 'react';
import ContactFrom from '../components/ContactFrom.jsx';
import backgroundImage from '/avukat.png'; // Görselin yolu

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header" style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center ', // Görselin alt kısmından başlamasını sağlar
        backgroundRepeat: 'no-repeat',
        padding: '230px',
        marginBottom: '-50px'
         }}>
      </div>
      <ContactFrom />
    </div>
  );
};

export default Contact;
