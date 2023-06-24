import React from 'react'
import NumberAnimation from './NumberAnimation'

const Card = ({ number, duration, title }) => {
    return(
      <div className='w-[100%] flex items-stretch justify-center'>
        
      <div className='bg-white w-72 text-black py-5 rounded-xl border-[3px] border-[#001752] px-3'>
      <h1 className='text-center'>{title}</h1>
      <div className='flex justify-center'>
        
      <NumberAnimation number={number} duration={duration} />
      </div>
      </div>
    </div>
    ) 
  }

export default Card