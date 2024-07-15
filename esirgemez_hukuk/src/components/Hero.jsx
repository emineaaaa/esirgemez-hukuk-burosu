// Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {

  const navigate = useNavigate();


  const handleContactClick = () => {
    navigate('/contact');
  };


  return (
    <div className="hero">
      <h1 className="slide-in-left">Profesyonel Hukuki Hizmetler</h1>
      <p className="slide-in-left" style={{ animationDelay: '0.5s' } }>
        İhtiyacınız olan her alanda yanınızdayız.
      </p>
      <button className="cta slide-in-left" style={{ animationDelay: '1s' }} onClick={handleContactClick}>
        Bize Ulaşın
      </button>
    </div>
  );
};

export default Hero;
