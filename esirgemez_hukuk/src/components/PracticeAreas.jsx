import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import edin
import './PracticeAreas.css';

const PracticeAreas = () => {
  const navigate = useNavigate(); // useNavigate hook'unu kullanarak navigate fonksiyonunu alın

  const areas = [
    { title: 'Ceza Hukuku', description: 'Ceza hukuku ile ilgili hizmetler', className: 'ceza-hukuku', path: '/ceza' },
    { title: 'Aile Hukuku', description: 'Aile hukuku ile ilgili hizmetler', className: 'aile-hukuku', path: '/aile' },
    { title: 'Ticaret Hukuku', description: 'Ticaret hukuku ile ilgili hizmetler', className: 'ticaret-hukuku', path: '/ticaret' }
  ];

  const handleClick = (path) => {
    navigate(path); // Belirtilen path'e yönlendirme yapın
    window.scrollTo(0, 0); // Sayfanın en üstüne scroll yapın
  };

  return (
    <div className="practice-areas">
      {areas.map((area, index) => (
        <div key={index} className={`area-card ${area.className}`} onClick={() => handleClick(area.path)}>
          <div>
            <h2>{area.title}</h2>
            <p>{area.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticeAreas;
