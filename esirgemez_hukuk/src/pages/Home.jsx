import React from 'react';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import PracticeAreas from '../components/PracticeAreas.jsx';
import Ribbon from '../components/Ribbon.jsx';
import image1 from '/avukatt.webp'; // Görsellerin doğru yolunu sağlayın





const Home = () => {
  return (
    <>
      <Hero />
      <Ribbon />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',marginLeft:'230px', maxWidth: '1200px' ,color:'#545c65', marginTop:'100px'}}>
      <div style={{ flex: 1, paddingRight: '20px'  }}>
        <p>Esirgemez Hukuk Bürosu, 2005 yılında Avukat Erhan Esirgemez tarafından İzmir'de kurulmuştur. Kuruluşundan bu yana, geniş bir hukuki yelpazede başarılar elde ederek Türkiye’nin önde gelen hukuk bürolarından biri olmuştur. Büromuzun uzmanlık alanları arasında Sağlık Hukuku, Bilişim Hukuku, Fikri ve Sınai Mülkiyet Hukuku (Türk Patent ve Marka Kurumu’na başvuru süreçlerini içerir), Şirketler Hukuku, Ticaret Hukuku, Yabancılar Hukuku gibi konular bulunmaktadır. Ayrıca, Aile Hukuku, Ceza Hukuku, İdare Hukuku, İş ve Sosyal Güvenlik Hukuku, İcra ve İflas Hukuku, Miras Hukuku ve Sözleşmeler Hukuku gibi alanlarda da müvekkillerimize kapsamlı dava ve hukuki danışmanlık hizmetleri sunmaktayız.</p>
      </div>
      <div style={{ flex: 1, textAlign: 'left' }}>
        <img src={image1} alt="Image 1" style={{ width: '350px', height: '400px' ,padding:'20px', flexShrink:'0' ,objectFit:'cover', flexDirection:'row'}} />
      </div>
    </div>

      <PracticeAreas />
     

    </>
  );
};

export default Home;
