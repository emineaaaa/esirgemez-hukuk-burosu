import React from 'react';
import aileImage from '/aile-hukuku.jpg'; // Görselinizin yolunu buraya ekleyin

const AileHukuku = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2>Aile Hukuku</h2>
        <p>
          Esirgemez Hukuk Bürosu olarak, aile hukuku alanında müvekkillerimize 
          kapsamlı ve özelleştirilmiş hukuki danışmanlık ve avukatlık hizmetleri sunmaktayız. 
          Büromuz, aile içi anlaşmazlıkların hukuki yollarla çözümünü sağlamak amacıyla, yasal 
          mevzuatlar çerçevesinde aşağıdaki hizmetleri vermektedir:
        </p>
        <ul>
          <li>Boşanma davalarının takibi ve yürütülmesi,</li>
          <li>Velayet ve nafaka davaları,</li>
          <li>Mal paylaşımı ve tasfiyesi,</li>
          <li>Aile içi şiddet ve korunma talepleri,</li>
          <li>Evlat edinme işlemleri ve davaları,</li>
          <li>Aile arabuluculuğu ve anlaşma süreçlerinin yönetimi,</li>
        </ul>
      </div>
      <div style={styles.imageContainer}>
        <img src={aileImage} alt="Aile Hukuku" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  textContainer: {
    flex: 1,
    marginRight: '20px',
    marginTop: '150px',
    marginBottom:'120px', // mt ile aşağı indirmek için marginTop eklenir
    marginLeft:'100px'
  },
  imageContainer: {
    flex: 1,
    marginTop: '150px',
    marginBottom:'120px'
     // mt ile aşağı indirmek için marginTop eklenir
  },
  image: {
    width: '70%',
    height: 'auto',
    borderRadius: '10px',
    
  },
};

export default AileHukuku;
