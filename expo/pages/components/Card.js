import React from 'react'
import NumberAnimation from './NumberAnimation'

const Card = ({ number, duration, title }) => {
    return(
      <div className='w-[100%] flex items-stretch justify-center'>
        
      <div className='bg-white drop-shadow-sm w-72 flex flex-col justify-between text-black overflow-hidden rounded-lg'>
      <div className='bg-white h-10 py-2 px-4'>
      <h1 className='text-sm text-grey-800 font-medium'>{title}</h1>
      </div>
      <div className='flex py-3 text-[#051131] justify-left px-4'>      
        <NumberAnimation number={number} duration={duration} />    
      </div>
      </div>
    </div>
    ) 
  }

export default Card