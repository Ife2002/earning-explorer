import React from 'react';
import { useSpring, animated } from 'react-spring';

const NumberAnimation = ({ number, duration }) => {

  const { value } = useSpring({
    from: { value: 0 },
    to: { value: number },
    config: { duration: duration },
  });

  const formatNumber = (val) => {
    if (val >= 1000000000000) {
      // Trillion or more
      return `${(val / 1000000000000).toFixed(2)}T`;
    } else if (val >= 1000000000) {
      // Billion or more
      return `${(val / 1000000000).toFixed(2)}B`;
    } else if (val >= 1000000) {
      // Million or more
      return `${(val / 1000000).toFixed(2)}M`;
    } else if (val >= 1000) {
      // Thousand or more
      return `${(val / 1000).toFixed(2)}K`;
    } else {
      // Less than thousand
      return val.toFixed(2);
    }
  };

  

  return <animated.span className={`text-xl`}>{value.interpolate((val) => formatNumber(Math.floor(val)))}</animated.span>;
};

export default NumberAnimation;
