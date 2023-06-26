import React from 'react';

const StockCard = ({ data }) => {
  const { 
    "Percentage Change In Stock Price Three Days Before": beforeChange,
    "Percentage Change In Stock Price Three Days After": afterChange,
    "Market Capitalization": marketCap
  } = data;

  const isBeforeGreater = beforeChange > afterChange;
  const beforeArrow = isBeforeGreater ? '↑' : '↓';
  const afterArrow = isBeforeGreater ? '↓' : '↑';
  const beforeColor = isBeforeGreater ? 'text-green-500' : 'text-red-500';
  const afterColor = isBeforeGreater ? 'text-red-500' : 'text-green-500';

  function formatNumberWithTwoDecimals(number) {
    const formattedNumber = Number(number).toFixed(2);
    return formattedNumber;
  }

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
      return val;
    }
  };

  return (
    <div className="p-4 px-10 w-[100%] flex justify-between bg-white py-10 rounded-md shadow-md">
      <div className="flex flex-col items-center justify-between mb-4">
        <div className="flex items-center">
        <span>Three Days Before</span>
          <span className={`text-xl mr-2 ${beforeColor}`}>{beforeArrow}</span>
        </div>
        <span className='font-bold text-2xl'>{formatNumberWithTwoDecimals(beforeChange)}</span>
      </div>

      <div className="flex flex-col items-center justify-between mb-4">
        <div className="flex items-center">
          <span>Three Days After</span>
          <span className={`text-xl mr-2 ${afterColor}`}>{afterArrow}</span>
        </div>
        <span className='font-bold text-2xl'>{formatNumberWithTwoDecimals(afterChange)}</span>
      </div>
      <div className="flex flex-col items-center justify-between mb-4">
        <span>Avg Market Cap</span>
        <span className='font-bold text-2xl'>{formatNumber(marketCap)}</span>
      </div>
    </div>
  );
};

export default StockCard;
