import React from 'react';
import './CalismaAlanlari.css';
import backgroundImage from '/calisma.jpeg'; // Şerit görselin doğru yolunu sağlayın


const PracticeAreas = () => {
  return (
    <div className="practice-areas">
      <header className="banner" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top ', // Görselin alt kısmından başlamasını sağlar
        backgroundRepeat: 'no-repeat',
        padding: '270px ', // Padding ayarlaması, yukarıdan ve aşağıdan 230px
        width: '100%', // Genişliği tam sayfa genişliğine yaymak için
        objectFit:'cover',
        height:'220px',
      }}>
</header>
      <section className="content" >
        <h2>Dava Hizmetleri</h2>
        <p>
          Türkoğlu & Türkoğlu Hukuk Bürosu, kurulduğu 1991 yılından beri müvekkillerine dava hizmetleri vermektedir. 
          Büromuz, çeşitli büyüklükteki Türk ve yabancı şirketler ile kurumsal ve bireysel müvekkillerinin taraf oldukları 
          uyuşmazlıkların gerek mahkemeler vasıtası ile gerekse danışmanlık hizmetleri ve müzakereler vasıtası ile çözümlemesine yardımcı olmaktadır.
        </p>
        <p>
          Türkoğlu & Türkoğlu Hukuk Bürosu’nun avukatları, müvekkillerini mahkemelerin ve temyiz makamlarının her derecesinde temsil etmektedir. 
          Büromuz avukatları aşağıdaki hukuk dalları da dâhil olmak üzere geniş bir alanda uzman dava hizmeti sağlamaktadırlar.
        </p>
        <h3>Dava hizmetleri alanında aşağıdaki avukatlık hizmetlerini vermekteyiz:</h3>
        <ul>
          <li>Şirketler hukuku uygulamalarından kaynaklanan uyuşmazlıklar,</li>
          <li>Ticari sözleşmelerden kaynaklanan ulusal ve uluslararası uyuşmazlıklar,</li>
          <li>Gayrimenkul uyuşmazlıkları,</li>
          <li>Sağlık Hukukundan kaynaklanan uyuşmazlıklar,</li>
          <li>Aile hukukundan kaynaklanan uyuşmazlıklar,</li>
          <li>Kamu ihale mevzuatından kaynaklanan uyuşmazlıklar,</li>
          <li>Fikri ve sınai mülkiyet hukukundan kaynaklanan uyuşmazlıklar,</li>
          <li>Ceza hukuku alanındaki davalar,</li>
          <li>İdare hukukunda iptal ve tam yargı davaları,</li>
          <li>İş hukukundan (işçi-işveren ilişkisi) kaynaklanan uyuşmazlıklar,</li>
          <li>İcra ve iflas hukuku alanındaki uyuşmazlıklar,</li>
          <li>Bilişim hukukunda tazminat ve ceza davaları,</li>
          <li>Miras hukuku alanındaki uyuşmazlıklar,</li>
          <li>Tüketici hukukundan kaynaklanan uyuşmazlıklar,</li>
          <li>Tazminat hukukundan kaynaklanan uyuşmazlıklar,</li>
          <li>Vergi hukukundan kaynaklanan uyuşmazlıklar.</li>
        </ul>
      </section>
    </div>
  );
};

export default PracticeAreas;
