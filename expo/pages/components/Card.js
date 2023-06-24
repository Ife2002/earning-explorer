import React from 'react'
import NumberAnimation from './NumberAnimation'

const Card = ({ number, duration, title }) => {
    return(
      <div className='w-[100%] flex items-stretch justify-center'>
        
      <div className='bg-blue-800 w-72 text-black overflow-hidden rounded-lg border-[3px] border-[#001752]'>
      <div className='bg-white py-5 px-4'>
      <h1 className='text-center text-black font-medium'>{title}</h1>
      </div>
      <div className='flex py-3 justify-center'>
        
        <div className='h-[4rem] mt-2 w-[4rem] rounded-full flex justify-center items-center bg-white'>
        <NumberAnimation number={number} duration={duration} />
        </div>
      
      </div>
      </div>
    </div>
    ) 
  }

export default Card