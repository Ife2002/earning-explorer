import Image from 'next/image'
import { Inter } from 'next/font/google'
import React,{ useState, useRef, useEffect } from 'react';
import { Bars } from  'react-loader-spinner'
import Fliter from './components/Fliter';
import Query from './components/Query';
import { BsChatLeftTextFill } from 'react-icons/bs';
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
  const [country, setCountry] = useState(['All'])
  const [regions, setRegions] = useState(['All'])
  const [companies, setCompanies] = useState(['All'])
  const [selectedTags, setSelectedTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sectors, setSectors] = useState(['All'])
  const [terms, setTerms] = useState(['All'])
  const [list, setList] = useState(null)
  const [tfr, setTfr] = useState(null)
  const [tfo, setTfo] = useState(null)
  const [btr, setBtr] = useState(null)
  const [one, setOne] = useState(null)
  const [two, setTwo] = useState(null)
  const [three, setThree] = useState(null)
  const [four, setFour] = useState(null)
  const [five, setFive] = useState(null)
  const [six, setSix] = useState(null)
  const [seven, setSeven] = useState(null)
  const [eight, setEight] = useState(null)
  const [nine, setNine] = useState(null)
  const [ten, setTen] = useState(null)
  const [card, setCard] = useState(null);
  const [open, setOpen] = useState(false)
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
    "from_year": 2012,
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
          const url9 = 'https://data-value-tool.up.railway.app/top-5-terms-by-cost-of-revenue';
          const url10 = 'https://data-value-tool.up.railway.app/bottom-5-terms-by-cost-of-revenue';
          const url11 = 'https://data-value-tool.up.railway.app/top-5-terms-by-operating-income';
          const url12 = 'https://data-value-tool.up.railway.app/bottom-5-terms-by-operating-income';
          const url13 = 'https://data-value-tool.up.railway.app/top-5-terms-and-corresponding-financials';
          const url14 = 'https://data-value-tool.up.railway.app/bottom-5-terms-and-corresponding-financials';
          const url15 = 'https://data-value-tool.up.railway.app/percentage-change-in-stock-price-and-market-cap';
          const url16 = 'https://data-value-tool.up.railway.app/average-revenue-variation-over-quarters-and-years';
          const url17 = 'https://data-value-tool.up.railway.app/average-operating-income-variation-over-quarters-and-years';
          const url18 = 'https://data-value-tool.up.railway.app/average-gross-profit-variation-over-quarters-and-years';

      
          try {
            const response1 = await axios.post(url, payload);
            const response2 = await axios.post(url2, payload);
            const response3 = await axios.post(url3, payload);
            const response4 = await axios.post(url4, payload);
            const response5 = await axios.post(url5, payload);
            const response6 = await axios.post(url6, payload);
            const response7 = await axios.post(url7, payload);
            const response8 = await axios.post(url8, payload);
            const response9 = await axios.post(url9, payload);
            const response10 = await axios.post(url10, payload);
            const response11 = await axios.post(url11, payload);
            const response12 = await axios.post(url12, payload);
            const response13 = await axios.post(url13, payload);
            const response14 = await axios.post(url14, payload);
            const response15 = await axios.post(url15, payload);
            const response16 = await axios.post(url16, payload);
            const response17 = await axios.post(url17, payload);
            const response18 = await axios.post(url18, payload);

            setList(JSON.parse(response1.data))
            setCard(JSON.parse(response2.data))
            setQuarter(JSON.parse(response3.data));
            setTfr(JSON.parse(response4.data))
            setTfo(JSON.parse(response5.data))
            setCardtwo(JSON.parse(response6.data))
            setCardthree(JSON.parse(response7.data))
            setBtr(JSON.parse(response8.data))
            setOne(JSON.parse(response9.data))
            setTwo(JSON.parse(response10.data))
            setThree(JSON.parse(response11.data))
            setFour(JSON.parse(response12.data))
            setFive(JSON.parse(response13.data))
            setSix(JSON.parse(response14.data))
            setSeven(JSON.parse(response15.data))
            setEight(JSON.parse(response16.data))
            setNine(JSON.parse(response17.data))
            setTen(JSON.parse(response18.data))
            setIsLoading(false)
           // console.log(card);
          //console.log(list)
          } catch (error) {
            console.error(error);
          }
        };

        fetchData();
      }, [payload]);

