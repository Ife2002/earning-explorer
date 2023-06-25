import Image from 'next/image'
import { Inter } from 'next/font/google'
import React,{ useState, useRef, useEffect } from 'react';
import Fliter from './components/Fliter';
import Country from './components/filters/Countries';
import Sectors from './components/filters/Sectors';
import Terms from './components/filters/Terms';
import Companies from './components/filters/Companies';
import NumberAnimation from './components/NumberAnimation';

import Head from 'next/head';
import Card from './components/Card';

import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import axios from 'axios';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isOpen, setIsOpen] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState("Regions");
  const [quarter, setQuarter] = useState(null)
  const [country, setCountry] = useState('All')
  const [regions, setRegions] = useState('All')
  const [companies, setCompanies] = useState('All')
  const [isLoading, setIsLoading] = useState(true);
  const [sectors, setSectors] = useState('All')
  const [terms, setTerms] = useState('All')
  const [list, setList] = useState(null)
  const [tfr, setTfr] = useState(null)
  const [tfo, setTfo] = useState(null)
  const [btr, setBtr] = useState(null)
  const [card, setCard] = useState(null);
  const [cardtwo, setCardtwo] = useState(null)
  const [cardthree, setCardthree] = useState(null)
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

  const payload = {
    "from_year": 2018,
    "to_year": 2019,
    "regions": regions,
    "countries": country,
    "companies": companies,
    "sectors": sectors,
    "terms": terms
  }
  
  

      useEffect(() => {
        const fetchData = async () => {
          const url = 'https://data-value-tool.up.railway.app/get_filters'
          const url2 = 'https://data-value-tool.up.railway.app/companies-countries-sectors'
          const url3 = 'https://data-value-tool.up.railway.app/individual-quarterly-terms-count';
          const url4 = 'https://data-value-tool.up.railway.app/terms-frequencies-over-years-quarter';
          const url5 = 'https://data-value-tool.up.railway.app/top-5-terms-by-revenue';
          const url6 = 'https://data-value-tool.up.railway.app/total-financials';
          const url7 = 'https://data-value-tool.up.railway.app/average-financials';
          const url8 = 'https://data-value-tool.up.railway.app/bottom-5-terms-by-revenue';
      
          try {
            const response1 = await axios.post(url, payload);
            const response2 = await axios.post(url2, payload);
            const response3 = await axios.post(url3, payload);
            const response4 = await axios.post(url4, payload);
            const response5 = await axios.post(url5, payload);
            const response6 = await axios.post(url6, payload);
            const response7 = await axios.post(url7, payload);
            const response8 = await axios.post(url8, payload);

            setList(JSON.parse(response1.data))
            setCard(JSON.parse(response2.data))
            setQuarter(JSON.parse(response3.data));
            setTfr(JSON.parse(response4.data))
            setTfo(JSON.parse(response5.data))
            setCardtwo(JSON.parse(response6.data))
            setCardthree(JSON.parse(response7.data))
            setBtr(JSON.parse(response8.data))
            setIsLoading(false)
           // console.log(card);
          //console.log(list)
          } catch (error) {
            console.error(error);
          }
        };

        fetchData();
      }, [payload]);

console.log("here" + JSON.stringify(btr))
//console.log(cardtwo["Total Revenue"])
// function formatNumber(value) {
//   const trillion = 1000000000000;
//   const billion = 1000000000;

