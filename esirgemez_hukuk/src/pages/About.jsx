import React, { useEffect } from 'react';
import './About.css';

// Görselleri import edin
import image1 from '/avukatt.webp'; // Görsellerin doğru yolunu sağlayın
import image2 from '/gorsel.jpeg'; // Görsellerin doğru yolunu sağlayın
import backgroundImage from '/hakkı.jpeg'; // Şerit görselin doğru yolunu sağlayın

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('slide-in-visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>

<div className="contact-header" style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom', // Görselin alt kısmından başlamasını sağlar
        backgroundRepeat: 'no-repeat',
        padding: '280px',
        marginBottom: '-100px'
         }}>
      </div>

    <div className="about">
      
     
      <h1 className="about-header">Biz Kimiz?</h1>
      <div className="about-content">
        <div className="about-paragraph left-align">
          <img src={image1} alt="Image 1" className="about-image"/>
          <p>Esirgemez Hukuk Bürosu, 2005 yılında Avukat Erhan Esirgemez tarafından İzmir'de kurulmuştur. Kuruluşundan bu yana, geniş bir hukuki yelpazede başarılar elde ederek Türkiye’nin önde gelen hukuk bürolarından biri olmuştur. Büromuzun uzmanlık alanları arasında Sağlık Hukuku, Bilişim Hukuku, Fikri ve Sınai Mülkiyet Hukuku (Türk Patent ve Marka Kurumu’na başvuru süreçlerini içerir), Şirketler Hukuku, Ticaret Hukuku, Yabancılar Hukuku gibi konular bulunmaktadır. Ayrıca, Aile Hukuku, Ceza Hukuku, İdare Hukuku, İş ve Sosyal Güvenlik Hukuku, İcra ve İflas Hukuku, Miras Hukuku ve Sözleşmeler Hukuku gibi alanlarda da müvekkillerimize kapsamlı dava ve hukuki danışmanlık hizmetleri sunmaktayız.</p>
        </div>
        <div className="about-paragraph slide-in right-align">
          <img src={image2} alt="Image 2" className="about-image"/>
          <p>Ekibimiz, ulusal mahkemelerde ve alternatif uyuşmazlık çözüm mekanizmalarında uzman avukatlarımızla birlikte müvekkillerimize kapsamlı hukuki danışmanlık hizmetleri sunmaktadır.

Esirgemez Hukuk Bürosu, 2011 yılında kurucumuz Avukat Zeynep Esirgemez önderliğinde İstanbul’da kurulmuştur. Kuruluşumuzdan bu yana, farklı hukuk alanlarında derin bilgi ve deneyim sahibi uzmanlarımızla müvekkillerimize Aile Hukuku, Ceza Hukuku, İdare Hukuku, Ticaret Hukuku gibi çeşitli alanlarda etkin, hızlı ve çözüm odaklı hukuk hizmetleri sunmaktayız.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
