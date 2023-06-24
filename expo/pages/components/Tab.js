import React,{ useState } from 'react'
import { useRouter } from 'next/router';

function Tab({ children, setCurrentIndex }) {
    const router = useRouter();
    
    

    const Tabs = [
        <div className='bg-green-300 h-[10rem] w-[100%]'>{children}</div>,
        <div className='bg-purple-300 h-[10rem] w-[100%]'>{children}</div>,
        <div className='bg-red-300 h-[10rem] w-[100%]'>{children}</div>
    ]
  return (
    <div className='text-black w-[100%]'>
   <div className='flex flex-col justify-evenly'> 
    <h1 onClick={() => setCurrentIndex(0)} className='cursor-pointer'>Tab 1</h1>
    <h1 onClick={() => setCurrentIndex(1)} className='cursor-pointer'>Tab 2</h1>
    <h1 onClick={() => setCurrentIndex(2)} className='cursor-pointer'>Tab 3</h1>
    </div>
    
    {Tabs[currentIndex]}
    </div>
  )
}

export default Tab