console.log("here" + JSON.stringify(one))
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


  //Barcharts Main page

  const IndvQuarterBarChart = {
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
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    title: {
      text: 'Individual quarterly terms count'
    },
  };

  const TopRevBarChart = {
    chart: {
      type: quarter?.type
    },
    series: [
      {
        name: 'My Dataset',
        data: tfo?.data
      }
    ],
    xaxis: {
      categories: tfo?.labels
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      formatter: (val) => {
        return val / 100000000 + 'B'
      }
    },
    title: {
      text: 'Top Five terms by Revenue'
    },
  };
  
  const BottomRevBarChart = {
    chart: {
      type: quarter?.type
    },
    series: [
      {
        name: 'My Dataset',
        data: btr?.data
      }
    ],
    xaxis: {
      categories: btr?.labels
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      formatter: (val) => {
        return val / 100000000 + 'B'
      }
    },
    title: {
      text: 'Bottom Five terms by Revenue'
    },
  };

  const TopCostRevBarChart = {
    chart: {
      type: quarter?.type
    },
    series: [
      {
        name: 'My Dataset',
        data: one?.data
      }
    ],
    xaxis: {
      categories: one?.labels
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      formatter: (val) => {
        return val / 100000000 + 'B'
      }
    },
    title: {
      text: 'Top Five terms by cost of revenue'
    },
  };

  const BottomCostRevBarChart = {
    chart: {
      type: quarter?.type
    },
    series: [
      {
        name: 'My Dataset',
        data: two?.data
      }
    ],
    xaxis: {
      categories: two?.labels
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      formatter: (val) => {
        return val / 100000000 + 'B'
      }
    },
    title: {
      text: 'Bottom Five terms by cost of revenue'
    },
  };

  const TopbyOptIncome = {
    chart: {
      type: quarter?.type
    },
    series: [
      {
        name: 'My Dataset',
        data: three?.data
      }
    ],
    xaxis: {
      categories: three?.labels
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      formatter: (val) => {
        return val / 100000000 + 'B'
      }
    },
    title: {
      text: 'Top Five terms by operating income'
    },
  };

  const BottombyOptIncome = {
    chart: {
      type: quarter?.type
    },
    series: [
      {
        name: 'My Dataset',
        data: four?.data
      }
    ],
    xaxis: {
      categories: four?.labels
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      formatter: (val) => {
        return val / 100000000 + 'B'
      }
    },
    title: {
      text: 'Bottom Five terms by operating income'
    },
  };

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
    colors: ["#1652f0"],
    title: {
      text: 'Terms frequency over years quarters'
    },
  };

  console.log( "treemap"+ JSON.stringify(eight?.data[0].data))

  const treemapOptions = {
    series: [{
      data: eight?.data[0].data
    }],
    options: {
      legend: {
        show: true
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: 'Basic Treemap'
      }
    },
  
  };

  const AvrgOpIncOptions = {
    series: [{
      data: nine?.data[0].data
    }],
    options: {
      legend: {
        show: true
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: 'Basic Treemap'
      }
    },
  
  };

  const AvrgGrssPrftOptions = {
    series: [{
      data: nine?.data[0].data
    }],
    options: {
      legend: {
        show: true
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: 'Basic Treemap'
      }
    },
  
  };

  const radial_data = []

  console.log(tfo?.data, quarter)
  
    
    //labels: tfo?.labels,


  //duplicate this and rename to radialThreeOptions
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
    <div className='flex flex-wrap justify-between h-[100%] w-[100%]'>
      <div className='w-[50%] flex justify-center'>
      <div className='bg-white w-[80%] rounded-lg p-3 mt-4'>
     <ApexChart options={TopRevBarChart} series={TopRevBarChart.series} type='bar' /> 
     </div>
      </div>

      
      <div className='w-[100%] flex justify-center'>
     <div className='bg-white w-[80%] rounded-lg p-3 mt-4'>
     <ApexChart options={IndvQuarterBarChart} series={IndvQuarterBarChart.series} type='bar' /> 
     </div>
     </div>
    
    
      <div className='w-[100%] flex justify-center'>
     <div className='bg-white w-[80%] rounded-lg p-3 mt-4'>
     <ApexChart options={BottomRevBarChart} series={BottomRevBarChart.series} type='bar' /> 
     </div>
     </div>

     <div className='bg-white rounded-lg p-3 mt-4'>
     <ApexChart options={TopCostRevBarChart} series={TopCostRevBarChart.series} type='bar' /> 
     </div>

     <div className='bg-white rounded-lg p-3 mt-4'>
     <ApexChart options={BottomCostRevBarChart} series={BottomCostRevBarChart.series} type='bar' /> 
     </div>
    
     <div className='bg-white w-[100%] rounded-lg p-3 mt-4'>
     <div className='bg-white w-[80%] rounded-lg p-3 mt-4'>
     <ApexChart options={TopbyOptIncome} series={TopbyOptIncome.series} type='bar' /> 
     </div>
     </div>

     <div className='bg-white rounded-lg p-3 mt-4'>
     <ApexChart options={BottombyOptIncome} series={BottombyOptIncome.series} type='bar' /> 
     </div>
     

     <div className='w-[100%] flex justify-center'>
     <div className='bg-white w-[80%] rounded-lg p-3 mt-4'>
     <ApexChart options={heatmapOptions} series={heatmapOptions.series} type={heatmapOptions.chart.type} />
     </div>
     </div>
     
    </div>,

    <div className='flex flex-row justify-between h-[100%] w-[100%]'>
      <div className='bg-white w-[100%] mt-4'>
     <ApexChart options={treemapOptions} series={treemapOptions.series} type='treemap' /> 
     </div>

     <div className='bg-white w-[100%] mt-4'>
     <ApexChart options={AvrgOpIncOptions} series={AvrgOpIncOptions.series} type='treemap' /> 
     </div>

     <div className='bg-white w-[100%] mt-4'>
     <ApexChart options={treemapOptions} series={treemapOptions.series} type='treemap' /> 
     </div>
     
     {/* <div className='bg-blue-400 mt-4'>
     <ApexChart options={radialTwoOptions} series={radialTwoOptions.series} type={radialTwoOptions.chart.type} /> 
     </div>

     <div className='bg-blue-400 mt-4'>
     <ApexChart options={radialTwoOptions} series={radialTwoOptions.series} type={radialTwoOptions.chart.type} /> 
     </div> */}

     <div className='bg-black mt-4'>
     <ApexChart options={options} series={options.series} type={options.chart.type} /> 
     </div>
    </div>,

    <div className='flex flex-row justify-between h-[100%] w-[100%]'>
      <div className='bg-white mt-4'>
     <ApexChart options={options} series={options.series} type={options.chart.type} /> 
     </div>
    </div>
]

