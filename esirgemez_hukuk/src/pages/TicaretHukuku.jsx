import React from 'react';

const TicaretHukuku = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2>Ticaret Hukuku</h2>
        <p>
          <strong>Esirgemez Hukuk Bürosu</strong> olarak, ticari hayatın çeşitli alanlarında faaliyet gösteren kurumsal şirketlere Ticaret Hukuku ve Şirketler Hukuku kapsamında doğan ihtilafların mahkeme önünde ve arabuluculukta çözüm sürecinde, ilgili yasal mevzuatlar çerçevesinde danışmanlık ve avukatlık hizmet aşağıdaki hizmetleri vermekteyiz:
        </p>
        <p>
          Ticaret ve Şirketler Hukuku alanında verdiğimiz hizmetlerden bazıları şunlardır:
        </p>
        <ul>
          <li>Ticari ilişkilerden kaynaklanan uyuşmazlığın çözümü,</li>
          <li>Şirketlerin yönetimine ilişkin konularda danışmanlık hizmeti,</li>
          <li>Kurumsal yönetim ve mevzuata uyum,</li>
          <li>Her türlü ticari sözleşmelerin hazırlanması, müzakeresi ve sözleşmelerden doğan ihtilafların çözümü,</li>
          <li>İş uyuşmazlıkları, yönetim kurulu, genel kurul ve yönetim kurulu toplantıları ve kararlarına ilişkin işlem ve bundan kaynaklı itilafların çözümü,</li>
          <li>Haksız rekabet davalarının açılması ve takibi konularında danışmanlık ve avukatlık hizmetleri vermekteyiz.</li>
        </ul>
      </div>
      <div style={styles.imageContainer}>
        <img src="/ticaret-hukukuu.jpeg" alt="Ticaret Hukuku" style={styles.image} />
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
        width: '80%',
        height: 'auto',
        borderRadius: '10px',
        
      },
};

export default TicaretHukuku;
