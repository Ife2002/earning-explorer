import React,{ useState } from 'react'

function Tab({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const Tabs = [
        <div className='bg-green-300 h-[10rem] w-[100%]'>{children}</div>,
        <div className='bg-purple-300 h-[10rem] w-[100%]'>{children}</div>,
        <div className='bg-red-300 h-[10rem] w-[100%]'>{children}</div>
    ]
  return (
    <div className='text-white w-[100%]'>
   <div className='flex flex-row justify-evenly'> 
    <h1 onClick={() => setCurrentIndex(0)} className='cursor-pointer'>Tab 1</h1>
    <h1 onClick={() => setCurrentIndex(1)} className='cursor-pointer'>Tab 2</h1>
    <h1 onClick={() => setCurrentIndex(2)} className='cursor-pointer'>Tab 3</h1>
        </div>
    
    {Tabs[currentIndex]}
    </div>
  )
}

export default Tab