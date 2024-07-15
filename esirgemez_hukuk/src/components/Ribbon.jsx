// Ribbon.js
import React from 'react';
import Counter from './Counter';
import './Ribbon.css';

const Ribbon = () => {
  return (
    <div className="ribbon">
      <div className="ribbon-item">
        <Counter endValue={30} />+ Tecrübe/Yıl
      </div>
      <div className="ribbon-item">
        <Counter endValue={11} />+ Çalışan Sayısı
      </div>
      <div className="ribbon-item">
        <Counter endValue={58} />+ Yetiştirilen Stajyer
      </div>
    </div>
  );
};

export default Ribbon;
