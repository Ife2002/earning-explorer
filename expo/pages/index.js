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

import Tab from './components/Tab';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isOpen, setIsOpen] = useState(true);
  const [clickCount, setClickCount] = useState(0);
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
  const [card, setCard] = useState(null)
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
      
          try {
            const response1 = await axios.post(url, payload);
            const response2 = await axios.post(url2, payload);
            const response3 = await axios.post(url3, payload);
            const response4 = await axios.post(url4, payload);
      
            setList(JSON.parse(response1.data))
            setCard(JSON.parse(response2.data))
            setQuarter(JSON.parse(response3.data));
            setTfr(JSON.parse(response4.data))
      
            setIsLoading(false)
           // console.log(card);
          //console.log(list)
          } catch (error) {
            console.error(error);
          }
        };

        fetchData();
      }, []);

console.log("here" + tfr)

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


  // const chartData = {
  //   labels: ['Country 1', 'Country 2', 'Country 3'], // Replace with your actual country labels
  //   datasets: [{
  //     label: 'Population',
  //     data: [10, 20, 30], // Replace with your actual population data
  //     backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'], // Replace with your desired colors
  //   }],
  // };

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

  const radialOptions = {
    chart: {
      type: 'radialBar' //qjson.type
    },
    series: [44, 55, 67, 83],
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
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main
      className={`flex min-h-screen bg-[#051131] flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <Head>
        <title>Earning Explore || Data product LLC</title>
     </Head> 
     {/* <Fliter /> */}
     
     <div className='w-[100%] text-white flex flex-col items-center'>
     <h1 className=' font-bold'>Earning Explorer</h1>
     <h1>countries: {country}</h1>
     <h1>regions: {regions}</h1>
     <h1>companies: {companies}</h1>
     <h1>terms: {terms}</h1>
     <h1>sectors: {sectors}</h1>
     <div className='flex gap-2 bg-white py-2 rounded-full px-2'>
     <Fliter data={list} setRegions={setRegions} regions={regions} />
     <Companies data={list} setCountry={setCompanies} country={companies} />
     <Country data={list} setCountry={setCountry} country={country} />
     <Terms data={list} setCountry={setTerms} country={terms} />
     <Sectors data={list} setCountry={setSectors} country={sectors} />
     </div>

    <div className='grid grid-cols-3 gap-3 mt-4'>
    <Card title="Companies Present Based On Filters" number={499} duration={3000} />
    <Card title="Countries Present Based On Filters" number={19} duration={3000} />
    <Card title="Sectors Present Based On Filters" number={67} duration={3000} />
    <Card title="Countries Present Based On Filters" number={499} duration={3000} />
    <Card title="Countries Present Based On Filters" number={499} duration={3000} />
    <Card title="Countries Present Based On Filters" number={499} duration={3000} /> 
     </div>

     <div className='flex gap-2'>
     <div className='bg-blue-400 mt-4'>
     <ApexChart options={radialOptions} series={radialOptions.series} type={radialOptions.chart.type} /> 
     </div>

     <div className='bg-white mt-4'>
     <ApexChart options={heatmapOptions} series={heatmapOptions.series} type={heatmapOptions.chart.type} /> 
     </div>

     <div className='bg-white mt-4'>
     <ApexChart options={options} series={options.series} type={options.chart.type} /> 
     </div>
     </div>
     
     </div>
    </main>
  )
}