function removeTag(tag) {
  const updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
  setRegions((prevRegions) => prevRegions.filter((region) => region !== tag));
  setCompanies((prevCompanies) => prevCompanies.filter((company) => company !== tag));
  setSectors((prevSectors) => prevSectors.filter((sector) => sector !== tag));
  setTerms((prevTerms) => prevTerms.filter((term) => term !== tag));
  setCountry((prevCountries) => prevCountries.filter((countrys) => countrys !== tag));
  setSelectedTags(updatedTags);
}

  if (isLoading) {
    return <div className='w-[100%] h-[100vh] bg-white flex justify-center items-center'>
      <Bars
  height="80"
  width="80"
  color="#1652f0"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>;
  }
  return (
    <main
      className={`flex min-h-screen bg-[#e3edf7] flex-row ${inter.className}`}
    >
    <Head>
        <title>Earning Explore || Data product LLC</title>
     </Head> 
     {/* <Fliter /> */}
     <div className='bg-white flex py-8 flex-col justify-between text-white sticky top-0 left-0 h-[100vh] px-2 w-[20%]'>
      <div className='border-black border-b-2 py-5 mx-3 flex justify-center'>
      <h1 className='font-bold text-[#1b254b] text-2xl'>Earning Explorer</h1>
      
      </div>
      <>
     <button onClick={() => setCurrentIndex(0)} className='w-[100%] py-2 rounded-sm mt-2 cursor-pointer bg-[#051131]'>Terms Visualization</button>
     <button onClick={() => setCurrentIndex(1)} className='w-[100%] py-2 rounded-sm mt-2 cursor-pointer bg-[#051131]'>Financial Visualization</button>
     <button onClick={() => setCurrentIndex(2)} className='w-[100%] py-2 rounded-sm mt-2 cursor-pointer bg-[#051131]'>T and F Visualization</button>
     </>

     <div onClick={() => setOpen(true)} className='bg-blue-700 cursor-pointer flex justify-center items-center rounded-full h-[5rem] w-[5rem]'>
     <BsChatLeftTextFill size={38} />
     </div>
     </div>
     
     <div className='w-[80%] h-[100%] px-5 text-black py-5 flex flex-col items-center'>
     <h1 className='text-2xl text-[#1b254b] font-bold py-6'>Earning Explorer</h1>
     {/* <h1>Regions: {regions}</h1>
     <h1>Country: {country}</h1>
      <h1>Terms: {terms}</h1>
      <h1>Sectors: {sectors}</h1>
      <h1>Companies: {companies}</h1> */}
      
       <Query /> 
      
      
  
     <div className='flex gap-2 border-white bg-[#051131] border-y-[1px] py-2 px-2'>
     <Fliter data={list} setSelectedTags={setSelectedTags} selectedTags={selectedTags} setRegions={setRegions} regions={regions} />
     
     <Companies data={list} setSelectedTags={setSelectedTags} selectedTags={selectedTags} setCountry={setCompanies} country={companies} />
     <Country data={list} setSelectedTags={setSelectedTags} selectedTags={selectedTags} setCountry={setCountry} country={country} />
     <Terms data={list} setSelectedTags={setSelectedTags} selectedTags={selectedTags} setCountry={setTerms} country={terms} />
     <Sectors data={list} setSelectedTags={setSelectedTags} selectedTags={selectedTags} setCountry={setSectors} country={sectors} />
     </div>

     <div className='flex flex-wrap mt-2 w-[100%] gap-2'>
      {selectedTags.map((tag, index) => (
        <div className='cursor-pointer border-[#051131] text-[#051131] px-4 rounded-full border-[2px]' key={index}>{tag} <button onClick={() => removeTag(tag)}>x</button></div>
      ))}
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
     <h1 className='text-3xl py-3 text-[#1b254b] font-bold'>Visualization</h1>
     {Tabs[currentIndex]}
     </div>
     
     </div>
    </main>
  )
}