//   if (value >= trillion) {
//     const roundedValue = (value / trillion).toFixed(2);
//     return roundedValue;
//   } else if (value >= billion) {
//     const roundedValue = (value / billion).toFixed(2);
//     return roundedValue;
//   } else {
//     const roundedValue = value.toFixed(2);
//     return roundedValue;
//   }
// }


  const SectorsHead = ["All sectors"]
  // console.log("find" + JSON.stringify(list))
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



  const options = {
    chart: {
      type: quarter?.type
    },
    series: [
      {
        name: 'My Dataset',
        data: quarter?.data
      }
    ],
    xaxis: {
      categories: quarter?.labels
    }
  };

  const series_data = []

  for (let i = 0; i < tfr?.labels.length; i++) {
    const series_element = {
      name : tfr?.labels[i],
      data : tfr?.data[i]
    }

    series_data.push(series_element)
    
  };

  const heatmapOptions = {
    chart: {
      type: tfr?.type
    },
    series: series_data,
  };

  const radial_data = []


  const radialOptions = {
    chart: {
      type: 'radialBar' //qjson.type
    },
    series: tfo?.data,
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    labels: tfo?.labels,
  };

  const radialTwoOptions = {
    chart: {
      type: 'radialBar' //qjson.type
    },
    series: btr?.data,
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    labels: btr?.labels,
  };

  const Tabs = [
    <div className='flex flex-row justify-between h-[100%] w-[100%]'>
    <div className='bg-blue-400 mt-4'>
     <ApexChart options={radialOptions} series={radialOptions.series} type={radialOptions.chart.type} /> 
     </div>

     <div className='bg-white mt-4'>
     <ApexChart options={heatmapOptions} series={heatmapOptions.series} type={heatmapOptions.chart.type} /> 
     </div>

     <div className='bg-white mt-4'>
     <ApexChart options={heatmapOptions} series={heatmapOptions.series} type={heatmapOptions.chart.type} /> 
     </div>
    </div>,
    <div className='flex flex-row justify-between h-[100%] w-[100%]'>
      <div className='bg-white mt-4'>
     <ApexChart options={heatmapOptions} series={heatmapOptions.series} type={heatmapOptions.chart.type} /> 
     </div>
     
     <div className='bg-blue-400 mt-4'>
     <ApexChart options={radialTwoOptions} series={radialTwoOptions.series} type={radialTwoOptions.chart.type} /> 
     </div>

     <div className='bg-white mt-4'>
     <ApexChart options={options} series={options.series} type={options.chart.type} /> 
     </div>
    </div>,
    <div className='flex flex-row justify-between h-[100%] w-[100%]'>
      <div className='bg-white mt-4'>
     <ApexChart options={options} series={options.series} type={options.chart.type} /> 
     </div>
    </div>
]

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main
      className={`flex min-h-screen bg-[#051131] flex-row ${inter.className}`}
    >
    <Head>
        <title>Earning Explore || Data product LLC</title>
     </Head> 
     {/* <Fliter /> */}
     <div className='bg-white text-white sticky top-0 left-0 h-[100vh] px-2 w-[20%]'>
      <div className='border-black border-b-2 py-5 mx-3 flex justify-center'>
      <h1 className='font-bold text-black text-2xl'>Earning Explorer</h1>
      </div>
      
     <button onClick={() => setCurrentIndex(0)} className='w-[100%] py-2 rounded-sm mt-2 cursor-pointer bg-[#051131]'>Terms Visualization</button>
    <button onClick={() => setCurrentIndex(1)} className='w-[100%] py-2 rounded-sm mt-2 cursor-pointer bg-[#051131]'>Financial Visualization</button>
    <button onClick={() => setCurrentIndex(2)} className='w-[100%] py-2 rounded-sm mt-2 cursor-pointer bg-[#051131]'>T and F Visualization</button>
     </div>
     
     <div className='w-[80%] h-[!00] px-5 text-white py-5 flex flex-col items-center'>
     <h1 className='text-2xl font-bold py-6'>Earning Explorer</h1>
     <h1>countries: {country}</h1>
     <h1>regions: {regions}</h1>
     <h1>companies: {companies}</h1>
     <h1>terms: {terms}</h1>
     <h1>sectors: {sectors}</h1>
     <div className='flex gap-2 border-white border-y-[1px] py-2 px-2'>
     <Fliter data={list} setRegions={setRegions} regions={regions} />
     <Companies data={list} setCountry={setCompanies} country={companies} />
     <Country data={list} setCountry={setCountry} country={country} />
     <Terms data={list} setCountry={setTerms} country={terms} />
     <Sectors data={list} setCountry={setSectors} country={sectors} />
     </div>

    <div className='grid grid-cols-3 gap-6 mt-4'>
    <Card title="Companies Present Based On Filters" number={card["Companies Present"]} duration={3000} />
    <Card title="Countries Present Based On Filters" number={card["Countries Present"]} duration={3000} />
    <Card title="Sectors Present Based On Filters" number={card["Sectors Present"]} duration={3000} />

    <Card title="Total Revenue Across Companies" number={cardtwo["Total Revenue"]} duration={3000} />
    <Card title="Total Operating Income Across Companies" number={cardtwo["Total Operating Income"]} duration={3000} />
    <Card title="Total Gross Profit Across Companies" number={cardtwo["Total Gross Profit"]} duration={3000} /> 

    <Card title="Average Revenue Across Companies" number={cardthree["Average Revenue"]} duration={3000} />
    <Card title="Average Operating Income Across Companies" number={cardthree["Average Operating Income"]} duration={3000} />
    <Card title="Average Gross Profit Across Companies" number={cardthree["Average Gross Profit"]} duration={3000} /> 
     </div>

     <div className=' h-[100%]  px-10 w-[100%] gap-2'>
     <h1 className='text-3xl py-3 font-bold'>Visualization</h1>
     {Tabs[currentIndex]}
     </div>
     
     </div>
    </main>
  )
}
