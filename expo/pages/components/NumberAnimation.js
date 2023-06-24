import React from 'react';
import { useSpring, animated } from 'react-spring';

const NumberAnimation = ({ number, duration }) => {
  const { value } = useSpring({
    from: { value: 0 },
    to: { value: number },
    config: { duration: duration },
  });

  return <animated.span>{value.interpolate((val) => Math.floor(val))}</animated.span>;
};

export default NumberAnimation;
