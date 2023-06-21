import Image from 'next/image'
import React, { useState, useRef } from 'react';
import { Inter } from 'next/font/google'
import axios from 'axios';
import Head from 'next/head';
import Fliter from './components/Fliter';
// import BallAnimation from './components/Animation';
import NumberAnimation from './components/NumberAnimation';
import Tab from './components/Tab';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const inter = Inter({ subsets: ['latin'] })

export default function Home({ listjson, cardjson, data, qjson, tjson, tfrdjson }) {
  const [isOpen, setIsOpen] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [ filter, setFilter ] = useState("Regions")
  const [drop, setDrop] = useState([
    {
      name: "North America"
    },
    {
      name: "Europe"
    },
    {
      name: "Africa"
    },
    {
      name: "South America"
    },
    {
      name: "Oceania"
    },
  ]);
  const divRef = useRef(null);

  

  const regions = [
    {
      name: "North America"
    },
    {
      name: "Europe"
    },
    {
      name: "Africa"
    },
    {
      name: "South America"
    },
    {
      name: "Oceania"
    },
  ]

  const countries = [
    {
      name: "Japan"
    },
    {
      name: "United States"
    },
    {
      name: "France"
    },
    {
      name: "South America"
    },
    {
      name: "Oceania"
    },
  ]



  const SectorsHead = ["All sectors"]

  const handleClick = (listname) => {
    setIsOpen(!isOpen);
    setFilter(listname)
  };

  const handleClickCountry = (listname) => {
    setIsOpen(!isOpen);
    setFilter('Countries')
  };

  function handlePush({ tag }) {
    SectorsHead.push(`${tag}`);
    console.log(SectorsHead)
  }

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

  const chartData = {
    labels: ['Country 1', 'Country 2', 'Country 3'], // Replace with your actual country labels
    datasets: [{
      label: 'Population',
      data: [10, 20, 30], // Replace with your actual population data
      backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'], // Replace with your desired colors
    }],
  };

  const options = {
    chart: {
      type: 'bar' //qjson.type
    },
    series: [
      {
        name: 'My Dataset',
        data: qjson.data
      }
    ],
    xaxis: {
      categories: qjson.labels
    }
  };

  const series_data = []

  for (let i = 0; i < tjson.labels.length; i++) {
    const series_element = {
      name : tjson?.labels[i],
      data : tjson?.data[i]
    }

    series_data.push(series_element)
    
  }

  const heatmapOptions = {
    chart: {
      type: 'heatmap' //qjson.type
    },
    series: series_data,
  };

  const radialOptions = {
    chart: {
      type: 'radialBar' //qjson.type
    },
    series: tfrdjson.data,
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-20 ${inter.className}`}
    >
      <Head>
        <title>Earning Explore || Data product LLC</title>
     </Head>
     
     <Fliter />
    <h1 className='text-xl font-bold'>Earning Explorer</h1>
    <div className='bg-white p-1 px-1 mt-3 rounded-full text-black flex gap-1'>
      <div className='flex flex-col' >
      {SectorsHead.map((item, index) => (
          <button onClick={() => handleClick('Regions')} className='px-3 py-1 rounded-full focus:bg-blue-800 focus:text-white'>{item}</button>
        ))}
      </div>
    
      <button onClick={() => handleClick('Countries')} className=' px-3 py-1 rounded-full focus:bg-blue-800 focus:text-white'>Countries</button>
      <button onClick={() => handleClick('Companies')} className='px-3 py-1 rounded-full focus:bg-blue-800 focus:text-white'>Companies</button>
      <button onClick={() => handleClick('Sectors')} className='px-3 py-1 rounded-full focus:bg-blue-800 focus:text-white'>Sectors</button>
      <button onClick={() => handleClick('Terms')} className='px-3 py-1 rounded-full focus:bg-blue-800 focus:text-white'>Terms</button>
    </div>
    <div class={`transform transition-transform ${
          isOpen ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'} relative inline-block text-left`}>

  <div class=" right-0 z-10 mt-2 w-56 origin-top-right max-h-46 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1 flex flex-col" role="none">
    {/* {listjson[filter].map((item, index) => (
          <button key={index} className='text-slate-700 cursor-pointer py-1 px-4 text-sm hover:bg-slate-50'>{item}</button>
        ))} */}
    </div>
  </div>
</div>

<div className='grid w-[100%] gap-y-4 grid-cols-3 grid-row-2'>
  <Card title="Companies Present Based On Filters" number={cardjson["Companies Present"]} duration={3000} />
  <Card title="Sectors Present Based On Filters" number={cardjson["Sectors Present"]} duration={3000} />
  <Card title="Countries Present Based On Filters" number={cardjson["Countries Present"]} duration={3000} />
  <Card />
  <Card />
  <Card />
</div>

<Tab />

<div className='bg-white mt-4'>
<ApexChart options={options} series={options.series} type={options.chart.type} /> 
</div>

<div className='bg-white mt-4'>
<ApexChart options={heatmapOptions} series={heatmapOptions.series} type={heatmapOptions.chart.type} /> 
</div>

<div className='bg-white mt-4'>
<ApexChart options={radialOptions} series={radialOptions.series} type={radialOptions.chart.type} /> 
</div>


    
    
    </main>
  )
}


// export async function getStaticProps() {
//   try {
//     const payload = {
//       "from_year": 2018,
//       "to_year": 2019,
//       "regions": ["All"],
//       "countries": ["All"],
//       "companies": ["All"],
//       "sectors": ["All"],
//       "terms": ["All"]
//   }

//     const response = await axios.post('https://data-value-tool.up.railway.app/get_filters', payload);
//     const data = response.data;
    
//     console.log(data)
//     console.log()
//     return {
//       props: {
//         data
//       }
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         data: null
//       }
//     };
//   }
// }

export async function getStaticProps() {
  // Define the URLs for your APIs
  const listData = 'https://data-value-tool.up.railway.app/get_filters';
  const cardData = 'https://data-value-tool.up.railway.app/companies-countries-sectors';
  const quarterlyCountData = 'https://data-value-tool.up.railway.app/individual-quarterly-terms-count';
  const termsfrequencyData = 'https://data-value-tool.up.railway.app/terms-frequencies-over-years-quarter';
  const topfiveRevenueData = 'https://data-value-tool.up.railway.app/top-5-terms-by-revenue';

  try {
    // Make the API requests
    const payload = {
      "from_year": 2018,
      "to_year": 2022,
      "regions": ["All"],
      "countries": ["All"],
      "companies": ["All"],
      "sectors": ["All"],
      "terms": ["All"]
  }
  
    const [response1, response2, response3, response4 ] = await Promise.all([
      axios.post(listData, payload),
      axios.post(cardData, payload),
      axios.post(quarterlyCountData, payload),
      axios.post(termsfrequencyData, payload),
      //axios.post(topfiveRevenueData, payload),
    ]);

    // Extract the data from the responses
    const list = response1.data;
    const card = response2.data;
    const QCD = JSON.parse(response3.data);
    const TFD = JSON.parse(response4.data);
   // const TFRD = JSON.parse(response5.data);

    const listjson = JSON.parse(list);
    const cardjson = JSON.parse(card);
    const qjson = QCD
    const tjson = TFD
    const tfrdjson = TRFD
    console.log(tjson)
    console.log(cardjson)

    // Return the data as props
    return {
      props: {
        listjson,
        cardjson,
        qjson,
        tjson,
        // tfrdjson
      }
    };
  } catch (error) {
    // Handle any errors that occur during the API requests
    console.error('Error fetching data:', error);
    // You can return an error prop or fallback data here if needed
    return {
      props: {
        list: [],
        card: []
      }
    };
  }
  
}