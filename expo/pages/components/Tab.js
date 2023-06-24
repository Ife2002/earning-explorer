import React,{ useState } from 'react'
import { useRouter } from 'next/router';

function Tab({ children }) {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0)
    

    const Tabs = [
        <div className='bg-green-300 h-[10rem] w-[100%]'>{children}</div>,
        <div className='bg-purple-300 h-[10rem] w-[100%]'>{children}</div>,
        <div className='bg-red-300 h-[10rem] w-[100%]'>{children}</div>
    ]
  return (
    <div className='text-black w-[100%]'>
   <div className='flex flex-col justify-evenly'> 
    <h1 onClick={() => router.push('/Tabs/TabOne')} className='cursor-pointer'>Tab 1</h1>
    <h1 onClick={() => router.push('/Tabs/TabTwo')} className='cursor-pointer'>Tab 2</h1>
    <h1 onClick={() => router.push('/Tabs/TabThree')} className='cursor-pointer'>Tab 3</h1>
        </div>
    
    {Tabs[currentIndex]}
    </div>
  )
}

export default Tab