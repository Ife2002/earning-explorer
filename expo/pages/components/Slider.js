import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = () => {
  const [rangeValues, setRangeValues] = useState([0, 100]);

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  return (
    <div>
      <Slider.Range
        min={0}
        max={100}
        value={rangeValues}
        onChange={handleRangeChange}
      />
      <div>
        Range: {rangeValues[0]} - {rangeValues[1]}
      </div>
    </div>
  );
};

export default RangeSlider;
