// Counter.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import useVisibility from './UseVisibility.jsx'; // Yeni hook'u import et
import './Counter.css';

const Counter = ({ endValue }) => {
  const [isVisible, elementRef] = useVisibility({ threshold: 0.5 }); // Görünürlük kontrolü

  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? endValue : 0,
    delay: 200,
    config: { duration: 2000 },
  });

  return <animated.div ref={elementRef} className="counter">{number.to(n => n.toFixed(0))}</animated.div>;
};

export default Counter;
