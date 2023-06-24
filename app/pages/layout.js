import React,{ useState,useEffect } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google'
import Fliter from '../../expo/pages/components/Fliter';
import axios from 'axios';
import FliterLogic from '../../expo/pages/components/FliterLogic';
import Tab from '../../expo/pages/components/Tab';

const inter = Inter({ subsets: ['latin'] })

function Layout({ children }) {
  

  return (
    <div className={`w-[100%] flex flex-row max-h-[100vh] ${inter.className}`}>
     <Head>
        <title>Earning Explore || Data product LLC</title>
     </Head> 
    <div className='w-[20%] h-[100vh] bg-white'>
     <Tab />
    </div>
     <div className='bg-[#CBD5E0] w-[80%] py-[3rem] flex flex-col items-center h-[100%] justify-center text-black'>
     <h1 className='text-xl font-bold'>Earning Explorer</h1>
     <div className='w-[100%] h-[100%]'>{children}</div>
     </div>
    </div>
  )
}

export default Layout