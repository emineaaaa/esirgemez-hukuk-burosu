import React from 'react';
import cezaImage from '/ceza-hukuku.jpeg'; // Görselinizin yolunu buraya ekleyin

const CezaHukuku = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2>Ceza Hukuku</h2>
        <p>
          Esirgemez Hukuk Bürosu olarak, ceza hukuku alanında müvekkillerimize 
          geniş kapsamlı danışmanlık ve avukatlık hizmetleri sunmaktayız. Büromuz, müvekkillerimizin 
          ceza davalarında en etkin şekilde savunulmasını sağlamak amacıyla, yasal mevzuat ve 
          hukuki süreçler çerçevesinde aşağıdaki hizmetleri vermektedir:
        </p>
        <ul>
          <li>Ceza davalarının takibi ve savunulması,</li>
          <li>Soruşturma aşamasında hukuki danışmanlık,</li>
          <li>Gözaltı ve tutukluluk süreçlerinde avukatlık hizmeti,</li>
          <li>İtiraz ve temyiz başvurularının hazırlanması,</li>
          <li>Suç duyurularının yapılması ve takibi,</li>
          <li>Haksız tutuklama ve gözaltı için tazminat davaları,</li>
        </ul>
      </div>
      <div style={styles.imageContainer}>
        <img src={cezaImage} alt="Ceza Hukuku" style={styles.image} />
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

export default CezaHukuku;
